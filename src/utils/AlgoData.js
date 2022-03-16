const AlgoData = [
  {
    id: 1,
    name: "Bubble Sort",
    details:
      "Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements bubble to the top of the list. It is slow and impractical for most problems.",
    worstCase: "0(n^2)",
    bestCase: "0(n)",
    spaceComplexity: "0(1)",
  },

  {
    id: 2,
    name: "Insertion Sort",
    details:
      "Insertion Sort is a simple sorting algorithm that iterates through an array and at each iteration it removes one element from the array, finds the location it belongs to in the sorted list and inserts it there, repeating until no elements remain in the unsorted list. It is an in-place, stable sorting algorithm that is inefficient on large input arrays but works well for data sets that are almost sorted. It is more efficient in practice compared to other quadratic sorting algorithms like bubble sort and selection sort.",
    worstCase: "0(n^2)",
    bestCase: "0(n)",
    spaceComplexity: "0(1)",
  },
];

export default AlgoData;
