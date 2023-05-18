/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
 */

const CategorySchema = (sequelize, DataTypes) => {
    const CategoryTable = sequelize.define ("Category", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
        type: DataTypes.STRING,
        },
    },
    {
        timestamps: false,
        underscored: true,
      }
    );
    return CategoryTable;
};

module.exports = CategorySchema;