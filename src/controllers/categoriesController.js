const categoriesService = require('../services/categoriesService');

const validateCategory = async (req, res) => {
    const { body } = req;
    // console.log('test', body);
    const result = await categoriesService.newCategory(body);
    if (result.status) {
        return res.status(result.status).json({ message: result.message });
    }
    return res.status(201).json(result);
};

const allCategories = async (_req, res) => {
    const categories = await categoriesService.allCategories();
    return res.status(200).json(categories);
};

module.exports = {
    validateCategory,
    allCategories,
};