const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

const arr9 = [
  [-10, 3, 0, 5, -4],
  [2, -1, 0, 2, -8],
  [9, -2, -5, 6, 0],
  [9, -7, 4, 8, -2],
  [3, 7, 8, -5, 0],
];

function diagonalDifference(arr: number[][]): number {
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;

  arr.forEach((_, i) => {
    primaryDiagonal += arr[i][i];
  });

  arr.forEach((_, i) => {
    let n = arr[i][arr.length - i - 1];

    secondaryDiagonal += n;
  });

  return Math.abs(secondaryDiagonal - primaryDiagonal);
}

console.log(
diagonalDifference(arr)
);

console.log('-------');


console.log(
diagonalDifference(arr9)
);
