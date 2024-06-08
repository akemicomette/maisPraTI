
function exercicio23(){

  let matrix = [];
  
  for(let row = 0; row < 7; row++ ){
    let line = [];
    for(let column = 0; column < 7; column++){
      if (row == column){
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
