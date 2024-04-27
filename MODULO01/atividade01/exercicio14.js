const prompt = require("prompt-sync")();
const { verificaEntradaValida } = require("./verificaEntradaValida.js");

function media() {
  let contador = 0;
  let soma = 0;
  let n = parseFloat(prompt("Insira o primeiro valor: "));
  if (verificaEntradaValida(n) === false) {
    return;
  }
  while (n != 0) {
    soma += n;
    contador++;
    n = parseFloat(
      prompt("Insira o próximo valor ou insira zero para obter o resultado: ")
    );
    if (verificaEntradaValida(n) === false) {
      return;
    }
  }
  resultado = soma / contador;
  console.log(`A média aritimética dos valores passados é: ${resultado}.`);
}

module.exports = { exercicio14: media };
