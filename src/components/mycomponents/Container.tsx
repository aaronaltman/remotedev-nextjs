import React from "react";
import JobList from "./JobList";

export default function Container({ jobItems }: any) {
  return (
    <div className="bg-slate-100 max-w-[80dvw] min-h-[65dvh] mx-auto rounded-lg">
      <JobList jobItems={jobItems} />
      <div>JobItemContent</div>
    </div>
  );
}
