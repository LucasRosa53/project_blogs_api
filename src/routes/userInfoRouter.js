const express = require('express');
const userController = require('../controllers/userInfoController');

const userInfo = express.Router();

userInfo.post('/', userController.userInfo);

module.exports = userInfo;