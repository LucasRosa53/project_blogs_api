const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'yoursecrettoken';

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

const createToken = async (id, email) => {
    const payload = {
        id,
        email,
        admin: false,
      };
      const token = jwt.sign(payload, secret, jwtConfig);
      return { token };
};

module.exports = {
    createToken,
};
