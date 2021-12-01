// I want to know how to separate files here :D

const helpers = {
  randomNumber: (min = 0, max = 9): number =>
    Math.floor(Math.random() * (max + 1 - min) + min),

  randomLetter: (start = "A", end = "Z"): string =>
    String.fromCharCode(
      helpers.randomNumber(start.charCodeAt(0), end.charCodeAt(0))
    ),

  arrayOf: <T>(generator: () => T, size: number): T[] =>
    new Array(size).fill(null).map(() => generator()),
};

const randomRobotName = (): string =>
  [
    ...helpers.arrayOf(helpers.randomLetter, 2),
    ...helpers.arrayOf(helpers.randomNumber, 3),
  ].join("");

export class Robot {
  name: string;
  private static usedNames = new Set<string>();

  constructor() {
    this.name = this.getName();
  }

  newRandomName = (): string => {
    let newName;

    do {
      newName = randomRobotName();
    } while (Robot.usedNames.has(newName));

    return newName;
  };

  public getName(): string {
    const name = this.newRandomName();
    Robot.usedNames.add(name);
    this.name = name;
    return name;
  }

  public resetName(): void {
    this.getName();
  }

  public static releaseNames(): void {
    Robot.usedNames.clear();
  }
}
