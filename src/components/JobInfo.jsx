import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function JobInfo() {
  const [jobInfo, setJobInfo] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();
  let company = [];
  const { id } = useParams();
  useEffect(() => {
    try {
      fetch(`http://localhost:8080/api/jobs/${id}`)
        .then((res) => res.json())
        .then((data) => setJobInfo(data.data[0]));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleDelte = async () => {
    try {
      const confirm = window.confirm("Are you sure you want to delete");
      if (!confirm) return;
      const res = await fetch(`http://localhost:8080/api/delete-job/${id}`, {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        toast.success("Job Deleted Succussfully");
        setRedirect(true);
      }
    } catch (error) {
      toast.error(error)
    }
  };
  if (redirect) {
    return navigate("/jobs");
  }
  company = jobInfo?.company?.map((company) => company);
  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <i className="mr-2"></i> Back to Job Listings
          </Link>
        </div>
      </section>
      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{jobInfo.type}</div>
                <h1 className="text-3xl font-bold mb-4">{jobInfo.title}</h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <i className="text-orange-700 mr-1" />
                  <p className="text-orange-700">{jobInfo.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                  Job Description
                </h3>

                <p className="mb-4">{jobInfo.description}</p>

                <h3 className="text-indigo-800 text-lg font-bold mb-2">
                  Salary
                </h3>

                <p className="mb-4">6000 / Year</p>
              </div>
            </main>
            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>

                <h2 className="text-2xl">{}</h2>

                <p className="my-2">dinnfdndfnnnfdujdfn</p>

                <hr className="my-4" />

                <h3 className="text-xl">Contact Email:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  tuky,poj,o,@kmgkomh
                </p>

                <h3 className="text-xl">Contact Phone:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold"> 76766467</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <Link
                  to={`/job-update/${id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Job
                </Link>
                <button
                  onClick={handleDelte}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

export default JobInfo;
