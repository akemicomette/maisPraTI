function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function exercicio24(){
  let matrix = [];
  
  function generateMatrix(){
    for (let row = 0; row < 6; row++){
      let line = [];
      for(let column = 0; column < 8; column++){
        line.push(getRandomIntInclusive(-100, 100));
      }
      matrix.push(line);
    }
  }
  generateMatrix();
  
  console.log('Matriz inicial:')
  console.log('');
  for (let i = 0; i < matrix.length; i++){
    console.log(matrix[i].join(' , '));
  }
  console.log('');
  
  let C = [];
  let countNegative = 0;
  for(let i = 0; i < 6; i++){
    for(let j = 0; j < 8; j++){
      if(matrix[i][j] < 0){
        countNegative++;
      }
    }
    C.push(countNegative);
    countNegative = 0;
  }
  console.log('Vetor C com a quantidade de elementos negativos em cada linha:')
  console.log(C);
}
exercicio24();
