// Vòng lặp lổng nhau - Nested loop

let myArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];

for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < myArray[i].length; j++) {
    console.log(myArray[i][j]);
  }
}
