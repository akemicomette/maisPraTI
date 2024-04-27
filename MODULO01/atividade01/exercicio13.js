const prompt = require("prompt-sync")();
const { verificaEntradaValida } = require("./verificaEntradaValida.js");

function calculoTabuada(valor) {
  console.log(`Tabuada do número ${valor}`);
  for (let contador = 1; contador <= valor; contador++) {
    const resultado = valor * contador;
    console.log(`${contador} * ${valor} = ${resultado}`);
  }
}

function mostrarTabuada(valor) {
  const valor1 = prompt("Digite o primeiro valor: ");
  if (verificaEntradaValida(valor1) === false) {
    return;
  }
  const valor2 = prompt("Digite o segundo valor: ");
  if (verificaEntradaValida(valor2) === false) {
    return;
  }
  const valor3 = prompt("Digite o terceiro valor: ");
  if (verificaEntradaValida(valor3) === false) {
    return;
  }
  const valor4 = prompt("Digite o quarto valor: ");
  if (verificaEntradaValida(valor4) === false) {
    return;
  }
  const valor5 = prompt("Digite o quinto valor: ");
  if (verificaEntradaValida(valor5) === false) {
    return;
  }

  calculoTabuada(valor1);
  calculoTabuada(valor2);
  calculoTabuada(valor3);
  calculoTabuada(valor4);
  calculoTabuada(valor5);
}

module.exports = { exercicio13: mostrarTabuada };
