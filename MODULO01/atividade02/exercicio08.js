const prompt = require("prompt-sync")();
const { verifyValidEntrance } = require("./utils/verficaEntradaValida.js");

function exercicio08() {
  const hours = parseInt(prompt("Quantas horas se exercitou neste mês? "));
  if (verifyValidEntrance(hours) === false) {
    return;
  }
  let points = 0;
  if (hours <= 10) {
    points = hours * 2;
  } else if (hours > 10 && hours <= 20) {
    points = hours * 5;
  } else {
    points = hours * 10;
  }
  const calculator = points * 0.05;
  console.log(
    `Parabéns pelo seu avanço! O total de pontos deste mês foi de ${points} e você ganhou R$ ${calculator}.`
  );
}

exercicio08();
