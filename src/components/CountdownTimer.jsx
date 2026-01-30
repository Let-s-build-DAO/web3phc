import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";

// Conference: December 5th, 2026 (month 11 = December in JS)
const CONFERENCE_DATE = new Date(2026, 11, 5).getTime();

const CountdownTimer = ({ background, boxshadow, padding, date }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Time&apos;s up. Today is the big day!</span>;
    }
    return (
      <span>
        {String(days).padStart(2, "0")}:{String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </span>
    );
  };

  const targetTime = date ? new Date(date).getTime() : CONFERENCE_DATE;
  const hasYellowBg = background && background.includes("yellow");

  if (!mounted) {
    return (
      <span className={`text-3xl lg:text-5xl font-bold rounded-2xl ${background || ""} ${boxshadow || ""} ${padding || ""} ${hasYellowBg ? "text-brand-black" : "text-white"}`}>
        --:--:--:--
      </span>
    );
  }

  return (
    <span className={`text-3xl lg:text-5xl font-bold rounded-2xl ${background || ""} ${boxshadow || ""} ${padding || ""} ${hasYellowBg ? "text-brand-black" : "text-white"}`}>
      <Countdown date={targetTime} renderer={renderer} />
    </span>
  );
};

export default CountdownTimer;
