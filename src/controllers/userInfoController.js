const userInfoService = require('../services/userService');

const getUserById = async (req, res) => {
    const { id } = req.params;
    const result = await userInfoService.getUserById(id);
    if (!result) {
        return res.status(404).json({ message: 'User does not exist' });
    }
    return res.status(200).json(result);
};

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
    getUserById,
};