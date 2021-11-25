function isOnlyDigits(string: string) {
  return [...string].every((c) => "0123456789, ?.".includes(c));
}

function isUpperCase(str: string): boolean {
  if (isOnlyDigits(str)) return false;
  return str == str.toUpperCase();
}

function isSilence(str: string): boolean {
  return str.trim().length == 0;
}

function isQuestion(str: string): boolean {
  return str.trim().endsWith("?");
}

export function hey(message: string): string {
  const isAQuestion = isQuestion(message);
  const isYelling = isUpperCase(message);
  const isSilent = isSilence(message);

  if (isSilent) return "Fine. Be that way!";
  if (isAQuestion && isYelling) return "Calm down, I know what I'm doing!";
  if (isAQuestion) return "Sure.";
  if (isYelling) return "Whoa, chill out!";

  return "Whatever.";
}
