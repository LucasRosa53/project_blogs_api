const loginService = require('../services/loginService');

const loginUser = async (req, res) => {
  const newUser = await loginService.loginUser(req.body);
  if (newUser.status) {
  return res.status(newUser.status).json({ message: newUser.message });
  }  
  return res.status(200).json(newUser);
};

module.exports = {
    loginUser,
};