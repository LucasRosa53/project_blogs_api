const { schema } = require('../services/validations/schemas');

const validateInfoUser = async ({ displayName, email, password }) => {
        const { error } = schema.validate({ displayName, email, password });
        if (error) return error.message;
};

module.exports = {
  validateInfoUser,
};