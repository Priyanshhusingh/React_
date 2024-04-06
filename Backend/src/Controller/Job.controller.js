const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const Job = require("../Models/Jobs.model");
const mongoose = require("mongoose");

exports.createJob = asyncHandler(async (req, res) => {
  try {
    const { title, type, description, location, salary, company } = req.body;
    console.log(company);
    const job = await Job.create({
      title,
      type,
      description,
      location,
      salary,
      company,
    });
    const createsjob = await job.findById(job._id);
    return res
      .status(200)
      .json(new ApiResponse(200, "Job created successfully", createsjob));
  } catch (error) {
    throw new ApiError(500, "could not create job", error);
  }
});

exports.jobDetail = asyncHandler(async (req, res) => {
  try {
    const jobdoc = await Job.find();
    return res
      .status(200)
      .json(
        new ApiResponse(200, "jobDetail data fetched successfully", jobdoc)
      );
  } catch (err) {
    throw new ApiError(401, "could not find job", err);
  }
});

exports.singleJobDetail = asyncHandler(async (req, res) => {
  try {
    const { id } = await req.params;
    let query = { _id: id };
    const jobdoc = await Job.find(query);
    return res
      .status(200)
      .json(
        new ApiResponse(200, "jobDetail data fetched successfully", jobdoc)
      );
  } catch (err) {
    throw new ApiError(401, "could not find job", err);
  }
});

exports.deleteJob = asyncHandler(async (req, res) => {
  try {
    const { id } = await req.params;
    let query = { _id: id };
    const jobdoc = await Job.deleteOne(query);
    return res
      .status(200)
      .json(new ApiResponse(200, "job deleted successfully", jobdoc));
  } catch (err) {
    throw new ApiError(401, "could not delete job", err);
  }
});

exports.jobUpdate = asyncHandler(async (req, res) => {
  try {
    const { id } = await req.params;
    const { title, type, description, location, salary, company } = req.body;
    let query = { _id: id };
    console.log(query)
    const jobdoc = await Job.findOneAndUpdate(query, {
      title,
      type,
      description,
      location,
      salary,
      company,
    });
    return res
      .status(200)
      .json(new ApiResponse(200, "job updated successfully", jobdoc));
  } catch (err) {
    throw new ApiError(401, "could not update job", err);
  }
});
