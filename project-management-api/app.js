const express = require("express");
const DB = require("./config/db");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
const userRoutes = require("./routes/userRoute");
const projectRoutes = require("./routes/projectRoute");
// const taskRoutes = require("./routes/taskRoutes");

// Mount routes
app.use("/api/users", userRoutes);
app.use("/api/user", projectRoutes);
// app.use("/api/tasks", taskRoutes);

// Start the server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
