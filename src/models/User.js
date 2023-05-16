/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
 */

const UserSchema = (sequelize, DataTypes) => {
    const UserTable = sequelize.define("User", {
      id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
      {
        timestamps: false,
        underscored: true,
      },
    );
    UserTable.associate = (models) => {
      UserTable.hasMany(models.BlogPost, {
          foreignKey: 'user_id', as: 'BlogPost'
      });
  }
    return UserTable;
}
// .associate e .hasMany ou BelongsTo, devem fazer associação com a Table e não o Schema
module.exports = UserSchema;