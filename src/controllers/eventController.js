import slugify from 'slugify';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// GET all events
export async function getEvents(req, res) {
  const events = await prisma.event.findMany({
    orderBy: { date: 'asc' }
  });
  res.json(events);
}

// GET event by ID
export async function getEvent(req, res) {
  const event = await prisma.event.findUnique({
    where: { id: req.params.id }
  });

  if (!event) return res.status(404).json({ error: 'Event not found' });
  res.json(event);
}


// CREATE new event
export async function createEvent(req, res) {
  const { title, description, date } = req.body;
  const slug = slugify(title, { lower: true, strict: true });

  const existing = await prisma.event.findUnique({ where: { slug } });
  if (existing) return res.status(400).json({ error: 'sudah ada event!' });

  const event = await prisma.event.create({
    data: {
      title,
      description,
      date: new Date(date),
      slug,
      createdById: req.user.id
    }
  });

  res.status(201).json(event);
}

// UPDATE event 
export async function updateEvent(req, res) {
  const { title, description, date } = req.body;
  const { id } = req.params;

  const existing = await prisma.event.findUnique({ where: { id } });
  if (!existing) return res.status(404).json({ error: 'Event not found' });

  const newSlug = slugify(title, { lower: true, strict: true });

  if (existing.slug !== newSlug) {
    const slugTaken = await prisma.event.findUnique({ where: { slug: newSlug } });
    if (slugTaken) return res.status(400).json({ error: 'Slug already in use' });
  }

  const updated = await prisma.event.update({
    where: { id },
    data: {
      title,
      description,
      date: new Date(date),
      slug: newSlug
    }
  });

  res.json(updated);
}

// DELETE event 
export async function deleteEvent(req, res) {
  const { id } = req.params;

  const existing = await prisma.event.findUnique({ where: { id } });
  if (!existing) return res.status(404).json({ error: 'Event not found' });

  await prisma.event.delete({ where: { id } });
  res.status(200).json({message:'Event berhasil dihapus'});
}
