import React from "react";

export default function JobList({ jobItems }: any) {
  return (
    <div>
      {jobItems.map((jobItem: any) => {
        <li>{jobItem.title}</li>;
      })}
    </div>
  );
}
