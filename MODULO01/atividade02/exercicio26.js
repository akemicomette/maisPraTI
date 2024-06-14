const { generateMatrix } = require("./utils/generateMatrix.js");
const { printMatrix } = require("./utils/printMatrix.js");

function exercicio26() {

  const rowsCountMatrixA = 3;
  const columnsCountMatrixA = 5;
  const rowsCountMatrixB = 5;
  const columnsCountMatrixB = 3;
  
  if(columnsCountMatrixA != rowsCountMatrixB) {
    console.log('Não é possivel fazer a multiplicação de matrizes, pois o número de colunas da matriz A é diferente do número de linhas da matriz B.')
  }
  
  const matrixA = generateMatrix(rowsCountMatrixA, columnsCountMatrixA);
  printMatrix(matrixA, 'A');

  const matrixB = generateMatrix(rowsCountMatrixB, columnsCountMatrixB);
  printMatrix(matrixB, 'B');

  const resultDimensions = {resultRows: rowsCountMatrixA, resultColumns: columnsCountMatrixB};
  const result = Array.from({ length: resultDimensions.resultRows }, () => ([]));

  for (let row = 0; row < resultDimensions.resultRows; row++) {
    for (let column = 0; column < resultDimensions.resultColumns; column++) {
      let sum = 0;
      for (let i = 0; i < columnsCountMatrixA; i++) {
        sum += matrixA[row][i] * matrixB[i][column];
      }
      result[row][column] = sum;
    } 
  }
  console.log('Matriz produto é igual a:')
  console.log(result);

}

exercicio26();