const round5 = (x) => Math.ceil(x / 5) * 5;

const gradingStudents = (grades) =>
  grades.map((n) => {
    const roundedUp = round5(n);
    const diff = roundedUp - n;

    if (diff < 3 && roundedUp >= 40) return roundedUp;

    return n;
  });

console.log(gradingStudents([73, 67, 38, 33]));

// 75, 67, 40, 33
