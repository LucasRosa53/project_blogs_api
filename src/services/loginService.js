const { createToken } = require('../helpers/createToken');
const { validateLogin } = require('../middlewares/validateLogin');
const { User } = require('../models');

const loginUser = async ({
    email,
    password,
}) => {
  console.log(email, password);
  const result = await validateLogin(email, password);
  if (result === 'ok') {
  const user = await User.findOne({ where: { email } });
  // console.log('testando userService', user);
  const newToken = await createToken(user.id, email);
  return newToken;
  }
  return result;
};

module.exports = {
    loginUser,
};
