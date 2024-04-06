import React, { useState } from "react";
import { Link } from "react-router-dom";

function JobListings({ job }) {
  const [showFullDes, setShowfullDes] = useState(false);
  let description = job.description;
  if (!showFullDes) {
    description = description.substring(0, 90) + "...";
  }
  return (
    <div className="bg-white rounded-xl shadow-md relative" key={job.id}>
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>
        <div className="mb-5">{description}</div>
        <button
          onClick={() => setShowfullDes(!showFullDes)}
          className="text-indigo-500 mb-5 hover:text-indigo-600"
        >
          {showFullDes ? "less" : "more"}
        </button>
        <h3 className="text-indigo-500 mb-2">{job.salary}</h3>
        <div className="border border-gray-100 mb-5"></div>
        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <i className="fa-solid fa-location-dot text-lg mr-1">📌</i>
            {job.location}
          </div>
          <Link to={`/jobInfo/${job._id}/${job.title}`}>
            <h3 className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm">
              Read More
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JobListings;
