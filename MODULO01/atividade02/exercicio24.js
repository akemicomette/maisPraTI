function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function generateMatrix(){
  const matrix = [];
  for (let row = 0; row < 6; row++){
    let line = [];
    for(let column = 0; column < 8; column++){
      line.push(getRandomIntInclusive(-100, 100));
    }
    matrix.push(line);
    line = [];
  }
  return matrix;
}

function printMatrix(matrix){
  console.log('');
  console.log('Matriz inicial:')
  for (let i = 0; i < matrix.length; i++){
    console.log(matrix[i].join(', '));
  }
  console.log('');
}


function countNegatives(matrix){
  const vectorC = [];
  let countNegative = 0;
  for(let i = 0; i < 6; i++){
    for(let j = 0; j < 8; j++){
      if(matrix[i][j] < 0){
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
  
  const matrix = generateMatrix();

  printMatrix(matrix);
  
  countNegatives(matrix);
}

exercicio24();
