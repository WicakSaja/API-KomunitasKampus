import Joi from 'joi';

export const eventSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  date: Joi.date().iso().required()
});
