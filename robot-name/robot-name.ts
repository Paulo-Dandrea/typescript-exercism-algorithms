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

function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomName() {
  const alpha1 = String.fromCharCode(randomNumber("A".charCodeAt(0), "Z".charCodeAt(0)));
  console.log(alpha1);
  return alpha1;
}

export class Robot {
  randomName: string;

  constructor() {
    this.randomName = "x";
    console.log(randomNumber(0,26));
    
    randomName();
  }

  public get name(): string {
    throw new Error("Implement Robot#name");
  }

  public resetName(): void {
    throw new Error("Implement Robot#resetName");
  }

  public static releaseNames(): void {
    throw new Error("Implement Robot.releaseNames");
  }
}
