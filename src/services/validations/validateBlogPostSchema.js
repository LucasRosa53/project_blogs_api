const { blogPostSchema } = require('./schemas');

const validateBlogPostSchema = async ({ title, content, categoryIds }) => {
    const { error } = blogPostSchema.validate({ title, content, categoryIds });
    if (error) return error.message;
};

module.exports = {
    validateBlogPostSchema,
};