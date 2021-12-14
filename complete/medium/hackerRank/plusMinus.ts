function plusMinus(arr: number[]): void {
  const positives = arr.filter((x) => x > 0).length;
  const negatives = arr.filter((x) => x < 0).length;
  const zeros = arr.filter((x) => x === 0).length;

  const positivePercentage = (positives / arr.length).toFixed(6);
  const negativePercentage = (negatives / arr.length).toFixed(6);
  const zeroPercentage = (zeros / arr.length).toFixed(6);

  console.log(positivePercentage);
  console.log(negativePercentage);
  console.log(zeroPercentage);
}

plusMinus([-4, 3, -9, 0, 4, 1]);
