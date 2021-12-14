const hourGlasses = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

function hourglassSum(arr) {
  const sums = [];

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      sums.push(
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +

        arr[i + 1][j + 1] +
        
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2]
      );
    }
  }

  let maxSum = -Infinity;

  sums.forEach((element) => {
    if (element > maxSum) {
      maxSum = element;
    }
  });

  return maxSum;
}

console.log(hourglassSum(hourGlasses));
