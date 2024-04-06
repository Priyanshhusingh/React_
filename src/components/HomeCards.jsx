import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

function HomeCards() {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card background="bg-gray-100">
            <h2 className="text-2xl font-bold">For Developer</h2>
            <p className="mt-2 mb-4">
              Browse our React jobs and start your career today
            </p>
            <Link to={"/jobs"}>
              <h6 className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
                Browse Job
              </h6>
            </Link>
          </Card>
          <Card background="bg-blue-100">
            <h2 className="text-2xl font-bold">For Employers</h2>
            <p className="mt-2 mb-4">
              List your job to find the perfect developer for the role
            </p>
            <Link to={"/add-job"}>
              <h6 className="inline-block bg-blue-700 text-white rounded-lg px-4 py-2 hover:bg-blue-500">
                Add Job
              </h6>
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default HomeCards;
