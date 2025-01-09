// models/project.model.js
module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define("Project", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
    });
  
    Project.associate = (models) => {
      Project.belongsToMany(models.User, {
        through: "UserProjects",
        foreignKey: "projectId",
      });
      Project.hasMany(models.Task, {
        foreignKey: "projectId",
      });
    };
  
    return Project;
  };
  