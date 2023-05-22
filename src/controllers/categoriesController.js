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

module.exports = {
    validateCategory,
};