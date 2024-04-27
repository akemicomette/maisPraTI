function exercicio16() {
  let numeroPrimo = 101;
  let contador = 0;
  let listaPrimos = [];

  while (contador <= 49) {
    let primo = true;
    let numeroDivisor = 2;
    while (numeroDivisor * numeroDivisor <= numeroPrimo) {
      if (numeroPrimo % numeroDivisor === 0) {
        primo = false;
        break;
      }
      numeroDivisor++;
    }

    if (primo) {
      listaPrimos.push(numeroPrimo);
      contador++;
    }

    numeroPrimo++;
  }
  console.log("Os 50 primeiros números primos são: ");
  console.log(listaPrimos);
}

module.exports = { exercicio16 };
