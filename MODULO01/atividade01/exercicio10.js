const prompt = require("prompt-sync")();
const { verificaEntradaValida } = require("./verificaEntradaValida.js");

function exercicio10() {
  let numero = parseInt(prompt("Digite o algoritmo: "));
  if (verificaEntradaValida(numero) === false) {
    return;
  }

  for (let contador = 0; contador <= 10; contador++) {
    console.log(numero);
  }
}

module.exports = { exercicio10 };
