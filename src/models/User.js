/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
 */

const UserSchema = (sequelize, DataTypes) => {
    const UserTable = sequelize.define("User", {
      id: DataTypes.INTEGER,  
      display_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    });
    return UserTable;
}

module.exports = UserSchema;