import React from "react";

export default function Container({ jobItems }) {
  return (
    <div className="bg-slate-100 max-w-[80dvw] min-h-[65dvh] mx-auto rounded-lg">
      <div>{jobItems}</div>
      <div>JobItemContent</div>
    </div>
  );
}
