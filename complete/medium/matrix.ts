type array2D = number[][];

export class Matrix {
  rows: array2D;
  columns: array2D;

  constructor(s: string) {
    this.rows = s
      .split("\n")
      .map((row) => row.split(" ").map((s) => Number(s)));

    this.columns = [];

    this.rows.forEach((_, i) => {
      this.columns.push(this.rows.map((row) => row[i]));
    });
  }
}
