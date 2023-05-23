// const { Op } = require('sequelize');
const { BlogPost } = require('../models');
const { validateBlogPostSchema } = require('./validations/validateBlogPostSchema');
const { Category, PostCategory } = require('../models');

const categoriesById = async () => {
    const findCategoryIds = await Category.findAll();
    console.log(findCategoryIds);
    const result = findCategoryIds.map((categoryId) => categoryId.dataValues.id);
    return result.toString();
};

const blogPostInfo = async (body) => {
    console.log('body', body);
    const error = await validateBlogPostSchema(body);
    if (error) {
        return { status: 400, message: error };
    }
    const infos = await BlogPost.create(body);
    // const category = body.categoryIds.toString();
    const categoryDB = await categoriesById();
    const results = body.categoryIds.every((element) => categoryDB.includes(element));
    if (!results) {
        return { status: 400, message: 'one or more "categoryIds" not found' };
    }
    await body.categoryIds.map(async (elemento) => {
        await PostCategory.create({ postId: infos.id, categoryId: elemento });
    });    
    return infos;
};

module.exports = {
    blogPostInfo,
    categoriesById,
};
