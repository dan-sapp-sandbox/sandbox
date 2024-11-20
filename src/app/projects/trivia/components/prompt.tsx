"use client";
import { iTrivia } from "../api/types";
import { useState } from "react";
import { useController, useForm } from "react-hook-form";
import { Slider } from "@mui/material";
import useLocalStorage from "use-local-storage";

interface iPromptProps {
  triviaList: iTrivia[];
}
export default function Prompt({ triviaList }: iPromptProps): JSX.Element {
  const [index, setIndex] = useState<number>(0);
  const [totalScore, setTotalScore] = useLocalStorage<number>('score', 0);
  const [score, setScore] = useState<number | undefined>(undefined);
  const [percentage, setPercentage] = useState<number | undefined>(undefined);
  const trivia = triviaList?.[index];
  const { handleSubmit, control, watch, reset } = useForm({
    defaultValues: {
      guess: 0,
    },
  });
  const disableNextBtn = index + 1 === triviaList.length;
  function next() {
    setIndex(index + 1);
    setScore(undefined);
    reset({ guess: 0 });
  }
  function goBack() {
    location.reload();
  }
  const onSubmit = (data: { guess: number }) => {
    const rawPercentage = Math.abs(data.guess - trivia.answer) /
      trivia.answer;
    const percentage = Number((100 * rawPercentage).toFixed(2));
    setPercentage(percentage);
    let promptScore = 0;
    if (percentage < 1) promptScore = 200;
    if (percentage < 100) {
      promptScore = Math.floor(100 * (1 - (Math.sqrt(rawPercentage))));
    }
    setScore(promptScore);
    setTotalScore(totalScore + promptScore);
  };
  function numberWithCommas(x: number): string {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const {
    field: { onChange, value },
  } = useController({
    name: "guess",
    control,
  });
  const sliderValue = watch("guess");
  return (
    <div>
      <div className="bg-slate-300 py-1 grid grid-flow-row grid-cols-12">
        <div className="col-span-2">
          {/* eslint-disable-next-line */}
          <img
            onClick={goBack}
            className="ml-4 rounded-full w-8 md:w-12 hover:cursor-pointer"
            alt="me"
            src={"/static/images/back.png"}
          />
        </div>
        <div className="col-span-8 font-bold text-2xl md:text-4xl text-center">
          Score: {numberWithCommas(totalScore)}
        </div>
      </div>
      <div className="container max-w-5xl mx-auto px-3">
        <div className="bg-slate-200 rounded-lg items-center align-center justify-center my-4 mx-1">
          <div>
            <div className="font-bold text-lg md:text-4xl my-1 md:my-6 text-center">
              {trivia.prompt}
            </div>
          </div>
          <div className="flex justify-center items-center m-2 md:m-8">
            {/* eslint-disable-next-line */}
            <img
              alt="pic"
              className="rounded-xl m-2 md:m-8"
              src={trivia.image}
            />
          </div>
        </div>
        <div className="font-bold text-2xl md:text-4xl text-center text-zinc-300">
          {numberWithCommas(sliderValue)} {trivia.units}
        </div>
        {score
          ? (
            <div className="px-1">
              {percentage !== 0 &&
                (
                  <div className="font-bold mx-auto text-2xl md:text-4xl py-1 text-center text-red-700">
                    {numberWithCommas(trivia.answer)} {trivia.units}
                  </div>
                )}
              {percentage === 0 &&
                (
                  <div className="font-bold text-xl md:text-3xl py-1 text-center text-green-400">
                    Bingo!
                  </div>
                )}
              <div className="text-lg font-bold md:text-3xl text-center text-zinc-300">
                Earned {score}pts!
              </div>
              <div className="mx-auto text-md md:text-2xl py-1 text-center text-zinc-300">
                {trivia.source}
              </div>
              <div className="flex justify-center mt-4">
                <button
                  disabled={disableNextBtn}
                  className="text-black mx-auto text-lg w-full md:w-auto md:text-3xl p-4 rounded-xl bg-purple-600 hover:bg-purple-500 hover:text-black"
                  onClick={() => next()}
                >
                  {disableNextBtn ? "Out of Questions" : "Next"}
                </button>
              </div>
            </div>
          )
          : (
            <div className="px-1">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <Slider
                    step={1}
                    value={[value]}
                    valueLabelDisplay="auto"
                    min={0}
                    max={trivia.high}
                    onChange={onChange}
                    className="my-12 hover:cursor-pointer"
                  />
                </div>
                <div className="flex justify-center m-3">
                  <button
                    disabled={!value}
                    className="text-black mx-auto w-full md:w-auto text-2xl md:text-4xl p-4 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:bg-purple-900"
                    type="submit"
                  >
                    Guess
                  </button>
                </div>
              </form>
            </div>
          )}
      </div>
    </div>
  );
}
