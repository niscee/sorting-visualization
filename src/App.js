import React, { useState, useEffect } from "react";
import Bars from "./components/Bars";
import Navbar from "./components/Navbar";
import AlgoInfo from "./components/AlgoInfo";
import "./App.css";
import AppState from "./AppState";
import Button from "./components/Button";

const App = () => {
  const [
    bars,
    setBars,
    array,
    setArray,
    renderBars,
    arraySwap,
    setArraySwap,
    currentAlgo,
    setCurrentAlgo,
  ] = AppState();

  useEffect(() => {
    renderBars();
  }, []);

  return (
    <div className="mainContainer">
      <Navbar renderBars={renderBars} setCurrentAlgo={setCurrentAlgo} />
      <div className="innerContainer">
        <Bars bars={bars} array={array} arraySwap={arraySwap} />
        <Button
          array={array}
          setArraySwap={setArraySwap}
          setArray={setArray}
          currentAlgo={currentAlgo}
        />
        <AlgoInfo currentAlgo={currentAlgo} />
      </div>
    </div>
  );
};

export default App;
