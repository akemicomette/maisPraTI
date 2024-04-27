const prompt = require("prompt-sync")();
const { verificaEntradaValida } = require("./verificaEntradaValida.js");

function triangulo() {
  let lado1 = parseInt(prompt("Insira o comprimento do primeiro lado: "));
  if (verificaEntradaValida(lado1) === false) {
    return;
  }
  let lado2 = parseInt(prompt("Insira o comprimento do segundo lado: "));
  if (verificaEntradaValida(lado2) === false) {
    return;
  }
  let lado3 = parseInt(prompt("Insira o comprimento do terceiro lado: "));
  if (verificaEntradaValida(lado3) === false) {
    return;
  }

  if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
    if (
      (lado1 == lado2 && lado1 != lado3) ||
      (lado1 == lado3 && lado1 != lado2) ||
      (lado2 == lado3 && lado2 != lado1)
    ) {
      console.log("Os números digitados formam um triângulo isósceles.");
    } else if (lado1 != lado2 && lado2 != lado3) {
      console.log("Os números digitados formam um triângulo escaleno.");
    } else if (lado1 == lado2 && lado2 == lado3) {
      console.log("Os números digitados formam um triângulo equilátero.");
    }
  } else {
    console.log("Os valores inseridos não formam um triângulo.");
  }
}

module.exports = { exercicio6: triangulo };
