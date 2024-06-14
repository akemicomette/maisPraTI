const prompt = require("prompt-sync")();
const { verifyValidEntrance } = require("./utils/verficaEntradaValida.js");

function exercicio02() {
  const velocity = parseInt(prompt("Qual a velocidade do carro? "));
  if (verifyValidEntrance(velocity) === false) {
    return;
  }

  if (velocity > 80) {
    const fine = (velocity - 80) * 5;
    console.log(
      `Você foi multado! O valor da multa é ${fine} reais. Favor efetuar o pagamento através dos serviços online do Detran.`
    );
  } else {
    console.log("Você não foi multado.");
  }
}

module.exports = { exercicio02 };
