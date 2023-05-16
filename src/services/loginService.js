const { createToken } = require('../helpers/createToken');
const { validateLogin } = require('../middlewares/validateLogin');

const loginUser = async ({
    email,
    password,
}) => {
  const result = await validateLogin(email, password);
  console.log('result', result);
  if (result === 'ok') {
  const newToken = await createToken(email);
  return newToken;
  }
  return result;
};

module.exports = {
    loginUser,
};
