const prompt = require("prompt-sync")();
const { verificaEntradaValida } = require("./verificaEntradaValida.js");

function exercicio3() {
  const numero1 = parseInt(prompt("Insira aqui o primeiro número inteiro: "));
  if (verificaEntradaValida(numero1) === false) {
    return;
  }

  const numero2 = parseInt(prompt("Insira aqui o segundo número inteiro: "));
  if (verificaEntradaValida(numero2) === false) {
    return;
  }

  const numero3 = parseInt(prompt("Insira aqui o terceiro número inteiro: "));
  if (verificaEntradaValida(numero3) === false) {
    return;
  }

  let numero4 = parseInt(prompt("Insira aqui o quarto número inteiro: "));
  if (verificaEntradaValida(numero4) === false) {
    return;
  }

  const resultadoOp1 = numero1 + 25;
  console.log(`A soma do primeiro número com 25 resulta em: ${resultadoOp1}.`);

  const resultadoOp2 = numero2 * 3;
  console.log(`O resultado do segundo número triplicado é: ${resultadoOp2}.`);

  const resultadoOp3 = (numero3 * 12) / 100;
  console.log(`12% do terceiro número inserido é: ${resultadoOp3}.`);

  numero4 = numero1 + numero2 + numero3;
  console.log(`O resultado da soma dos três primeiros números é: ${numero4}.`);
}

module.exports = { exercicio3 };
