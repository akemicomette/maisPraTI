const prompt = require("prompt-sync")();
const { verifyValidEntrance } = require("./utils/verficaEntradaValida.js");

function exercicio09(){

  let shouldContinue = "s";
  let mascWage = 0;
  let femWage = 0;
  let nBinWage = 0;
    
  while (shouldContinue === "s") {
    console.log("Para inserir as informações dx colaboradxr, por favor digite: \n1 - masculino \n2 - feminino \n3 - não-binário: ");
    let sex = parseInt(prompt('> '));
    if (verifyValidEntrance(sex) === false || sex > 3) {
      console.log("Erro! Digite 1, 2 ou 3 para inserir as informações dos colaboradorxs. ");
      return;
    }
      
    console.log("Insira o valor do salário do colaborador, com até duas casas decimais: ")
    let wage = parseFloat(prompt("> "));
    if (verifyValidEntrance(wage) === false) {
      return;
    }
      
    switch (sex) {
      case 1:
        mascWage += wage;
        break;
      case 2:
        femWage += wage;
        break;
      case 3:
        nBinWage += wage;
        break;
      default:
        console.log("Inválido! Digite 1, 2 ou 3 para inserir as informações dos colaboradorxs. ");
    }
            
    let isValidEntry = false;
    while (isValidEntry === false) {
      console.log("Deseja continuar? \ns - sim \nn - não. ");
      shouldContinue = prompt("> ");
             
      shouldContinue = shouldContinue.toLowerCase();
        if (shouldContinue != "s" && shouldContinue != "n") {
          isValidEntry = false;
          console.log("Por favor digite uma das opções dadas acima");
        } else {
          isValidEntry = true;
        }
    }
  }

  console.log(`O total da soma dos salários pagos aos homens ${mascWage.toFixed(2)}`);
  console.log(`O total da soma dos salários pagos as mulheres ${femWage.toFixed(2)}`);
  console.log(`O total da soma dos salários pagos aos não binários ${nBinWage.toFixed(2)}`);
}

exercicio09();
