import React from "react";
import "./button.css";
import FilterAlgo from "./FilterAlgo";

const Button = ({
  bars,
  array,
  setArray,
  setArraySwap,
  currentAlgo,
  arrayCompare,
  setArrayCompare,
  disableButton,
  setDisableButton,
  keyVal,
  setKeyVal,
}) => {
  return (
    <div className="buttonContainer">
      {/* get id and return selected id algorithm, details */}
      {currentAlgo && (
        <FilterAlgo
          id={currentAlgo.id}
          array={array}
          setArray={setArray}
          setArraySwap={setArraySwap}
          arrayCompare={arrayCompare}
          setArrayCompare={setArrayCompare}
          disableButton={disableButton}
          setDisableButton={setDisableButton}
          bars={bars}
          keyVal={keyVal}
          setKeyVal={setKeyVal}
        />
      )}
    </div>
  );
};

export default Button;
