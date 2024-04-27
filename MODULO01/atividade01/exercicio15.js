const prompt = require("prompt-sync")();
const { verificaEntradaValida } = require("./verificaEntradaValida.js");

function exercicio15() {
  let numeroDecimal = parseFloat(prompt("Insira o primeiro número: "));
  if (verificaEntradaValida(numeroDecimal) === false) {
    return;
  }
  let peso = parseFloat(prompt("Insira o primeiro peso: "));
  if (verificaEntradaValida(peso) === false) {
    return;
  }
  let somaNumero = numeroDecimal * peso;
  let somaPeso = peso;

  while (numeroDecimal !== 0 && peso !== 0) {
    numeroDecimal = parseFloat(
      prompt("Insira o próximo número ou insira zero para obter o resultado: ")
    );
    if (verificaEntradaValida(numeroDecimal) === false) {
      return;
    }

    if (numeroDecimal !== 0) {
      peso = parseFloat(
        prompt("Insira o próximo peso ou insira zero para obter o resultado: ")
      );
      if (verificaEntradaValida(peso) === false) {
        return;
      }
      somaNumero += numeroDecimal * peso;
      somaPeso += peso;
    }
  }

  resultado = somaNumero / somaPeso;
  console.log(
    `A média ponderada dos valores passados é: ${resultado.toFixed(2)}`
  );
}

module.exports = { exercicio15 };
