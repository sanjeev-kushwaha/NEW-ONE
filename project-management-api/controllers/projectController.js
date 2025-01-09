// controllers/project.controller.js
const db = require("../models");
const Project = db.Project;
const User = db.User;

exports.createProject = async (req, res) => {
  try {
    const { name, description } = req.body;
    const project = await Project.create({ name, description });
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: "Error creating project", error });
  }
};

// Other project methods...
