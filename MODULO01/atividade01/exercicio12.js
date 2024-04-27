function exercicio12() {
  for (let numero = 1000; numero < 1999; numero++) {
    if (numero % 11 == 5) {
      console.log(numero);
    }
  }
}

module.exports = { exercicio12 };
