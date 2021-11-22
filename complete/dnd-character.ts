export class DnDCharacter {
  readonly constitution: number;
  readonly hitpoints: number;
  readonly strength: number;
  readonly intelligence: number;
  readonly wisdom: number;
  readonly charisma: number;
  readonly dexterity: number;

  constructor() {
    this.constitution = DnDCharacter.generateAbilityScore();
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
    this.charisma = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.strength = DnDCharacter.generateAbilityScore();
  }

  private static throwADice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  public static generateAbilityScore() {
    const rollsSorted = Array(4)
      .fill(0)
      .map(() => this.throwADice())
      .sort((a, b) => b - a);

    const top3Rolls = rollsSorted.slice(0, 3);

    const sum = top3Rolls.reduce((acc, x) => acc + x, 0);

    return sum;
  }

  public static getModifierFor(abilityValue: number) {
    return Math.floor((abilityValue - 10) / 2);
  }
}
