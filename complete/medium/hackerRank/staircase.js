function staircase(n) {
  for (let i = 1; i <= n; i++) {
    const space = " ".repeat(n - i);
    const stairs = "#".repeat(i);
    console.log(space + stairs);
  }
}

staircase(5);
