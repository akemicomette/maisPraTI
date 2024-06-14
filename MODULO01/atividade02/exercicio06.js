const prompt = require("prompt-sync")();
const { verifyValidEntrance } = require("./utils/verficaEntradaValida.js");

function exercicio06() {
  const numeroSorteado = parseInt(Math.random() * 5 + 1);

  const numeroChutado = parseInt(prompt("Chute um número de 1 a 5. "));
  if (verifyValidEntrance(numeroChutado) === false) {
    return;
  }

  while (numeroChutado != numeroSorteado) {
    if (numeroChutado > 5 || numeroChutado === 0) {
      console.log("Valor inválido! Inserir valor 1 e 5. Reinicie a questão.");
    } else {
      console.log("Você errou, tente novamente.");
    }
    return;
  }
  console.log("Parabéns! Você adivinhou o número!");
}

exercicio06();
