import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";

const CountdownTimer = ({ background, boxshadow, padding }) => {
  const renderer = ({ days, hours, minutes, completed }) => {
    if (completed) {
      return <h1>Time' Up. Today is the Big Day</h1>;
    } else {
      return (
        <h1>
          {days}:{hours}:{minutes}
        </h1>
      );
    }
  };
  const targetDate = new Date(2024, 11, 7).getTime();
  return (
    <h1 className={`text-3xl lg:text-5xl rounded-3xl ${background || ""} ${boxshadow || ""} ${padding || ""}`}><Countdown date={targetDate} renderer={renderer} /></h1>
  );
};

export default CountdownTimer;
