import React from "react";
import BackgroundTop from "./BackgroundTop";
import Background from "./Background";
import Container from "./Container";
import SearchComponent from "./SearchComponent";
import BookMarkBar from "./BookMarkBar";

export default function Header() {
  return (
    <>
      <BackgroundTop>
        <header>
          <div className="flex justify-center gap-5">
            <h1 className="text-center text-slate-50 text-xl py-3">
              Remote Dev Job Search
            </h1>
            <div className="flex justify-center items-center">
              <BookMarkBar />
            </div>
          </div>
          <div>
            <SearchComponent />
            <p className="text-white text-center">Profile icon goes here</p>
          </div>
        </header>
      </BackgroundTop>
      <Background>
        <Container />
      </Background>
    </>
  );
}
