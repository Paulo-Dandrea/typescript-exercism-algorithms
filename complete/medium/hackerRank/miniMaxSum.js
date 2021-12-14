const arr = [1, 2, 3, 4, 5];

function miniMaxSum(arr) {
  const allNumSum = arr.reduce((acc, n) => acc + n, 0);

  let minNum = Infinity;
  let maxNum = -Infinity;

  arr.forEach((n) => {
    if (n > maxNum) maxNum = n;
    if (n < minNum) minNum = n;
  });


  const minNumSum = allNumSum - maxNum;
  const maxNumSum = allNumSum - minNum;

  console.log(minNumSum, maxNumSum);
}

miniMaxSum(arr);
