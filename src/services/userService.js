const { createToken } = require('../helpers/createToken');
const { User } = require('../models');
const { validateInfoUser } = require('../middlewares/validateInfoUser');

const userInfo = async ({
    displayName,
    email,
    password,
}) => {
    const error = await validateInfoUser(displayName, email, password);
    if (error) {
       return { status: 400, message: error };
    }
    // chamando a função findOne retorna na variável test
    const user = await User.findOne({ where: { email } });
    if (user) {
    return { status: 409, message: 'User already registered' };
    }
    const token = createToken(email);
    return token;
};

module.exports = {
    userInfo,
};