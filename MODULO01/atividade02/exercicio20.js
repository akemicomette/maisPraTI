const prompt = require("prompt-sync")();
const { verifyValidEntrance } = require("./utils/verficaEntradaValida.js");

function exercicio20() {

  const amountWorkers = 80; 
  const workers =[];
  
  for (let i = 0; i < amountWorkers; i++) {
    const registration = prompt(`Insira o número da matrícula do(a) funcionário(a) ${i + 1}: `);
    const name = prompt('Insira o nome completo: ');
    const grossIncome = parseFloat(prompt('Insira o salário bruto: '));
    if(verifyValidEntrance(grossIncome) === false){
      return;
    }
    const inssDeduction = parseFloat(grossIncome * 0.12);
    const netSalary = parseFloat(grossIncome - inssDeduction);
    
    const registry = {
      matricula: registration,
      nome : name.toLocaleUpperCase(),
      SalarioBruto: grossIncome.toFixed(2),
      DeducaoINSS: inssDeduction.toFixed(2),
      SalarioLiquido: netSalary.toFixed(2),
    };
    console.log('');
    workers.push(registry);
  }

  console.log(workers);
}

module.exports = { exercicio20 };
