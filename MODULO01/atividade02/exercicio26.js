function exercicio26(){

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  const matrixA = [];
  const matrixB = [];
  const rowsCountMatrixA = 3;
  const columnsCountMatrixA = 5;
  const rowsCountMatrixB = 5;
  const columnsCountMatrixB = 3;
  
  if(columnsCountMatrixA != rowsCountMatrixB) {
    console.log('Não é possivel fazer a multiplicação de matrizes, pois o número de colunas da matriz A é diferente do número de linhas da matriz B.')
  }
  
  for(let row = 0; row < rowsCountMatrixA; row++){
  let line =[]
  for(let column = 0; column < columnsCountMatrixA; column++){
    line.push(getRandomArbitrary(-10,10));
  }
  matrixA.push(line);
  line = [];
}
console.log('Matriz A')
console.log(matrixA)
console.log('');

for(let row = 0; row < rowsCountMatrixB; row++){
  let line =[]
  for(let column = 0; column < columnsCountMatrixB; column++){
    line.push(getRandomArbitrary(-10,10));
  }
  matrixB.push(line);
  line = [];
}
console.log('Matriz B');
console.log(matrixB);


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

console.log(resultDimensions);
console.log(result);

}

exercicio26();