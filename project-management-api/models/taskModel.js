// models/task.model.js
module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define("Task", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "To Do", // Default status
      },
    });
  
    Task.associate = (models) => {
      Task.belongsTo(models.Project, {
        foreignKey: "projectId",
      });
    };
  
    return Task;
  };
  