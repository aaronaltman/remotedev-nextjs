import React from "react";

export default function BackgroundTop({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-slate-900 min-h-[25dvh]">{children}</div>;
}
