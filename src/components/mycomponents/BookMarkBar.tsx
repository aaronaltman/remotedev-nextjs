"use client";

import { ArrowDownNarrowWide } from "lucide-react";
import React, { useState } from "react";

const bookmarks = [
  { name: "Bookmark 1", link: "#" },
  { name: "Bookmark 2", link: "#" },
  { name: "Bookmark 3", link: "#" },
  // Add more bookmarks here
];

export default function BookMarkBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Dropdown button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex text-sm justify-center items-center gap-2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
      >
        Bookmarks
        <ArrowDownNarrowWide size={20} />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 w-48 py-2 mt-2 bg-white rounded shadow-xl">
          {bookmarks.map((bookmark, index) => (
            <a
              key={index}
              href={bookmark.link}
              className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
            >
              {bookmark.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
