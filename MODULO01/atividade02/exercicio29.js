const { generateMatrix } = require("./generateMatrix.js");
const { printMatrix } = require("./printMatrix.js");

function exercicio29() {
  const matrixM = generateMatrix(5,5);
  printMatrix(matrixM, 'M');

  let sumRow4 = 0;
  let sumColumn2 = 0;
  let sumPrincipalDiagonal = 0;
  let sumTotal = 0;
  for(let row = 0; row < 5; row++) {
    for(let column = 0; column < 5; column++) {
      if(row === 3){
        sumRow4 += matrixM[row][column];
      }
      if(column === 1){
        sumColumn2 += matrixM[row][column];
      }
      if(row === column){
        sumPrincipalDiagonal += matrixM[row][column];
      }
    sumTotal += matrixM[row][column];
    }
  }
  console.log(`Total da soma dos valores da linha 4 = ${sumRow4}`);
  console.log(`Total da soma dos valores da coluna 2 = ${sumColumn2}`);
  console.log(`Total da soma da Diagonal Principal = ${sumPrincipalDiagonal}`);
  console.log(`Total da soma de todos os elementos: ${sumTotal}`);

}

exercicio29();
