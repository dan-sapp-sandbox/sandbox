"use client";
import { iTrivia } from "../api/types";
import { useState } from "react";
import { useController, useForm } from "react-hook-form";
import { Slider } from "@/components/ui/slider";

interface iPromptProps {
  triviaList: iTrivia[];
}
export default function Prompt({ triviaList }: iPromptProps): JSX.Element {
  const [index, setIndex] = useState<number>(0);
  const [score, setScore] = useState<number | undefined>(undefined);
  const [percentage, setPercentage] = useState<number | undefined>(undefined);
  const trivia = triviaList?.[index];
  function next() {
    setIndex(index + 1);
    setScore(undefined);
  }
  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      guess: Math.floor(trivia.high / 2),
    },
  });

  const onSubmit = (data: { guess: number }) => {
    console.log("Form Data:", data);
    const percentage = Math.round(
      100 * Math.abs(data.guess - trivia.answer) /
        trivia.answer,
    );
    setPercentage(percentage);
    setScore(50);
  };
  const {
    field: { onChange, value },
  } = useController({
    name: "guess",
    control,
  });
  const sliderValue = watch("guess");
  return (
    <div className="p-3">
      <div className="text-4xl text-center">{trivia.prompt}</div>
      <div className="my-6 flex justify-center items-center">
        <img alt="pic" className="rounded-xl min-h-60" src={trivia.image} />
      </div>
      <div className="text-4xl text-center">{sliderValue} {trivia.units}</div>
      {score
        ? (
          <div>
            <div className="text-4xl text-center">Earned {score}pts!</div>
            <div className="text-4xl text-center">
              You were off by {percentage}%
            </div>
            <div className="mx-auto text-3xl py-3  text-center">
              {trivia.answer} {trivia.units}
            </div>
            <div className="mx-auto text-3xl py-3">
              {trivia.source}
            </div>
            <div className="flex justify-center m-3">
              <button
                className="mx-auto text-3xl p-3 rounded-xl bg-red-50"
                onClick={() => next()}
              >
                Next
              </button>
            </div>
          </div>
        )
        : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Slider
                value={[value]}
                onValueChange={onChange}
                min={0}
                max={trivia.high}
                step={1}
                className="my-4"
              />
            </div>
            <div className="flex justify-center m-3">
              <button
                className="mx-auto text-3xl p-3 rounded-xl bg-purple-50"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        )}
    </div>
  );
}
