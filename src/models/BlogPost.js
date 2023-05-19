/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
 */

const BlogPostSchema = (sequelize, DataTypes) => {
    const BlogPostTable = sequelize.define("BlogPost", {
        id: { 
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
        title: {
            type: DataTypes.STRING
        },
        content: {
            type: DataTypes.STRING
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
              model: 'users',
              key: 'id',
            },
          },
        published: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updated: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
    },
    {
        timestamps: false,
        underscored: true,
        tableName: 'blog_posts'
      }
    );
    BlogPostTable.associate = (models) => {
        BlogPostTable.belongsTo(models.User, {
            foreignKey: 'user_id', as: 'users'
        });
    }
    return BlogPostTable;
}
// .associate e .hasMany ou BelongsTo, devem fazer associação com a Table e não o Schema
module.exports = BlogPostSchema;