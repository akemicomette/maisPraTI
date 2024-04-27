const prompt = require("prompt-sync")();

function exercicio1() {
  const grausCelsius = parseFloat(
    prompt(
      "Insira aqui a temperatura que deseja converter de graus Celsius para Fahrenheit: "
    )
  );
  if (isNaN(grausCelsius)) {
    console.log("Valor inválido! Somente números são aceitos.");
  } else {
    const grausFahrenheit = grausCelsius * 1.8 + 32;
    console.log(
      `A temperatura convertida é: ${grausFahrenheit} graus Fahrenheit.`
    );
  }
}

module.exports = { exercicio1 };
