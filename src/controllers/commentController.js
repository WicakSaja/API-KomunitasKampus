import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function addComment(req, res) {
  const { content } = req.body;
  const discussionId = req.params.id;

  const discussion = await prisma.discussion.findUnique({ where: { id: discussionId } });
  if (!discussion) return res.status(404).json({ error: 'Discussion not found' });

  const comment = await prisma.comment.create({
    data: {
      content,
      userId: req.user.id,
      discussionId
    }
  });

  res.status(201).json(comment);
}

export async function deleteComment(req, res) {
  const { id } = req.params;
  const comment = await prisma.comment.findUnique({ where: { id } });
  if (!comment) return res.status(404).json({ error: 'Comment not found' });
  await prisma.comment.delete({ where: { id } });
  res.status(200).json({message:'berhasil menghapus komentar'});
}
