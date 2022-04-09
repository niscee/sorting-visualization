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
    keyVal,
    setKeyVal,
  ] = AppState();

  useEffect(() => {
    renderBars();
  }, [currentAlgo]);

  return (
    <div className="mainContainer">
      <Navbar
        renderBars={renderBars}
        setCurrentAlgo={setCurrentAlgo}
        setBars={setBars}
        disableButton={disableButton}
      />
      <div className="innerContainer">
        <Bars
          bars={bars}
          array={array}
          arraySwap={arraySwap}
          arrayCompare={arrayCompare}
          setArrayCompare={setArrayCompare}
          keyVal={keyVal}
          setKeyVal={setKeyVal}
        />
        <Button
          bars={bars}
          array={array}
          setArraySwap={setArraySwap}
          setArray={setArray}
          currentAlgo={currentAlgo}
          arrayCompare={arrayCompare}
          setArrayCompare={setArrayCompare}
          disableButton={disableButton}
          setDisableButton={setDisableButton}
          keyVal={keyVal}
          setKeyVal={setKeyVal}
        />
        <AlgoInfo currentAlgo={currentAlgo} />
      </div>
    </div>
  );
};

export default App;
