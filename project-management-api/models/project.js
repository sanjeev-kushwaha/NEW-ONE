'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate(models) {
      // Define associations here, if any
    }
  }
  Project.init(
    {
      projectName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      projectOwner: {
        type: DataTypes.STRING,
      },
      projectMembers: {
        type: DataTypes.JSON,
      },
      descriptions: {
        type: DataTypes.TEXT,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: "active",
      },
    },
    {
      sequelize,
      modelName: 'Project',
    }
  );
  return Project;
};
