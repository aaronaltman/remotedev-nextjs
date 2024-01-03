"use client";

import { ReactHTMLElement } from "react";

type SearchComponentProps = {
  search: string;
  setSearch: any;
};
export default function SearchComponent({
  search,
  setSearch,
}: SearchComponentProps) {
  return (
    <>
      <section>
        <form
          action="#"
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex justify-center items-center text-white py-3"
        >
          <input
            className="rounded-lg p-2 text-slate-900"
            type="text"
            required
            placeholder="Find Remote Developer Jobs!"
            size={30}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </form>
      </section>
    </>
  );
}
