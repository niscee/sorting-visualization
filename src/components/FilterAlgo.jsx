import React from "react";
import BubbleSort from "../utils/BubbleSort";
import InsertionSort from "../utils/InsertionSort";
import SelectionSort from "../utils/SelectionSort";
import ColorDefine from "./ColorDefine";

const FilterAlgo = ({
  id,
  array,
  setArray,
  setArraySwap,
  arrayCompare,
  setArrayCompare,
  disableButton,
  setDisableButton,
  bars,
  keyVal,
  setKeyVal,
}) => {
  let funcName = "";
  if (id === 1) {
    funcName = BubbleSort;
  }

  if (id === 2) {
    funcName = InsertionSort;
  }

  if (id === 3) {
    funcName = SelectionSort;
  }

  return (
    <div>
      <ColorDefine />
      <button
        disabled={disableButton}
        onClick={() =>
          funcName(
            array,
            setArray,
            setArraySwap,
            arrayCompare,
            setArrayCompare,
            disableButton,
            setDisableButton,
            bars,
            keyVal,
            setKeyVal
          )
        }
        className="btnStyle"
        title="play visualizer"
      >
        ▶️
      </button>
    </div>
  );
};

export default FilterAlgo;
