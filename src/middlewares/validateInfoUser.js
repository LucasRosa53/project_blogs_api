const { User } = require('../models');
const { schema } = require('../services/validations/schemas');

const validateInfoUser = async (displayName, email, password) => {
        const { error: displayNameError } = schema.displayName.validate(displayName);
        if (displayNameError) {
        return { status: 400, message: '"displayName" length must be at least 8 characters long' };
        }
        const { error: emailError } = schema.email.validate(email);
        if (emailError) {
            return { status: 400, message: '"email" must be a valid email' };
          }
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
          return { status: 409, message: 'User already registered' };
        }
        const { error: passwordError } = schema.password.validate(password);
        if (passwordError) {
          return { status: 400, message: 'password" length must be at least 6 characters long' };
        }
        return 'ok';
};

module.exports = {
  validateInfoUser,
};