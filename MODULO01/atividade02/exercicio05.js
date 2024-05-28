const prompt = require("prompt-sync")();
const { verifyValidEntrance } = require("./verficaEntradaValida.js");

function exercicio05() {
  const option = parseInt(
    prompt("Digite 1 para Pedra, 2 para Papel ou 3 para Tesoura ")
  );
  if (verifyValidEntrance(option) === false) {
    return;
  }

  const optionMachine = parseInt(Math.random() * 3) + 1;
  console.log(optionMachine);

  if (
    (option === 1 && optionMachine === 2) ||
    (option === 2 && optionMachine === 3) ||
    (option === 3 && optionMachine === 1)
  ) {
    console.log(`Parabéns! Você escolheu ${option} e venceu!`);
    console.log(`A escolha da maquina foi ${optionMachine}.`);
  } else if (option === optionMachine) {
    console.log("Você empatou com a máquina! Tente novamente.");
  } else {
    console.log("você perdeu!");
  }
}

exercicio05();
