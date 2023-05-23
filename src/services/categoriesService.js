const { Category } = require('../models');
const { categoryNameSchema } = require('./validations/schemas');
// const { validadeCategory } = require('./validations/validateCategoires');

const newCategory = async (body) => {
    // console.log('service', body);
    const { error } = categoryNameSchema.validate(body);
    if (error) {
        return { status: 400, message: error.message };
    }
    const result = await Category.create(body);
    // console.log(result);
    return result;
};

const allCategories = async () => {
    const category = await Category.findAll();
    return category;
};

module.exports = {
    newCategory,
    allCategories,
};