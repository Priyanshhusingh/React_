import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListing from "../components/JobListing";
import ViewAlljobs from "../components/ViewAlljobs";

function Index() {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListing isHome="true" />
      <ViewAlljobs />
    </>
  );
}

export default Index;
