const { generateMatrix } = require("./generateMatrix.js");
const { printMatrix } = require("./printMatrix.js");

function exercicio32() {
  const nRow = 12;
  const nColumn = 13;
  const matrixM = generateMatrix(nRow,nColumn);
  printMatrix(matrixM , 'M');

  const matrixMd = [];
  for(let row = 0; row < nRow; row++){
    let max = Math.abs(matrixM[row][0]);
    for(let column = 1; column < nColumn; column++){
      let element = Math.abs(matrixM[row][column]);
      if(element > max){
        max = element;
      }
    }
  
  let rowMd = [];
  for(let column = 0; column < nColumn; column++) {
    rowMd.push((matrixM[row][column]/max).toFixed(2));
  }
  matrixMd.push(rowMd);
  }
  printMatrix(matrixMd, 'Resultante')
}

exercicio32();