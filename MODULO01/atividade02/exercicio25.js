const prompt = require("prompt-sync")();

//

// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }

function exercicio25() {
  let matrix = [];
  let count = 1;
  let nRow = 15;
  let nColumn = 20;
  
  for(let row = 0; row < nRow; row++){
    let line = [];
    for(let column = 0; column < nColumn; column++){
      let realNumber = parseFloat(prompt(`Insira o número ${count}º da matriz: `));
      // let realNumber = parseFloat(getRandomArbitrary(-100, 100).toFixed(2));
      line.push(realNumber);
      count++;
    }
    matrix.push(line);
  }

  console.log('');
  console.log('Matriz inicial:')
  for (let i = 0; i < matrix.length; i++){
    console.log(matrix[i].join(', '));
  }
  console.log('');

  let sumColumns = [];

  for(let column = 0; column < nColumn; column++){
    let sum = 0;
    for(let row = 0; row < nRow; row++){
      sum += matrix[row][column];
    }
    sumColumns.push(sum.toFixed(2));
  }
  console.log(`O resultado da soma de cada uma das colunas é respectivamente: `);
  console.log(`${sumColumns.join(', ')}`);
}

exercicio25();