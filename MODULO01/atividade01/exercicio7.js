const prompt = require("prompt-sync")();
const { verificaEntradaValida } = require("./verificaEntradaValida.js");

function venda() {
  const menorDuzia = 0.3;
  const maiorDuzia = 0.25;
  const macasCompradas = parseInt(prompt("Quantas maçãs foram compradas? "));
  if (verificaEntradaValida(macasCompradas) === false) {
    return;
  }

  if (macasCompradas >= 12) {
    valorTotal = macasCompradas * maiorDuzia;
    console.log(`O valor total a ser pago é: ${valorTotal.toFixed(2)} reais.`);
  } else if (macasCompradas < 12 && macasCompradas > 0) {
    valorTotal = macasCompradas * menorDuzia;
    console.log(`O valor total a ser pago é: ${valorTotal.toFixed(2)} reais.`);
  } else {
    console.log("Número negativo inserido, reinicie a questão.");
  }
}

module.exports = { exercicio7: venda };
