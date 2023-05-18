const userService = require('../services/userService');

const userInfo = async (req, res) => {
    const newUser = await userService.userInfo(req.body);
    if (newUser.status) {
        return res.status(newUser.status).json({ message: newUser.status });
    }
    return res.status(201).json(newUser);
};

module.exports = userInfo;