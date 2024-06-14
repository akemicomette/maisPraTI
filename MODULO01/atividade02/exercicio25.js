const { generateMatrix } = require("./utils/generateMatrix.js");
const { printMatrix } = require("./utils/printMatrix.js");

function exercicio25() {
  const nRow = 15;
  const nColumn = 20;
  const matrix = generateMatrix(nRow,nColumn);
  printMatrix(matrix, 'M');

  let sumColumns = [];

  for(let column = 0; column < nColumn; column++){
    let sum = 0;
    for(let row = 0; row < nRow; row++){
      sum += matrix[row][column];
    }
    sumColumns.push(sum);
  }
  console.log(`O resultado da soma de cada uma das colunas é respectivamente: `);
  console.log(`${sumColumns.join(', ')}`);
}

module.exports = { exercicio25 };
