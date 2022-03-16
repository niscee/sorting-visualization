const InsertionSort = (
  array,
  setArray,
  setArraySwap,
  arrayCompare,
  setArrayCompare,
  disableButton,
  setDisableButton
) => {
  const arrLen = array.length;
  const temp = array;

  for (let i = 1; i < arrLen; i++) {
    setTimeout(() => {
      let key = temp[i];
      let j = i - 1;
      let currentBars = [];
      currentBars.push(i);
      currentBars.push(j);
      setArrayCompare(currentBars);

      setTimeout(() => {
        while (j >= 0 && key < temp[j]) {
          temp[j + 1] = temp[j];
          setArray([...temp]);
          j--;
        }
      }, i * 50);

      setTimeout(() => {
        temp[j + 1] = key;
        setArray([...temp]);
      }, i * 100);
    }, i * 1000);
  }
};

export default InsertionSort;
