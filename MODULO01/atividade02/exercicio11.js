const prompt = require("prompt-sync")();
const { verifyValidEntrance } = require("./utils/verficaEntradaValida.js");

function exercicio11(){

  const firstNumber = parseInt(prompt("Digite o primeiro termo da progressão artimética: "));
  if(verifyValidEntrance(firstNumber) === false){
    return;
  }
  const fixedNumber = parseInt(prompt("Digite a razão da PA: "));
  if(verifyValidEntrance(fixedNumber) === false){
    return;
  }
  let pa = [];
  for(let i = 1; i <= 10; i++){
    let result = firstNumber + (i - 1)*fixedNumber;
    pa.push(result);
    
    var sum = (i/2) * (2*firstNumber + ((i - 1)*fixedNumber));
  }
  console.log(`O valor total da soma de todos os elementos é: ${sum}`);
  console.log(`A Progressão Aritmética gerada é: ${pa}`);
}

module.exports = { exercicio11 };
  