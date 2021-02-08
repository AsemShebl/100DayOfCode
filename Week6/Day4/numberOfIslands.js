var numOfIslands = function (grid) {
  const search = (row, col, grid) => {
    if (
      row < 0 ||
      col < 0 ||
      row > grid.length - 1 ||
      col > grid[row].length - 1 ||
      grid[row][col] === "0"
    ) {
      return;
    }
    grid[row][col] = "0";
    search(row - 1, col, grid);
    search(row, col - 1, grid);
    search(row + 1, col, grid);
    search(row, col + 1, grid);
  };
  let count = 0;
  grid.forEach((row, index) => {
    row.forEach((value, i) => {
      if (value === "1") {
        search(index, i, grid);
        count++;
      }
    });
  });
  return count;
};
console.log(
  numOfIslands([
    ["1", "1", "1"],
    ["1", "1", "0"],
    ["1", "1", "1"],
    ["0", "1", "0"],
    ["1", "1", "1"],
  ])
);

console.log(
  numOfIslands([
    ["1", "1", "1"],
    ["0", "0", "0"],
    ["1", "1", "1"],
    ["0", "0", "0"],
    ["1", "1", "1"],
  ])
);
