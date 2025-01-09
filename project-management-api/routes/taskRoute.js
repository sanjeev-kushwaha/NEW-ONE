// routes/task.routes.js
const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/", authMiddleware.verifyToken, taskController.createTask);
router.get("/:projectId", authMiddleware.verifyToken, taskController.getTasksByProject);

module.exports = router;
