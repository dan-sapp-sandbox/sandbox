"use client";
import { iTrivia } from "../api/types";
import { useState } from "react";
import { useController, useForm } from "react-hook-form";
import { Slider } from "@/components/ui/slider";

interface iPromptProps {
  trivia: iTrivia;
}
export default function Prompt({ trivia }: iPromptProps): JSX.Element {
  const [score, setScore] = useState<number | undefined>(undefined);
  const [percentage, setPercentage] = useState<number | undefined>(undefined);
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
      <div className="my-6">
        <img alt="pic" className="rounded-xl" src={trivia.image} />
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
          </div>
        )
        : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Rate your experience:</label>
              <Slider
                value={[value]}
                onValueChange={onChange}
                min={trivia.low}
                max={trivia.high}
                step={1}
                className="my-4"
              />
              <p>Current Guess: {sliderValue}</p>
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
