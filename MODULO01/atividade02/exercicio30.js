const { generateMatrix } = require("./generateMatrix.js");
const { printMatrix } = require("./printMatrix.js");

function exercicio30() {
  const matrixM = generateMatrix(5,5);
  printMatrix(matrixM, 'M');

  const SL = [];
  const SC = [];
  for(let row = 0; row < 5; row++) {
    let sumL = 0;
    for(let column = 0; column < 5; column++) {
      sumL += matrixM[row][column];
    }
    SL.push(sumL);
  }
  console.log('Vetor soma de linhas:');
  console.log(SL);

  for(let column = 0; column < 5; column++) {
    let sumC = 0;
    for(let row = 0; row < 5; row++){
      sumC += matrixM[row][column];
    }
    SC.push(sumC);
  }
  console.log('Vetor soma de colunas:');
  console.log(SC);
}

exercicio30();
