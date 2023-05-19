const userInfoService = require('../services/userService');

const userInfo = async (req, res) => {
    const { body } = req;
    const result = await userInfoService.userInfo(body);
    if (result.status) {
        return res.status(result.status).json({ message: result.message });
    }
    return res.status(201).json(result);
};

module.exports = {
    userInfo,
};