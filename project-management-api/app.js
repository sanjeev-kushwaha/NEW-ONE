// server.js
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const db = require("./models");
const userRoutes = require("./routes/user.routes");
const projectRoutes = require("./routes/project.routes");
const taskRoutes = require("./routes/task.routes");

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);

db.sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log("Server is running on port 5000");
  });
});
