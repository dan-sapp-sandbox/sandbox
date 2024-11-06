"use client";
import { iTrivia } from "../api/types";
import { useState } from "react";
import { useController, useForm } from "react-hook-form";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

interface iPromptProps {
  triviaList: iTrivia[];
}
export default function Prompt({ triviaList }: iPromptProps): JSX.Element {
  const [index, setIndex] = useState<number>(0);
  const [totalScore, setTotalScore] = useState<number>(0);
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
  const onSubmit = (data: { guess: number }) => {
    const percentage = Number((100 * Math.abs(data.guess - trivia.answer) /
      trivia.answer).toFixed(2));
    setPercentage(percentage);
    let promptScore = 0;
    if (percentage < 1) promptScore = 200;
    if (percentage < 100) {
      promptScore = Math.floor(100 * (1 - (Math.sqrt(percentage / 100))));
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
      <div className="bg-slate-300 py-1 font-bold text-2xl md:text-4xl text-center">
        Score: {numberWithCommas(totalScore)}
      </div>
      <div className="container max-w-5xl mx-auto">
        <div className="font-bold text-2xl md:text-4xl my-1 md:my-6 text-center">
          {trivia.prompt}
        </div>
        <div className="mx-1 my-1 md:my-6 flex justify-center items-center md:max-h-96">
          <img
            alt="pic"
            className="rounded-xl h-1/2 md:h-96"
            src={trivia.image}
          />
        </div>
        <div className="text-lg md:text-3xl text-center">
          {numberWithCommas(sliderValue)} {trivia.units}
        </div>
        {score
          ? (
            <div className="px-1">
              <div
                className={`text-lg font-bold md:text-3xl text-center
              ${percentage === 0 ? "text-green-400" : "text-red-900"}`}
              >
                {percentage === 0 ? "Bingo!" : `You were off by ${percentage}%`}
              </div>
              <div className="text-lg font-bold md:text-3xl text-center">
                Earned {score}pts!
              </div>
              {percentage !== 0 &&
                (
                  <div className="mx-auto text-lg md:text-3xl py-1 text-center">
                    {numberWithCommas(trivia.answer)} {trivia.units}
                  </div>
                )}
              <div className="mx-auto text-lg md:text-3xl py-1 text-center">
                {trivia.source}
              </div>
              <div className="flex justify-center m-2">
                <Button
                  disabled={disableNextBtn}
                  className="mx-auto text-lg w-full md:w-auto md:text-3xl px-3 py-3 rounded-x"
                  onClick={() => next()}
                >
                  {disableNextBtn ? "Out of Questions" : "Next"}
                </Button>
              </div>
            </div>
          )
          : (
            <div className="px-1">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <Slider
                    value={[value]}
                    onValueChange={onChange}
                    min={0}
                    max={trivia.high}
                    step={1}
                    className="my-12"
                  />
                </div>
                <div className="flex justify-center m-3">
                  <Button
                    disabled={!value}
                    className="mx-auto text-lg md:text-3xl px-3 py-1 rounded-xl bg-cyan-500 border-2 border-black"
                    type="submit"
                  >
                    Guess
                  </Button>
                </div>
              </form>
            </div>
          )}
      </div>
    </div>
  );
}
