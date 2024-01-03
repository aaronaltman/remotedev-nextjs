import React from "react";

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-slate-200 min-h-[75dvh]">{children}</div>;
}
