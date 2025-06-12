import Joi from 'joi';

export const discussionSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

export const commentSchema = Joi.object({
  content: Joi.string().required(),
});