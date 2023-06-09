const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = process.env.JWT_SECRET || 'yoursecrettoken';

const validateToken = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
    return res.status(401).json({ message: 'Token not found' });
    }
    try {
    const decoded = jwt.verify(token, secret);
    // console.log(decoded);
    const user = await User.findOne({ where: { email: decoded.email } });
    // console.log(user);
    req.user = user;
    next();
    } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = {
    validateToken,
};