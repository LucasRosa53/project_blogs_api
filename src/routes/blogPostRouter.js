const express = require('express');
const blogPostController = require('../controllers/blogPostController');
const { validateToken } = require('../middlewares/validateToken');

const blogPostRouter = express.Router();

blogPostRouter.post('/', validateToken, blogPostController.blogPostInfo);

module.exports = blogPostRouter;