function compareTriplets(a: number[], b: number[]): number[] {
  let alice = 0;
  let bob = 0;

  a.forEach((an, i) => {
    if (an > b[i]) alice++;
    if (b[i] > an) bob++;
  });
  console.log([alice, bob])
  return [alice, bob];
}

compareTriplets([1, 2, 3], [3, 2, 1]);
