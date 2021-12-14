function meli(input) {
  const allAllowed4digits = [];
  const MIN_N = 1000;
  const MAX_N = 9999;

  for (let i = MIN_N; i <= MAX_N; i++) {
    let allowedNumbers = [];

    i.toString()
      .split("")
      .forEach((x) => {
        if (x <= input) {
          allowedNumbers.push(x);
        }
      });

    if (allowedNumbers.length == 4) {
      allAllowed4digits.push(i.toString().split(""));
    }
  }

  const numbersThatSums21 = allAllowed4digits.filter((n) => {
    const sum = n.reduce((acc, n) => acc + Number(n), 0);
    if (sum == 21) {
      return sum;
    }
  });

  if (numbersThatSums21.length < 1) {
    console.log(null);
  }

  numbersThatSums21.forEach((n) => {
    console.log(n.join(""));
  });
}

meli(6);