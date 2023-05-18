const { User } = require('../models');

const validateLogin = async (email, password) => {  
const loginEmail = await User.findOne({ where: { email } });
if (email === '' || password === '') {
    return { status: 400, message: 'Some required fields are missing' };
}

if (!loginEmail || loginEmail.password !== password) {
    return { status: 400, message: 'Invalid fields' };
}
    return 'ok';
};

module.exports = {
    validateLogin,
};