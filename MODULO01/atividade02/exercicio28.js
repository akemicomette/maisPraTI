const { generateMatrix } = require("./utils/generateMatrix.js");
const { printMatrix } = require("./utils/printMatrix.js");

function exercicio28() {

  const matrix = generateMatrix(10,10);
  printMatrix(matrix, 'M');

  let sumAbove = 0;
  console.log('Valores acima da DP (diagonal principal):');
  for(let row = 0; row < 10; row++){
    for(let column = 0; column < 10; column++){
      if(column === (row + 1)){
        console.log('> ' + matrix[row][column]);
        sumAbove += matrix[row][column];
      }
    }
  }
  console.log('Soma dos valores acima da DP = ' + sumAbove);
  console.log('');

  let sumBelow = 0;
  console.log('Valores abaixo da DP (diagonal principal):');
  for(let row = 0; row < 10; row++){
    for(let column = 0; column < 10; column++){
      if(row === (column + 1)){
        console.log('> ' + matrix[row][column]);
        sumBelow += matrix[row][column];
      }
    }
  }
  console.log(`Soma dos valores abaixo da DP =  ${sumBelow}.`)
  
}

module.exports = { exercicio28 };