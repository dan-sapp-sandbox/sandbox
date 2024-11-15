"use client";
import Prompt from "./prompt";
import { useState } from "react";
import { iTrivia } from "../api/types";
import { Button } from "@mui/material";

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
        <div className="font-sans text-xl md:text-4xl my-8 font-bold col-span-12 justify-center text-center">
          Horseshoes and Hand Grenades
        </div>
        <div className="font-sans text-xl md:text-4xl my-8 font-bold col-span-12 justify-center text-center">
          Choose a category
        </div>
        <div className="col-span-12 justify-center">
          <Button
            className="text-2xl md:text-4xl p-3 md:p-8 flex mx-auto"
            onClick={async () => {
              setFilteredList(triviaList);
              setLoggedIn(true);
            }}
          >
            Potpourri
          </Button>
        </div>
        <div className="col-span-12 justify-center">
          {tags.map((tag) => (
            <Button
              key={tag}
              className="text-2xl md:text-4xl my-2 p-3 md:p-8 flex mx-auto"
              onClick={async () => {
                setFilteredList(triviaList.filter((x) => x.tag === tag));
                setLoggedIn(true);
              }}
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>
    );
};

export default LandingPage;
