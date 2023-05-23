const blogPostService = require('../services/blogPostService');

const blogPostInfo = async (req, res) => {
    const { body } = req;
    const { id } = req.user;
    console.log('body do postcontro', body);
    const newPost = await blogPostService.blogPostInfo({ ...body, userId: id });
    if (newPost.status) {
        return res.status(newPost.status).json({ message: newPost.message });
    }
    return res.status(201).json(newPost);
};

module.exports = {
    blogPostInfo,
};