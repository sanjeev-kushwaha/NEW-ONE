// routes/project.routes.js
const express = require("express");
const router = express.Router();
const projectController = require("../controllers/project.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/", authMiddleware.verifyToken, projectController.createProject);
router.get("/", authMiddleware.verifyToken, projectController.getAllProjects);
router.get("/:id", authMiddleware.verifyToken, projectController.getProjectById);
router.put("/:id", authMiddleware.verifyToken, projectController.updateProject);
router.delete("/:id", authMiddleware.verifyToken, projectController.deleteProject);

module.exports = router;
