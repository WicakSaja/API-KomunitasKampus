import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getAllDiscussions(req, res) {
  const discussions = await prisma.discussion.findMany({
    orderBy: { createdAt: 'desc' },
  });
  res.json(discussions);
}

export async function getDiscussionById(req, res) {
  const { id } = req.params;

  const discussion = await prisma.discussion.findUnique({
    where: { id },
    include: {
      comments: {
        orderBy: { createdAt: 'asc' }
      }
    }
  });

  if (!discussion) return res.status(404).json({ error: 'Discussion not found' });
  res.json(discussion);
}

export async function createDiscussion(req, res) {
  const { title, content } = req.body;

  const discussion = await prisma.discussion.create({
    data: {
      title,
      content,
      userId: req.user.id
    }
  });

  res.status(201).json(discussion);
}

export async function updateDiscussion(req, res) {
  const { title, content } = req.body;
  const { id } = req.params;

  const existing = await prisma.discussion.findUnique({ where: { id } });
  if (!existing) return res.status(404).json({ error: 'Discussion not found' });

  const updated = await prisma.discussion.update({
    where: { id },
    data: { title, content }
  });

  res.json(updated);
}

export async function deleteDiscussion(req, res) {
  const { id } = req.params;

  const existing = await prisma.discussion.findUnique({ where: { id } });
  if (!existing) return res.status(404).json({ error: 'Discussion not found' });

  await prisma.comment.deleteMany({ where: { discussionId: id } });
  await prisma.discussion.delete({ where: { id } });

  res.status(200).json({ message:'diskusi berhasil dihapus' });
}
