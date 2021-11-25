export function isPangram(str: string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letters = str.toLowerCase().split("");
  const missingLetters = alphabet.split("").filter((l) => !letters.includes(l));

  return missingLetters.length === 0;
}
