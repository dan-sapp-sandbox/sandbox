"use client";
import { useState } from "react";

export const useSimonState = () => {
  const [prompt, setPrompt] = useState<string[]>([]);
  const [correctGuesses, setCorrectGuesses] = useState<number>(3);
  const [active, setActive] = useState<string>("");

  const start = () => {
    const sequence = generateSequence();
    setPrompt(sequence);
    startup();
    setTimeout(() => showSequence(sequence), 2000);
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
    setActive("red");
    setTimeout(() => setActive("blue"), 100);
    setTimeout(() => setActive("yellow"), 200);
    setTimeout(() => setActive("green"), 300);
    setTimeout(() => setActive("red"), 400);
    setTimeout(() => setActive("blue"), 500);
    setTimeout(() => setActive("yellow"), 600);
    setTimeout(() => setActive("green"), 700);
    setTimeout(() => setActive("red"), 800);
    setTimeout(() => setActive("blue"), 900);
    setTimeout(() => setActive("yellow"), 1000);
    setTimeout(() => setActive("green"), 1100);
    setTimeout(() => setActive(""), 1200);
  };
  const showSequence = (sequence: string[]) => {
    const test = sequence.slice(0, correctGuesses + 1);
    test.forEach((x, i) => {
      setTimeout(() => {
        setActive(x);
        playTone(matchToneToColor(x), 700, .1);
      }, (i + 1) * 1000);
      setTimeout(() => setActive(""), ((i + 1) * 1000) + 600);
    });
  };

  // TODO: handle entering a sequence bigger than 1
  const tap = (color: string) => {
    playTone(matchToneToColor(color), 700, .1);
    if (color === prompt[correctGuesses]) {
      setCorrectGuesses(correctGuesses + 1);
      setTimeout(() => showSequence(prompt), 1000)
    } else {
      startup();
      showSequence(prompt);
    }
  };

  const matchToneToColor = (color: string) => {
    switch(color) {
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
