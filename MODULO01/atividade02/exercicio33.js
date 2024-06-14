const { generateMatrix } = require("./utils/generateMatrix.js");
const { printMatrix } = require("./utils/printMatrix.js");

function exercicio33() {
  const matrix = generateMatrix(3,3);
  printMatrix(matrix, 'inicial');

  const changedDiagonal = [];
  let sum = 0;
  
  for(let row = 0; row < 3; row++) {
    for(let column = 0; column < 3; column++) {
      if( row + column == 3-1){
        sum += matrix[row][column];
      }
    }
  }

  let average = sum/3;
  console.log(`Média dos elementos da Diagonal Secundária = ${average.toFixed(2)}`);
  let result = 0;

  for(let row = 0; row < 3; row++) {
    for(let column = 0; column < 3; column++) {
        if(row === column){
          result = matrix[row][column] * average;
          changedDiagonal.push(result.toFixed(2));
        }
      }
    }
  console.log('\nElementos da Diagonal Principal multiplicados pela média dos elesmentos da Diagonal Secundária:')
  console.log(changedDiagonal);
}

exercicio33();
