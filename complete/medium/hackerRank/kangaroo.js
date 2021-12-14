const isEven = (n) => n % 2 === 0;

function kangaroo(x1, v1, x2, v2) {
  if (isEven(v1) && isEven(v2) && isEven(x1) !== isEven(x2)) return "NO";

  let k1Position = x1;
  let k2Position = x2;

  let isInitialX1GreaterThanX2 = x1 > x2;

  let initialPositionDifference = x2 - x1;

  do {
    k1Position += v1;
    k2Position += v2;

    const newPositionDifference = k2Position - k1Position;

    const areTheyFurtherApart =
      initialPositionDifference < newPositionDifference;

    const didOnePassedAnother =
      isInitialX1GreaterThanX2 !== k1Position > k2Position;

    if (areTheyFurtherApart || didOnePassedAnother) return "NO";
  } while (k1Position !== k2Position);

  return "YES";
}
