// function range(size: number, startAt = 0) {
//   return [...Array(size).keys()].map((i) => i + startAt);
// }

// function characterRange(startChar: string, endChar: string) {
//   return String.fromCharCode(
//     ...range(
//       endChar.charCodeAt(0) - startChar.charCodeAt(0) + 1,
//       startChar.charCodeAt(0)
//     )
//   );
// }

const randomNumber = (min = 0, max = 9) =>
  Math.floor(Math.random() * (max + 1 - min) + min);

const randomLetter = (start = "A", end = "Z") => {
  const minCharCode = start.charCodeAt(0);
  const maxCharCode = end.charCodeAt(0);
  const charCode = randomNumber(minCharCode, maxCharCode);

  return String.fromCharCode(charCode);
};

const arrayOf = (generator: () => any, size: number) =>
  new Array(size).fill(null).map(() => generator());

const randomName = () =>
  [...arrayOf(randomLetter, 2), ...arrayOf(randomNumber, 3)].join("");

const newRandomName = (usedNames: string[]): string => {
  let newName = "";

  while (newName === "") {
    const name = randomName();
    if (!usedNames.includes(name)) {
      newName = name;
    }
  }

  return newName;
};

export class Robot {
  randomName: string;
  usedNames: string[] = [];

  constructor() {
    // TODO: abstract name generator. Could be a Class that has all names
    const name = newRandomName(this.usedNames);
    this.randomName = name;
    this.usedNames.push(name);
  }

  public get name(): string {
    return this.randomName;
  }

  public resetName(): void {
    const name = newRandomName(this.usedNames);
    this.randomName = name;
    this.usedNames.push(name);

    this.randomName = name;
  }

  public static releaseNames(): void {}
}
