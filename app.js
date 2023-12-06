require("dotenv").config();

require("./db");

const express = require("express");

const app = express();
const { isAuthenticated } = require("./middleware/jwt.middleware");
require("./config")(app);

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const projectRouter = require("./routes/project.routes");     
app.use("/api", isAuthenticated, projectRouter);

const taskRouter = require("./routes/task.routes");  
app.use("/api", isAuthenticated, taskRouter);

const authRouter = require("./routes/auth.routes");
app.use("/auth", authRouter);

require("./error-handling")(app);

module.exports = app;
