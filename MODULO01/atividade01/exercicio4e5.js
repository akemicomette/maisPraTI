const prompt = require("prompt-sync")();
const { verificaEntradaValida } = require("./verificaEntradaValida.js");

function calculoNotaFinal() {
  const nota1 = parseFloat(prompt("Insira a primeira nota: "));
  if (verificaEntradaValida(nota1) === false) {
    return;
  }

  const nota2 = parseFloat(prompt("Insira a segunda nota: "));
  if (verificaEntradaValida(nota1) === false) {
    return;
  }

  const notaFinal = (nota1 + nota2) / 2;
  if (notaFinal >= 6) {
    console.log(`Sua média é ${notaFinal}. PARABÉNS! Você foi aprovado(a).`);
  } else {
    console.log("Você foi REPROVADO! Estude mais.");
  }
}

module.exports = { exercicio4e5: calculoNotaFinal };
