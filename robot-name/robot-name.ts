const randomNumber = (min = 0, max = 9) =>
  Math.floor(Math.random() * (max + 1 - min) + min);

const randomLetter = (start = "A", end = "Z") =>
  String.fromCharCode(randomNumber(start.charCodeAt(0), end.charCodeAt(0)));

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
  name: string;

  usedNames: string[] = [];

  constructor() {
    this.name = this.getName()
  }

  public getName() {
    const name = newRandomName(this.usedNames);
    this.usedNames.push(name);
    this.name = name;
    return name
  }

  public resetName(): void {
    this.getName()
  }

  static releaseNames(){
    // TODO: Create all possible names, them, only pop
  }
}
