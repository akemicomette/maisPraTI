function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
}

function generateVector(countNumbers) {
  const vector = [];
  for(let i = 0; i < countNumbers; i++){
    vector.push(getRandomIntInclusive(1,80))
  }
  return vector;
}


function exercicio40(){
  //Loteria vencedora de 08/06/2024 - visitado em 11/06/2024 no site: <https://loterias.caixa.gov.br/Paginas/Quina.aspx>
  const winnerVector = [47,49,57,64,69];
  const vectorGambler = [];
  const countGamblers = 10;

  for(let i = 0; i < countGamblers; i++){
    let gamblers = {
      id: i + 1,
      bet: generateVector(5),
    };
  vectorGambler.push(gamblers);
  }
  
  console.log(`Resultado concurso 6461(08/06/2024) ${winnerVector}`);
  console.log('Apostadores dessa rodada',vectorGambler);

  let hits = 0;
  vectorGambler.forEach(gamblers => {
    for(let i = 0; i < 5; i++) {
      if(gamblers.bet[i] === winnerVector[i]) {
        hits++;
      }
    }
  });
  if(hits === 5) {
    console.log(`Ganhador! Id do apostador: ${gamblers.id} - Aposta: ${gamblers.bet.join(', ')}.`);
  } else {
    console.log('\nNão houveram ganhadores de quina nesse concurso.')
  }
}

module.exports = { exercicio40 };
