import React, { useState, useEffect } from "react";

const AppState = () => {
  const [bars, setBars] = useState(10);
  const [array, setArray] = useState([]);
  const [keyVal, setKeyVal] = useState(-1);
  const [arraySwap, setArraySwap] = useState("#98ee99");
  const [arrayCompare, setArrayCompare] = useState([]);
  const [currentAlgo, setCurrentAlgo] = useState("");
  const [disableButton, setDisableButton] = useState(false);

  // generate radnom number.
  const generateNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  // set bar value in array.
  const renderBars = () => {
    let tempBar = [];
    let check = window.innerWidth;

    for (let i = 0; i < bars; i++) {
      if (check < 768) {
        tempBar.push(generateNumber(3, 15));
      } else {
        tempBar.push(generateNumber(3, 32));
      }
    }
    setTimeout(() => {
      setArray([]);
      setArray([...tempBar]);
    }, 1);
  };

  useEffect(() => {
    renderBars();
  }, [bars]);

  return [
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
  ];
};

export default AppState;
