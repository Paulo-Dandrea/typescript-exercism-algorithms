function breakingRecords(scores) {
  let [hi, lo] = scores[0];
  let [max, min] = [0, 0];

  scores.forEach((s) => {
    if (s > hi) {
      hi = s;
      max++;
    }
    if (s < lo) {
      lo = s;
      min++;
    }
  });

  return [max, min];
}

