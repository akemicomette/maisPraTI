const prompt = require("prompt-sync")();
const { generateMatrix } = require("./utils/generateMatrix.js");
const { printMatrix } = require("./utils/printMatrix.js");

function exercicio31() {
  const nRow = 30;
  const nColumn = 30;
  const matrixV = generateMatrix(nRow, nColumn);
  printMatrix(matrixV, 'V');

  const A = parseInt(prompt('Digite um número para ser comparado com a Matriz V: '))
  if(isNaN(A)){
    console.log('Erro! São aceitos somente números inteiros. Reinicie a questão.')
    return;
  }

  let count = 0;
  const matrixResult = [];
  for(let row = 0; row < nRow; row++){
    for(let column = 0; column < nColumn; column++)
      if(A === matrixV[row][column]){
        count++;
      } else {
        matrixResult.push(matrixV[row][column])
      }
  }
  console.log('');
  console.log(`Existem ${count} valores iguais ao valor inserido na matriz V.`);
  console.log('');
  console.log('Abaixo a Matriz X que contem todos os elementos diferentes do número inserido:');
  console.log(matrixResult);
}

exercicio31();
