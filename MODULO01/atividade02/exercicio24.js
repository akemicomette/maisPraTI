const { generateMatrix } = require("./utils/generateMatrix.js");
const { printMatrix } = require("./utils/printMatrix.js");


function countNegatives(matrix){
  const vectorC = [];
  let countNegative = 0;
  for(let row = 0; row < 6; row++){
    for(let column = 0; column < 8; column++){
      if(matrix[row][column] < 0){
        countNegative++;
      }
    }
    vectorC.push(countNegative);
    countNegative = 0;
  }
  console.log('Vetor C com a quantidade de elementos negativos em cada linha:')
  console.log(vectorC);
}

function exercicio24(){
  
  const matrix = generateMatrix(6,8);

  printMatrix(matrix, 'M');
  
  countNegatives(matrix);
}

module.exports = { exercicio24 };
