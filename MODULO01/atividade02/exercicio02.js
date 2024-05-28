const prompt = require("prompt-sync")();
const { verifyValidEntrance } = require("./verficaEntradaValida.js");

function exercicio02() {
  const velocity = parseInt(prompt("Qual a velocity do carro? "));
  if (verifyValidEntrance(velocity) === false) {
    return;
  }

  if (velocity > 80) {
    const fine = (velocity - 80) * 5;
    console.log(
      `Você foi finedo! O valor da fine é ${fine} reais. Favor efetuar o pagamento através dos serviços online do Detran.`
    );
  } else {
    console.log("Você não foi finedo.");
  }
}

exercicio02();
