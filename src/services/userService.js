const { createToken } = require('../helpers/createToken');
const { User } = require('../models');
const { validateInfoUser } = require('../middlewares/validateInfoUser');

const getUserById = async (id) => {
    const userId = await User.findByPk(id, {
        attributes: { exclude: 'password' },
    });
    return userId;
};

const userInfo = async (
    body,
) => {
    const error = await validateInfoUser(body);
    if (error) {
       return { status: 400, message: error };
    }
    // chamando a função findOne retorna na variável test
    const user = await User.findOne({ where: { email: body.email } });
    if (user) {
    return { status: 409, message: 'User already registered' };
    }
    const result = await User.create(body);
    const token = await createToken(result);
    return token;
};

module.exports = {
    userInfo,
    getUserById,
};