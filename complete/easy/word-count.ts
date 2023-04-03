function removeSingleQuote(str: string): string {
  if (str[0] === "'") {
    str = str.slice(1);
  }
  if (str[str.length - 1] === "'") {
    str = str.slice(0, str.length - 1);
  }
  return str;
}

export function count(str: string): Map<string, number> {
  str = removeSingleQuote(str);

  str = str.toLowerCase();
  const words = str.split(/[^a-z0-9'?]+/).filter((word) => word !== "");
  const wordsWithoutSingleQuote = words.map((word) =>
    word[0] === "'" ? word.slice(1) : word
  );

  const wordsCounted: Map<string, number> = new Map<string, number>();

  wordsWithoutSingleQuote.forEach((word) => {
    if (wordsCounted.has(word)) {
      // Notice the use of the ! operator after wordsCounted.get(word) to tell TypeScript that
      // we are sure that wordsCounted.get(word) will always return a number and not undefined.
      // This is because the has() method checks if the key exists in the map before calling get().
      wordsCounted.set(word, wordsCounted.get(word)! + 1);
    } else {
      wordsCounted.set(word, 1);
    }
  });

  return wordsCounted;
}
