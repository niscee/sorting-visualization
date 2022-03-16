import React from "react";
import BubbleSort from "../utils/BubbleSort";
import InsertionSort from "../utils/InsertionSort";
import "./button.css";

// filter algorithm based on algo_id.
const filterAlgo = (
  id,
  array,
  setArray,
  setArraySwap,
  arrayCompare,
  setArrayCompare,
  disableButton,
  setDisableButton
) => {
  if (id === 1) {
    return (
      <button
        disabled={disableButton}
        onClick={() =>
          BubbleSort(
            array,
            setArray,
            setArraySwap,
            arrayCompare,
            setArrayCompare,
            disableButton,
            setDisableButton
          )
        }
        className="btnStyle"
        title="play visualizer"
      >
        ▶️
      </button>
    );
  }

  if (id === 2) {
    return (
      <button
        onClick={() =>
          InsertionSort(
            array,
            setArray,
            setArraySwap,
            arrayCompare,
            setArrayCompare,
            disableButton,
            setDisableButton
          )
        }
        className="btnStyle"
        title="play visualizer"
        disabled={disableButton}
      >
        ▶️
      </button>
    );
  }
};

const Button = ({
  array,
  setArray,
  setArraySwap,
  currentAlgo,
  arrayCompare,
  setArrayCompare,
  disableButton,
  setDisableButton,
}) => {
  return (
    <div className="buttonContainer">
      {currentAlgo &&
        filterAlgo(
          currentAlgo.id,
          array,
          setArray,
          setArraySwap,
          arrayCompare,
          setArrayCompare,
          disableButton,
          setDisableButton
        )}
    </div>
  );
};

export default Button;
