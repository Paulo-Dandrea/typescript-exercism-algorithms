function range(size: number, startAt = 0) {
  return [...Array(size).keys()].map((i) => i + startAt);
}

function characterRange(startChar: string, endChar: string) {
  return String.fromCharCode(
    ...range(
      endChar.charCodeAt(0) - startChar.charCodeAt(0) + 1,
      startChar.charCodeAt(0)
    )
  );
}

function randomNumber(min = 0, max = 9) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomLetter(start = "A", end = "Z") {
  return String.fromCharCode(
    randomNumber(start.charCodeAt(0), end.charCodeAt(0))
  );
}

const arrayOf = (generator: () => any, size: number) =>
  new Array(size).fill(null).map(() => generator());

const randomName = () =>
  [...arrayOf(randomLetter, 2), ...arrayOf(randomNumber, 3)].join("");

export class Robot {
  randomName: string;

  constructor() {
    this.randomName = randomName();
    console.log(this.randomName);
  }

  public get name(): string {
    return this.randomName;
  }

  public resetName(): void {
    this.randomName = randomName();
  }

  public static releaseNames(): void {
    
  }
}
