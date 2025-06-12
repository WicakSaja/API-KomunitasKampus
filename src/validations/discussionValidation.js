import Joi from 'joi';

export const discussionSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});
