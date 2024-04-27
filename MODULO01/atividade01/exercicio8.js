const prompt = require("prompt-sync")();
const { verificaEntradaValida } = require("./verificaEntradaValida.js");

function ordenarNumeros() {
  const primeiroNumero = parseFloat(prompt("Insira o primeiro valor: "));
  if (verificaEntradaValida(primeiroNumero) === false) {
    return;
  }
  const segundoNumero = parseFloat(prompt("Insira o segundo valor: "));
  if (verificaEntradaValida(segundoNumero) === false) {
    return;
  }

  if (primeiroNumero < segundoNumero) {
    console.log(
      `A ordem crescente dos números inseridos é: ${primeiroNumero} e ${segundoNumero}.`
    );
  } else {
    console.log(
      `A ordem crescente dos números inseridos é: ${segundoNumero} e ${primeiroNumero}.`
    );
  }
}

module.exports = { exercicio8: ordenarNumeros };
