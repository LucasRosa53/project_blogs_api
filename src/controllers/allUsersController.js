const allUsersService = require('../services/allUsersService');

const getAllUsers = async (_req, res) => {
    const allUsers = await allUsersService.getAllUsers();
    return res.status(200).json(allUsers);
};
module.exports = {
    getAllUsers,
};