const prompt = require("prompt-sync")();
const { verifyValidEntrance } = require("./utils/verficaEntradaValida.js");

function exercicio07() {
  console.log('Qual carro deseja alugar? Digite 1 - carro popular ou 2 - carro luxo.')
  const chooseCar = parseInt(prompt("> "));
  if (verifyValidEntrance(chooseCar) === false) {
    return;
  }
  const days = parseInt(prompt("Quantos dias de aluguel?  "));
  if (verifyValidEntrance(days) === false) {
    return;
  }
  const km = parseInt(prompt("Quantos km foram rodados?  "));
  if (verifyValidEntrance(km) === false) {
    return;
  }
  let result = 0;

  switch (chooseCar) {
    case 1:
      const economyRental = days * 90;
      const economyDistance = km <= 100 ? km * 0.2 : km * 0.1;
      const economyCalculator = economyRental + economyDistance;
      result = economyCalculator;
      break;
    case 2:
      const luxuryRental = days * 150;
      const luxuryDistance = km <= 200 ? km * 0.3 : km * 0.25;
      const luxuryCalculator = luxuryRental + luxuryDistance;
      result = luxuryCalculator;
      break;
  }
  console.log(
    `O valor total do aluguel e kilometragem percorrida é de R$ ${result} reais`
  );
}

module.exports = { exercicio07 };
