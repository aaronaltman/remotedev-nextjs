import React from "react";
import JobList from "./JobList";

export default function Sidebar() {
  return (
    <div>
      <div>
        <p>ResultCount</p>
        <p>SortingControls</p>
      </div>
      <JobList />
      <p>Pagination Controls</p>
    </div>
  );
}
