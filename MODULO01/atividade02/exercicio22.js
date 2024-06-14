const prompt = require("prompt-sync")();
const { verifyValidEntrance } = require("./utils/verficaEntradaValida.js");

function exercicio22(){

  let shouldContinue = "s";
  let numberOfPeople = 0;
  let biggerSalary = 0;
  let lowIncome = 0;
  let medianWages;
  let medianOfChildren;
  let percentage;
  
  while (shouldContinue === "s"){
    console.log("Insira o salário em reais:");
    let salary = parseFloat(prompt(" >  "));
    if(verifyValidEntrance(salary) === false) {
      return;
    }
    console.log("Insira a quantidade de filhos(as):");
    let numberOfChildren = parseInt(prompt(" >  "));
    if(verifyValidEntrance(numberOfChildren) === false) {
      return;
    }

    if(biggerSalary < salary) {
      biggerSalary = salary;
    }
    
    numberOfPeople++;
    
    if(salary <= 350){
      lowIncome++;
    }
    percentage = (lowIncome * 100) / numberOfPeople;
    
    salary += salary;
    numberOfChildren += numberOfChildren;
    medianWages = salary / numberOfPeople;
    medianOfChildren = numberOfChildren / numberOfPeople;
    
    
    let isValidEntry = false;
    while (isValidEntry === false) {
      console.log('');
      console.log("Deseja continuar? \ns - sim \nn - não. ");
      shouldContinue = prompt("> ");
      
      shouldContinue = shouldContinue.toLowerCase();
      if (shouldContinue != "s" && shouldContinue != "n") {
        isValidEntry = false;
        console.log("Por favor digite uma das opções dadas acima");
      } else {
        isValidEntry = true;
        console.log('');
      }
    }
  }
  console.log(`A média aritimética do salário da população é ${medianWages.toFixed(2)}, com ${numberOfPeople} inserções no sistema.`);
  console.log(`A média aritimética de filhos ${medianOfChildren.toFixed(2)}, com ${numberOfPeople} inserções no sistema.`);
  console.log(`O maior salário digitado no sistema foi R$ ${biggerSalary.toFixed(2)}.`);
  console.log(`O percentual de pessoas com salário até R$ 350,00 é de ${percentage.toFixed(2)}%.`)
}
  
exercicio22();
