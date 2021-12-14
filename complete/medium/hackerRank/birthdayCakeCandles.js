function birthdayCakeCandles(candles) {
  let highestHeight = 0;

  candles.forEach((height) => {
    if (height > highestHeight) highestHeight = height;
  });

  let candlesWithHeighestHeight = 0;

  candles.forEach((height) => {
    if ((height === highestHeight)) candlesWithHeighestHeight++;
  });

  console.log(candlesWithHeighestHeight);
}

birthdayCakeCandles([3, 2, 1, 3]);
