const prompt = require("prompt-sync")();
const { verifyValidEntrance } = require("./utils/verficaEntradaValida.js");

function exercicio03() {
  const distance = parseInt(
    prompt("Qual a distância que deseja percorrer em km? ")
  );
  if (verifyValidEntrance(distance) === false) {
    return;
  }

  if (distance <= 200) {
    ticketPrice = distance * 0.5;
    console.log(`O preço da passagem é de R$ ${ticketPrice}.`);
  } else {
    ticketPrice = distance * 0.45;
    console.log(`O preço da passagem é de R$ ${ticketPrice}.`);
  }
}

module.exports = { exercicio03 };
