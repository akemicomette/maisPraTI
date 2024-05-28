const prompt = require("prompt-sync")();
const { verifyValidEntrance } = require("./verficaEntradaValida.js");

function exercicio04() {
  const side1 = parseInt(prompt("Insira o comprimento do primeiro lado "));
  if (verifyValidEntrance(side1) === false) {
    return;
  }
  const side2 = parseInt(prompt("Insira o valor do segundo lado "));
  if (verifyValidEntrance(side2) === false) {
    return;
  }
  const side3 = parseInt(prompt("Insira o valor do terceiro lado "));
  if (verifyValidEntrance(side3) === false) {
    return;
  }

  if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
    console.log("Os valores informados formam um triângulo.");
  } else {
    console.log("Valores informados não formam um triângulo.");
  }
}

exercicio04();
