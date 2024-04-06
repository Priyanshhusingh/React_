const mongoose = require("mongoose");

const { Schema } = mongoose;

const JobSchema = new Schema(
  {
    title: {
      type: String,
      requied: true,
    },
    type: {
      type: String,
      requied: true,
    },
    description: {
      type: String,
      requied: true,
    },
    location: {
      type: String,
      requied: true,
    },
    salary: {
      type: String,
      requied: true,
    },
    company: [
      {
        name: {
          type: String,
        },
        description: {
          type: String,
        },
        contactEmail: {
          type: String,
        },
        contactPhone: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", JobSchema);
module.exports = Job;
