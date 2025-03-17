"use client";
import { useState } from "react";

export const useSimonState = () => {
  const [prompt, setPrompt] = useState<string[]>([]);
  const [promptLength, setPromptLength] = useState<number>(1);
  const [correctGuesses, setCorrectGuesses] = useState<number>(0);
  const [active, setActive] = useState<string>("");

  const start = () => {
    const sequence = generateSequence();
    setPrompt(sequence);
    startup();
    setTimeout(() => showSequence(sequence, promptLength), 2000);
  };
  const generateSequence = () => {
    const sequence = [];
    let i;
    for (i = 0; i < 5; i++) {
      const code = Math.floor(Math.random() * 1000) % 4;
      switch (code) {
        case 0:
          sequence.push("red");
          break;
        case 1:
          sequence.push("blue");
          break;
        case 2:
          sequence.push("yellow");
          break;
        case 3:
          sequence.push("green");
          break;
        default:
          break;
      }
    }
    return sequence;
  };

  const startup = () => {
    const startupSequence = ["red", "blue", "yellow", "green", "red", "blue", "yellow", "green", "red", "blue", "yellow", "green", ""]
    startupSequence.forEach((color, i) => {
      setTimeout(() => setActive(color), i * 100);
    })
  };

  const showSequence = (sequence: string[], parts: number) => {
    const sequencePart = sequence.slice(0, parts);
    sequencePart.forEach((x, i) => {
      setTimeout(() => {
        setActive(x);
        playTone(matchToneToColor(x), 700, .1);
      }, (i + 1) * 1000);
      setTimeout(() => setActive(""), ((i + 1) * 1000) + 600);
    });
  };

  const tap = (color: string) => {
    playTone(matchToneToColor(color), 700, .1);
    if (color === prompt[correctGuesses]) {
      if (correctGuesses + 1 === promptLength) {
        setCorrectGuesses(0);
        setPromptLength(promptLength + 1)
        setTimeout(() => showSequence(prompt, promptLength + 1), 1000)
      } else {
        setCorrectGuesses(correctGuesses + 1);
      }
    } else {
      startup();
      showSequence(prompt, promptLength);
    }
  };

  const matchToneToColor = (color: string) => {
    switch (color) {
      case 'blue':
        return 410
      case 'red':
        return 440
      case 'yellow':
        return 470
      case 'green':
        return 500
      default:
        return 300
    }
  }

  function playTone(
    frequency: number,
    duration: number,
    volume: number = 1,
  ): void {
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = "sine";
    oscillator.frequency.value = frequency;

    gainNode.gain.value = volume;

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration / 1000);
  }

  return { prompt, correctGuesses, active, start, tap };
};
