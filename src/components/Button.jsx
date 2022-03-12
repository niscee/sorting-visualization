import React from "react";
import BubbleSort from "../utils/BubbleSort";
import "./button.css";

const filterAlgo = (id, array, setArray, setArraySwap) => {
  if (id == 1) {
    return (
      <button
        onClick={() => BubbleSort(array, setArray, setArraySwap)}
        className="btnStyle"
        title="play visualizer"
      >
        ▶️
      </button>
    );
  }

  if (id == 2) {
    return "hello";
  }
};

const Button = ({ array, setArray, setArraySwap, currentAlgo }) => {
  return (
    <div className="buttonContainer">
      {currentAlgo && filterAlgo(currentAlgo.id, array, setArray, setArraySwap)}
    </div>
  );
};

export default Button;
