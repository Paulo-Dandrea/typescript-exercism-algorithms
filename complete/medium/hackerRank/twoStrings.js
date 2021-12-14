function twoStrings(s1, s2) {
  const s1Set = new Set();

  for (let i = 0; i < s1.length; i++) {
    s1Set.add(s1.charAt(i));
  }

  for (let i = 0; i < s2.length; i++) {

    if(s1Set.has(s2.charAt(i))) return "YES"
  }

  return "NO"
}

