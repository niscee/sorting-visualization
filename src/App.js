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
    arrayCompare,
    setArrayCompare,
    disableButton,
    setDisableButton,
  ] = AppState();

  useEffect(() => {
    renderBars();
  }, [currentAlgo]);

  return (
    <div className="mainContainer">
      <Navbar
        renderBars={renderBars}
        setCurrentAlgo={setCurrentAlgo}
        disableButton={disableButton}
      />
      <div className="innerContainer">
        <Bars
          bars={bars}
          array={array}
          arraySwap={arraySwap}
          arrayCompare={arrayCompare}
          setArrayCompare={setArrayCompare}
        />
        <Button
          array={array}
          setArraySwap={setArraySwap}
          setArray={setArray}
          currentAlgo={currentAlgo}
          arrayCompare={arrayCompare}
          setArrayCompare={setArrayCompare}
          disableButton={disableButton}
          setDisableButton={setDisableButton}
        />
        <AlgoInfo currentAlgo={currentAlgo} />
      </div>
    </div>
  );
};

export default App;
