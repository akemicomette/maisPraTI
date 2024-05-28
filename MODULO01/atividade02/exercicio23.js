
function exercicio23(){

  let matrix = [];
  
  for(let i = 0; i < 7; i++ ){
    let line = [];
    for(let j = 0; j < 7; j++){
      if (i == j){
        line.push(1);
      } else {
        line.push(0);
      }
    }
    matrix.push(line);
  }

  function printMatrix(matrix){
    for(let i = 0; i < matrix.length; i++) {
      console.log(matrix[i].join(' '));
    }
  }
  
  console.log('Matriz identidade de ordem 7:');
  printMatrix(matrix);
}

exercicio23();
