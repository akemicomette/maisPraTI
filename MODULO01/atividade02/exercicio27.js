const prompt = require("prompt-sync")();
const { verifyValidEntrance } = require("./verficaEntradaValida.js");

function exercicio27(){
  
  let count = 1;
  let matrixM = [];
  
  for(let row = 0; row < 2; row++) {
    const line = [];
    for(let column = 0; column < 2; column++) {
      let number = parseFloat(prompt(`Insira o ${count} número da matriz M: `));
      if(verifyValidEntrance(number) === false) {
        return;
      }
      line.push(number);
      count++;
    }
    matrixM.push(line);
  }

  let vector = [];
  let multiplier = parseInt(prompt('Insira o multiplicador: '));
  for(let row = 0; row < 2; row++){
    for(let cell = 0; cell < 2; cell++){
      let result = matrixM[row][cell] * multiplier;
      vector.push(result);
    }
  }
 
  console.log('vetor é: ', vector);
  console.log('matriz M: ', matrixM);
    
}
  
 exercicio27();