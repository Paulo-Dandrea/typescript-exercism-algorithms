const arr1 = [2, 4, 6, 8, 3];
const arr2 = [5, 4, 3, 2, 1];
const arr3 = [4, 3,2 , 1, 0];
const arr4 = [2, 4, 6, 8, 3];

const arrfuck = [1, 3, 5, 9, 13, 22, 27, 35, 46, 51, 55, 83, 87, 23]

function insertionSort1(n: number, arr: number[]) {
  for (let i = n - 1; i >= 0; i--) {
    const target = arr[i];
    const previous = arr[i - 1];

    if (target < previous) {
      arr[i] = previous;
      console.log(arr.join(" "));
      arr[i - 1] = target;
    } else {
        console.log(arr.join(" "));
      break;
    }
  }
}

insertionSort1(14, arrfuck);
