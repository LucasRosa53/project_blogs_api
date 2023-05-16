const { User } = require('../models');

const validateLogin = async (email, password) => {  
const loginEmail = await User.findOne({ where: { email } });
console.log('validate', loginEmail);
console.log('email', email);
console.log('password', password);
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