const prompt = require("prompt-sync")();
const { verifyValidEntrance } = require("./utils/verficaEntradaValida.js");
const { generateMatrix } = require("./utils/generateMatrix.js");

function exercicio27() {
  
  const matrixM = generateMatrix(6,6);
  
  let vector = [];
  let multiplier = parseInt(prompt('Insira o multiplicador: '));
  if(verifyValidEntrance(multiplier) === false){
    return;
  }

  for(let row = 0; row < 6; row++){
    for(let cell = 0; cell < 6; cell++){
      let result = matrixM[row][cell] * multiplier;
      vector.push(result);
    }
  }
  
  console.log('Matriz M: ', matrixM);
  console.log('Vetor gerado pela multiplicação da Matriz M com o multiplicador inserido.')
  console.log(vector.join(', '));
}
  
module.exports = { exercicio27 };
