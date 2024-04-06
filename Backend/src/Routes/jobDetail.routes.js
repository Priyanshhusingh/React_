const express = require("express");
const {
  jobDetail,
  singleJobDetail,
  createJob,
  deleteJob,
  jobUpdate,
} = require("../Controller/Job.controller");

const JobRouter = express.Router();

JobRouter.route("/jobs").get(jobDetail);
JobRouter.route("/Jobs/:id").get(singleJobDetail);
JobRouter.route("/create-job").post(createJob);
JobRouter.route("/delete-job/:id").delete(deleteJob);
JobRouter.route("/job-update/:id").patch(jobUpdate);
module.exports = JobRouter;
