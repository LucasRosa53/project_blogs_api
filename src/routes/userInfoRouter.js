const express = require('express');
const userController = require('../controllers/userInfoController');
const allUsersController = require('../controllers/allUsersController');
const { validateToken } = require('../middlewares/validateToken');

const userInfo = express.Router();

userInfo.get('/:id', validateToken, userController.getUserById);
userInfo.get('/', validateToken, allUsersController.getAllUsers);
userInfo.post('/', userController.userInfo);

module.exports = userInfo;