const color = ["#66bb6a", "red"];

const InsertionSort = (
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
  let startTime = 1000;
  let endTime = 10000;

  if (bars == 20) {
    endTime = 20000;
    startTime = 1000;
  }

  setDisableButton(true);
  const arrLen = array.length;
  const temp = array;

  for (let i = 1; i < arrLen; i++) {
    setTimeout(() => {
      let key = temp[i];
      setKeyVal(i);
      
      let j = i - 1;
      let currentBars = [];
      currentBars.push(i);
      currentBars.push(j);
      setArrayCompare(currentBars);
      setArraySwap(color[0]);

      for (j; j >= 0 && key < temp[j]; j--) {
        temp[j + 1] = temp[j];

        let currentBars = [];
        currentBars.push(j);
        currentBars.push(j + 1);
        setArrayCompare(currentBars);

        setArraySwap(color[1]);
        setArray([...temp]);
      }

      temp[j + 1] = key;
      setArray([...temp]);
    }, i * startTime);
  }
  setTimeout(() => {
    console.log("done");
    setArrayCompare([]);
    setKeyVal(-1);
    setDisableButton(false);
  }, endTime);
};

export default InsertionSort;

// while (j >= 0 && key < temp[j]) {
//   temp[j + 1] = temp[j];

//   let currentBars = [];
//   currentBars.push(j);
//   currentBars.push(j + 1);
//   setArrayCompare(currentBars);

//   setArraySwap(color[1]);
//   setArray([...temp]);
//   j--;
// }
