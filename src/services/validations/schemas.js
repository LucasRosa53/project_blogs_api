const Joi = require('joi');

const schema = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }).messages({ 'string.empty': 'Some required fields are missing' });

const categoryNameSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': '"name" is required',
  }),
});

const blogPostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().items(Joi.number().integer().positive()).required(),
}).messages({ 'string.empty': 'Some required fields are missing' });

module.exports = {
  schema,
  categoryNameSchema,
  blogPostSchema,
};