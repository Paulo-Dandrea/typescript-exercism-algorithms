const arr = [1, 2, 3, 4, 5];
const V = 5;

function introTutorial(V: number, arr: Array<number>): number {
  return arr.indexOf(V);
}

console.log(introTutorial(3, arr));
