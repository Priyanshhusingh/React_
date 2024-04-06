import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JobListings from "./JobListings";
import Spinner from "./Spinner";

function JobListing({ isHome = false }) {
  const [Jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const JobList = isHome ? Jobs.slice(0, 3) : Jobs;
  useEffect(() => {
    try {
      fetch("http://localhost:8080/api/jobs")
        .then((res) => res.json())
        .then((data) => setJobs(data.data));
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-enter">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <>
            {JobList.map((job) => {
              return <JobListings job={job} key={job._id} />;
            })}
          </>
        )}
      </div>
    </section>
  );
}

export default JobListing;
