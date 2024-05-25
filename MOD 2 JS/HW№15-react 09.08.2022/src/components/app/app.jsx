import React from "react";
import YearTab from "../year/yeartab";
import WeekTab from "../week/weektab";
import ZodiacTab from "../zodiac/zodiactab";
import data from "../data/data";
import "./style.css"

function App() {
  return (
  <>
    <div className="tab">    
      <h2>Номер валюти</h2>
      <WeekTab data={data}></WeekTab>      
    </div>
    <div className="tab">      
      <h2>Назва валюти</h2>
      <YearTab data={data}></YearTab>            
    </div>
    <div className="tab">
      <h2>Курс валюти</h2>
      <ZodiacTab data={data}></ZodiacTab>
    </div>
  </>
  );
}

export default App;