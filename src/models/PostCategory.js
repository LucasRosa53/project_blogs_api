/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
 */

const PostCategorySchema = (sequelize, DataTypes) => {
    const PostCategoryTable = sequelize.define("PostCategory", {
        postId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'posts_categories'
    });

    PostCategoryTable.associate = (models) => {
        PostCategoryTable.belongsToMany(models.BlogPost, {
            through: PostCategoryTable,
            foreignKey: 'postId',
            otherKey: 'categoryId',
            as: 'blog_posts',
        });

        PostCategoryTable.belongsToMany(models.Category, {
            through: PostCategoryTable,
            foreignKey: 'categoryId',
            otherKey: 'postId',
            as: 'categories',
        });
    };

    return PostCategoryTable;
};

module.exports = PostCategorySchema;
