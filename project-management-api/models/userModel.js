// models/user.model.js
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    User.associate = (models) => {
      User.belongsToMany(models.Project, {
        through: "UserProjects",
        foreignKey: "userId",
      });
    };
  
    return User;
  };
  