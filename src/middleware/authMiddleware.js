import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;

// akses untuk yang sudah login
export function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = { id: decoded.sub, role: decoded.role };
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

// akses hanya untuk admin
export function requireAdmin(req, res, next) {
  if (req.user?.role !== 'ADMIN') {
    return res.status(403).json({ error: 'Forbidden: Admins only' });
  }
  next();
}

// akses untuk pemilik entitas tertentu, komentar dan diskusi
export function requireOwner(entityType) {
  return async (req, res, next) => {
    const id = req.params.id;
    const user = req.user;

    try {
      const record = await prisma[entityType].findUnique({
        where: { id },
        select: { userId: true }
      });

      if (!record) {
        return res.status(404).json({ error: `${entityType} not found` });
      }

      // Hanya owner atau admin yang bisa lanjut
      if (record.userId !== user.id && user.role !== 'ADMIN') {
        return res.status(403).json({ error: 'Forbidden: Not the owner or admin' });
      }

      next();
    } catch (err) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
}
