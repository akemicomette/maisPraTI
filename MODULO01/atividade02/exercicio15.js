const prompt = require("prompt-sync")();
const { verifyValidEntrance } = require("./verficaEntradaValida.js");

function exercicio15(){

  const numberList = [];
  const pairList = [];
  const registerPairs = [];
  
  for(let i = 0; i < 10; i++){
    console.log('Digite o número que deseja inserir:');
    let number = parseInt(prompt('> '));
    
    if(verifyValidEntrance(number) === false){
      return;
    }
    
    numberList.push(number);
    
    if(number % 2 === 0){
      registerPairs.push(numberList.indexOf(number));
      pairList.push(number);
    }
  } 
  
  console.log(`O vetor com todos os números lidos:`)
  console.log(numberList);
  
  console.log('Os números inteiros pares digitados foram:');
  console.log(pairList);
  
  console.log('E seus respectivos indices foram:');
  console.log(registerPairs);
}

exercicio15();
