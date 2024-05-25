import React from "react";
import YearTab from "../year/yeartab";
import WeekTab from "../week/weektab";
import ZodiacTab from "../zodiac/zodiactab";
import zodiac from "../zodiac/zodiac";
import week from '../week/week'
import year from '../year/year'
import "./style.css"

console.log(zodiac);
console.log(week);
console.log(year);


function App() {
  return (
  <>
    <div className="tab">
      <h2>Знаки зодіаку</h2>
      <ZodiacTab zodiac={zodiac}></ZodiacTab>
    </div>
    <div className="tab">
      <h2>Дні тижня</h2>
      <WeekTab week={week}></WeekTab>
    </div>
    <div className="tab">
      <h2>Місяці року</h2>
      <YearTab year={year}></YearTab>
    </div>
  </>
  );
}

export default App;