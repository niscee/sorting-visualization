const BubbleSort = (arr, setArray, setArraySwap) => {
  const arrLen = arr.length;
  const temp = arr;

  for (let i = 0; i < arrLen; i++) {
    setTimeout(() => {
      for (let j = 0; j < arrLen - i - 1; j++) {
        setTimeout(() => {
          let currentBars = [];
          currentBars.push(j);
          currentBars.push(j + 1);
          setArraySwap(currentBars);

          if (temp[j] > temp[j + 1]) {
            const newTemp = temp[j];
            temp[j] = temp[j + 1];
            temp[j + 1] = newTemp;
          }

          setArray(temp);
        }, j * 100);
      }
    }, i * 2000);
  }

  setTimeout(() => {
    setArraySwap([]);
    console.log("done")
  }, 30000);
};

export default BubbleSort;

// let array = [...arr];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       setTimeout(() => {
//         let currentBars = [];
//         currentBars.push(j);
//         currentBars.push(j + 1);
//         setArraySwap(currentBars);
//         if (array[j] > array[j + 1]) {
//           let temp = array[j];
//           array[j] = array[j + 1];
//           array[j + 1] = temp;
//         }
//         setArray(array);
//       }, j * 600);
//     }
//   }
//   setArray(array);
