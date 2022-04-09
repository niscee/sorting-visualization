import React from "react";

const color = ["#66bb6a", "red"];

const BubbleSort = (
  array,
  setArray,
  setArraySwap,
  arrayCompare,
  setArrayCompare,
  disableButton,
  setDisableButton,
  bars
) => {
  let startTime = 3400;
  let endTime = 29000;
  let innerStartTime = 100;
  let innerIntervalTime = 400;

  if (bars == 20) {
    endTime = 55000;
    startTime = 3000;
    innerStartTime = 50;
    innerIntervalTime = 100;
  }

  // prevent other button to work.
  setDisableButton(true);

  const arrLen = array.length;
  const temp = array;

  for (let i = 0; i < arrLen; i++) {
    setTimeout(() => {
      for (let j = 0; j < arrLen - i - 1; j++) {
        setTimeout(() => {
          let currentBars = [];
          currentBars.push(j);
          currentBars.push(j + 1);
          setArrayCompare(currentBars);
          setArraySwap(color[0]);

          setTimeout(() => {
            if (temp[j] > temp[j + 1]) {
              const newTemp = temp[j];
              temp[j] = temp[j + 1];
              temp[j + 1] = newTemp;

              setArraySwap(color[1]);
            }
            setArray(temp);
          }, innerStartTime);
        }, j * innerIntervalTime);
      }
    }, i * startTime);
  }

  setTimeout(() => {
    setArrayCompare([]);
    setDisableButton(false);
    console.log("done");
  }, endTime);
};

export default BubbleSort;
