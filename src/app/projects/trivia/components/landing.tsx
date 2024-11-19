"use client";
import Prompt from "./prompt";
import { useState } from "react";
import { iTrivia } from "../api/types";

interface iLandingPageProps {
  triviaList: iTrivia[];
  tags: string[];
}
const LandingPage = (
  { triviaList, tags }: iLandingPageProps,
): JSX.Element => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [filteredList, setFilteredList] = useState<iTrivia[]>([]);
  return loggedIn
    ? <Prompt triviaList={filteredList} />
    : (
      <div className="justify-center items-center grid grid-flow-row grid-cols-12">
        <div className="font-sans text-2xl md:text-5xl my-8 font-bold col-span-12 justify-center text-center text-zinc-300">
          Horseshoes and Hand Grenades
        </div>
        <div className="font-sans text-xl md:text-4xl my-8 font-bold col-span-12 justify-center text-center text-zinc-300">
          Choose a category
        </div>
        <div className="col-span-12 justify-center">
          <button
            className="rounded-lg flex mx-auto bg-blue-300 hover:bg-blue-200"
            onClick={async () => {
              setFilteredList(triviaList);
              setLoggedIn(true);
            }}
          >
            <span className="text-3xl md:text-5xl p-2 md:p-4">
              Potpourri
            </span>
          </button>
        </div>
        {tags.map((tag) => (
          <div key={tag} className="col-span-12 justify-center">
            <button
              className="my-5 rounded-lg flex mx-auto bg-blue-300 hover:bg-blue-200"
              onClick={async () => {
                setFilteredList(triviaList.filter((x) => x.tag === tag));
                setLoggedIn(true);
              }}
            >
              <span className="text-3xl md:text-5xl p-2 md:p-4">
                {tag}
              </span>
            </button>
          </div>
        ))}
      </div>
    );
};

export default LandingPage;
