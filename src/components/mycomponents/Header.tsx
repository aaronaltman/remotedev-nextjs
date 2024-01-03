"use client";

import React, { useEffect, useState } from "react";
import BackgroundTop from "./BackgroundTop";
import Background from "./Background";
import Container from "./Container";
import SearchComponent from "./SearchComponent";
import BookMarkBar from "./BookMarkBar";

export default function Header() {
  const [jobItems, setJobItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!search) return;
    async function fetchData() {
      const response = await fetch(
        `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${search}`
      );
      const data = await response.json();
      setJobItems(data.jobItems);
    }
    fetchData();
  }, [setSearch]);

  return (
    <>
      <BackgroundTop>
        <header className="flex flex-col items-center">
          <div className="flex justify-center items-center gap-5">
            <h1 className="text-center text-slate-50 text-xl py-3">
              Remote Dev Job Search
            </h1>
            <div className="flex justify-center items-center">
              <BookMarkBar />
            </div>
          </div>
          <div>
            <SearchComponent search={search} setSearch={setSearch} />
            <p className="text-white text-center">Profile icon goes here</p>
          </div>
        </header>
      </BackgroundTop>
      <Background>
        <Container jobItems={jobItems} />
      </Background>
    </>
  );
}
