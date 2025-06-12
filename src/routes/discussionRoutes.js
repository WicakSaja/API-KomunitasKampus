import express from 'express';
import { getAllDiscussions, getDiscussionById, createDiscussion, updateDiscussion, deleteDiscussion} from '../controllers/discussionController.js';
import { validate } from '../middleware/validate.js';
import { addComment, deleteComment } from '../controllers/commentController.js';
import { discussionSchema, commentSchema } from '../validations/discussionValidation.js';
import { requireAuth, requireOwner, requireAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getAllDiscussions);
router.get('/:id', getDiscussionById);
router.post('/', requireAuth, validate(discussionSchema), createDiscussion);
router.put('/:id', requireAuth, requireOwner('discussion'), validate(discussionSchema), updateDiscussion);
router.delete('/:id', requireAuth, requireOwner('discussion'), deleteDiscussion);

// Menambah komentar pada diskusi dengan parameter id diskusi
router.post('/:id/comment', requireAuth, validate(commentSchema), addComment);
// menghapus komentar
router.delete('/comment/:id', requireAuth, requireOwner('comment') , deleteComment);


export default router;
