const prompt = require("prompt-sync")();
const { verificaEntradaValida } = require("./verificaEntradaValida.js");

function calculoPorcentagem(tipoVoto, numeroVotos, totalEleitores) {
  const porcentagemVotos = (numeroVotos / totalEleitores) * 100;
  console.log(`A porcentagem de votos ${tipoVoto} é: ${porcentagemVotos}%.`);
}

function mostrarPorcentagem() {
  const numeroEleitores = parseInt(
    prompt("Insira o número de eleitores do Município: ")
  );
  if (verificaEntradaValida(numeroEleitores) === false) {
    return;
  }

  const votosBrancos = parseInt(
    prompt("Insira a quantidade de votos brancos: ")
  );
  if (verificaEntradaValida(votosBrancos) === false) {
    return;
  }

  const votosNulos = parseInt(prompt("Insira a quantidade de votos nulos: "));
  if (verificaEntradaValida(votosNulos) === false) {
    return;
  }

  const votosValidos = parseInt(
    prompt("Insira a quantidade de votos válidos: ")
  );
  if (verificaEntradaValida(votosValidos) === false) {
    return;
  }

  calculoPorcentagem("brancos", votosBrancos, numeroEleitores);
  calculoPorcentagem("nulos", votosNulos, numeroEleitores);
  calculoPorcentagem("válidos", votosValidos, numeroEleitores);
}

module.exports = { exercicio2: mostrarPorcentagem };
