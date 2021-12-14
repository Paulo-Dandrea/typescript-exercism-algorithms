function checkMagazine(magazine, note) {
  const magazineCounter = magazine.reduce(
    (map, word) => ({ ...map, [word]: (map[word] || 0) + 1 }),
    {}
  );

  const noteLeft = note.reduce((acc, word) => {
    if (magazineCounter[word] > 0) {
      magazineCounter[word]--;
      return acc;
    } else {
      return [...acc, word];
    }
    
  }, []);

  console.log(noteLeft.length > 0 ? "No" : "Yes");
}

// checkMagazine(
//   ["two", "times", "three", "is", "not", "four", "four"],
//   ["two", "times", "two", "is", "four"]
// );

// checkMagazine(
//   ['give', 'me', 'one' ,'grand', 'today' ,'night'],
//   ['give', 'one', 'grand' ,'today']
// );

checkMagazine(
  ["ive", "got", "a", "lovely", "bunch", "of", "coconuts"],
  ["ive", "got", "some", "coconuts"]
);
