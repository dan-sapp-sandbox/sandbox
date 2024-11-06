"use client";
import Prompt from "./prompt";
import { useState } from "react";
import { iTrivia } from "../api/types";
import { Button } from "@/components/ui/button";

interface iLandingPageProps {
  triviaList: iTrivia[];
}
const LandingPage = ({ triviaList }: iLandingPageProps): JSX.Element => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  return loggedIn
    ? <Prompt triviaList={triviaList} />
    : (
      <div className="justify-center items-center grid grid-flow-row grid-cols-12">
        <div className="text-xl md:text-4xl my-8 font-bold col-span-12 justify-center text-center">
          Horseshoes and Hand Grenades
        </div>
        <div className="col-span-12 justify-center">
          <Button
            className="text-2xl md:text-4xl p-3 md:p-8 flex mx-auto"
            onClick={() => setLoggedIn(true)}
          >
            Start
          </Button>
        </div>
      </div>
    );
};

export default LandingPage;
