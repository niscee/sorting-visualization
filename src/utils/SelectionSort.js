import React from "react";

const color = ["#66bb6a", "red"];

const SelectionSort = (
  array,
  setArray,
  setArraySwap,
  arrayCompare,
  setArrayCompare,
  disableButton,
  setDisableButton,
  bars,
  key,
  setKeyVal
) => {
  let startTime = 3200;
  let endTime = 30000;
  let innerStartTime1 = 200;
  let innerStartTime2 = 2000;

  if (bars == 20) {
    startTime = 3200;
    endTime = 65000;
    innerStartTime1 = 100;
    innerStartTime2 = 2000;
  }

  setDisableButton(true);
  const arrLen = array.length;
  const temp = array;

  for (let i = 0; i < arrLen; i++) {
    setTimeout(() => {
      let min = i;
      setKeyVal(i);
      for (let j = i + 1; j < arrLen; j++) {
        setTimeout(() => {
          let currentBars = [];
          currentBars.push(i);
          currentBars.push(j);
          setArrayCompare(currentBars);

          // bar color 0 = green, 1 == red
          setArraySwap(color[0]);
          if (temp[j] < temp[min]) {
            min = j;
          }
        }, j * innerStartTime1);
      }

      setTimeout(() => {
        if (min != i) {
          // Swapping the elements
          let tmp = temp[i];
          temp[i] = temp[min];
          temp[min] = tmp;
          let currentBars = [];
          currentBars.push(i);
          currentBars.push(min);
          setArrayCompare(currentBars);
          setArraySwap(color[1]);
        }
      }, innerStartTime2);

      setArray(temp);
    }, i * startTime);
  }

  setTimeout(() => {
    setArrayCompare([]);
    setKeyVal(-1);
    setDisableButton(false);
    console.log("done");
  }, endTime);
};

export default SelectionSort;
