function printMatrix(matrix){
  console.log('');
  console.log('Matriz inicial:')
  for (let i = 0; i < matrix.length; i++){
    console.log(matrix[i].join(', '));
  }
  console.log('');
}

module.exports = { printMatrix };
