"use client";

import React, { useState } from "react";

export default function SearchComponent() {
  const [search, setSearch] = useState("");
  return (
    <>
      <section>
        <form className="flex justify-center items-center text-white py-3">
          <input
            className="rounded-lg p-2 text-slate-900"
            type="search"
            placeholder="Search for a job!"
            size={30}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </form>
      </section>
    </>
  );
}
