const { User } = require('../models');

const getAllUsers = async () => {
    const users = await User.findAll({
        attributes: { exclude: 'password' },
    });
    console.log(users);
    return users;
};

module.exports = {
    getAllUsers,
};
