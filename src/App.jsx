import React from "react";
import Layout from "./layouts.jsx/Layout";
import Index from "./pages/Index";
import { Route, Routes } from "react-router-dom";
import JobInfo from "./components/JobInfo";
import JobsPage from "./pages/Jobs.Page";
import NotFound from "./pages/NotFound";
import AddJob from "./pages/AddJob";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/add-job" element={<AddJob />} />
          <Route path="/jobInfo/:id/:title" element={<JobInfo />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/job-update/:id" element={<AddJob />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
