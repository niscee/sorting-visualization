import React from "react";

const BubbleSort = (
  array,
  setArray,
  setArraySwap,
  arrayCompare,
  setArrayCompare,
  disableButton,
  setDisableButton
) => {
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

          if (temp[j] > temp[j + 1]) {
            setArrayCompare([]);

            setTimeout(() => {
              const newTemp = temp[j];
              temp[j] = temp[j + 1];
              temp[j + 1] = newTemp;

              let currentCompareBars = [];
              currentCompareBars.push(j);
              currentCompareBars.push(j + 1);
              setArraySwap(currentCompareBars);
            }, 500);
          }

          setArray(temp);
        }, j * 100);
      }
    }, i * 2000);
  }

  setTimeout(() => {
    setArrayCompare([]);
    setDisableButton(false);
  }, 22000);
};

export default BubbleSort;
