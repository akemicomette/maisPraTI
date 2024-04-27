const prompt = require("prompt-sync")();
const { verificaEntradaValida } = require("./verificaEntradaValida.js");

function exercicio11() {
  let numero = parseInt(prompt("Digite o número: "));
  if (verificaEntradaValida(numero) === false) {
    return;
  }

  if (numero % 2 === 0 && numero > 0) {
    console.log("O número digitado é par.");
  } else if (numero % 2 !== 0 && numero > 0) {
    console.log("O número digitado é ímpar.");
  } else {
    console.log("O número digitado não é válido.");
  }
}
module.exports = { exercicio11 };
