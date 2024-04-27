const prompt = require("prompt-sync")();
const { verificaEntradaValida } = require("./verificaEntradaValida.js");

function exercicio9() {
  let codigoDeOrigem = parseInt(prompt("Informe o código de origem: "));
  if (verificaEntradaValida(codigoDeOrigem) === false) {
    return;
  }
  let regiao;

  switch (codigoDeOrigem) {
    case 1:
      regiao = "Sul.";
      break;
    case 2:
      regiao = "Norte.";
      break;
    case 3:
      regiao = "Leste.";
      break;
    case 4:
      regiao = "Oeste.";
      break;
    case 5:
    case 6:
      regiao = "Nordeste.";
      break;
    case 7:
    case 8:
    case 9:
      regiao = "Sudeste.";
      break;
    default:
      if (codigoDeOrigem >= 10 && codigoDeOrigem <= 20) {
        regiao = "Centro-Oeste.";
      } else if (codigoDeOrigem >= 25 && codigoDeOrigem <= 50) {
        regiao = "Nordeste.";
      }
  }

  if (codigoDeOrigem <= 50) {
    console.log("Código de origem da região:", regiao);
  } else {
    console.log("Produto importado.");
  }
}

module.exports = { exercicio9 };
