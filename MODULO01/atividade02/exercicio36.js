function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function generateVector(countNumbers) {
  const vector = [];
  for(let i = 0; i < countNumbers; i++){
    vector.push(getRandomIntInclusive(0,100))
  }
  return vector;
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 9000) + 1000;
}

function loteriaEsportiva() {
  const key = generateVector(13);
  console.log(`Vetor Gabarito: ${key.join(', ')}`);

  let vectorPunters = [];
  for(let i = 0; i < 99; i++) {
    let gambler = {
      card: generateRandomNumber(),
      keyPunter: generateVector(13),
    }
    vectorPunters.push(gambler);
  };

  vectorPunters.forEach(gambler => {
    let hits = 1;
    for(let i = 0; i < 13; i++) {
      if(gambler.keyPunter[i] === key[i]) {
        hits++;
      }
    }
    const winner = hits === 13 ? "Parabéns, tu foi o GANHADOR!" : "Mais sorte na próxima!";
    console.log(`Número do apostador: ${gambler.card} - Respostas: ${gambler.keyPunter.join(', ')} - Números sorteados: ${hits} - ${winner}`);
  });

}

loteriaEsportiva();
