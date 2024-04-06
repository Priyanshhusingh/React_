const express = require("express");
const cors = require("cors");
const JobRouter = require("./Routes/jobDetail.routes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use("/api", JobRouter);

module.exports = app;
