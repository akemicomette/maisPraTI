function printMatrix(matrix,name){
  console.log(`\nMatriz ${name}:`);
  for (let i = 0; i < matrix.length; i++){
    console.log(matrix[i].join(', '));
  }
  console.log('');
}

module.exports = { printMatrix };
