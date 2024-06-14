const prompt = require("prompt-sync")();
const { verifyValidEntrance } = require("./utils/verficaEntradaValida.js");

function exercicio01() {
  const cigaretts = Math.round(
    prompt("Quantos cigaretts fuma ou fumou por dia? ")
  );
  if (verifyValidEntrance(cigaretts) === false) {
    return;
  }

  const years = Math.round(
    prompt("Há quantos anos fuma? Ou quantos anos foi fumante? ")
  );
  if (verifyValidEntrance(years) === false) {
    return;
  }

  const countingDays = anos * 365;
  const cigarettsTotal = countingDays * cigaretts;
  const lostMinutes = cigarettsTotal * 10;
  const lostDays = Math.floor(lostMinutes / 1440);
  console.log(
    `Você fumou aproximadamente ${cigarettsTotal} cigaretts. Perdendo aproximadamente ${lostDays} dias de vida.`
  );
}

exercicio01();
