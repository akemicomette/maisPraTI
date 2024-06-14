const { generateMatrix } = require("./utils/generateMatrix.js");
const { printMatrix } = require("./utils/printMatrix.js");

function exercicio34() {
  const nRow = 50;
  const nColumn = 50;

  const matrixInitial = generateMatrix(nRow,nColumn);
  printMatrix(matrixInitial, 'inicial');

  const matrixFinal = [];
  
  for(let row = 0; row < nRow; row++) {
    let multiplier = matrixInitial[row][row];
    let result = [];

    for(let column = 0; column < nColumn; column++) {
        result.push(matrixInitial[row][column] * multiplier);
        }
      matrixFinal.push(result);
    }
  printMatrix(matrixFinal, 'Final');

}

exercicio34();