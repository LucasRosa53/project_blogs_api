const express = require('express');
const categoriesController = require('../controllers/categoriesController');
const { validateToken } = require('../middlewares/validateToken');

const categoriesRouter = express.Router();

categoriesRouter.post('/', validateToken, categoriesController.validateCategory);

module.exports = categoriesRouter;