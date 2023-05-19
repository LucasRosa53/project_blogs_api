const Joi = require('joi');

const schema = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }).messages({ 'string.empty': 'Some required fields are missing' });

module.exports = {
  schema,
};