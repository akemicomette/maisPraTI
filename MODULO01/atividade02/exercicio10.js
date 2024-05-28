const prompt = require("prompt-sync")();
const { verifyValidEntrance } = require("./verficaEntradaValida.js");

function exercicio10(){

  let shouldContinue = "s";
  let numbers = [];
  let sum = 0;
  
  while(shouldContinue === "s"){
    console.log("Qual o novo número que deseja inserir?");
    var newNumber = prompt("> ");
    if(verifyValidEntrance(newNumber) === false){
      return;
    }
    
    numbers.push(parseFloat(newNumber));
    
    
    let isValidEntry = false;
    while (isValidEntry === false) {
      console.log("Deseja continuar? \ns - sim \nn - não. ");
      shouldContinue = prompt("> ");
      
      shouldContinue = shouldContinue.toLowerCase();
      if (shouldContinue != "s" && shouldContinue != "n") {
        isValidEntry = false;
        console.log("Por favor digite uma das opções dadas.");
      } else {
        isValidEntry = true;
      }
    }
    
  }
  
  let pair = 0;
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
    if(numbers[i]%2 === 0){
      pair++;
    }
  }
  
  let min = Math.min(...numbers);
  
  let average = sum/numbers.length;
  
  
  console.log(`O total da soma aproximada dos números inseridos é: ${sum.toFixed(2)}.`);
  console.log(`O menor valor digitado foi: ${min}.`);
  console.log(`A média de todos os valores inseridos é: ${average}.`);
  console.log(`A quantidade de valores pares inseridos foi: ${pair}.`);
}

exercicio10();