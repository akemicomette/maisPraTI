const { generateVector } = require("./utils/generateVector.js");

function exercicio35() {
  const initialVector = generateVector(30);
  console.log(`Vetor Inicial: ${initialVector.join(', ')}`);

  let pairVector = [];
  const pairTotalVector = [];
  let oddVector = [];
  const oddTotalVector = [];
  let pairCount = 0;
  let oddCount = 0;

  for(let column = 0; column < 30; column++) {
    if(initialVector[column] % 2 === 0) {
      pairTotalVector.push(initialVector[column]);
      pairVector.push(initialVector[column]);
        if(pairVector.length === 5) {
          pairCount++;
          console.log(`\nPar - ${pairCount}º vetor de números pares: ${pairVector}`);
          pairVector = [];
        }
    } else {
      oddTotalVector.push(initialVector[column]);
      oddVector.push(initialVector[column]);
      if(oddVector.length === 5) {
        oddCount++;
        console.log(`\nÍmpar - ${oddCount}º vetor de número ímpares : ${oddVector}`);
        oddVector = [];
      }
    }
  }
    if(pairVector.length > 0) {
      console.log(`\nPar - Vetor de números pares restantes: ${pairVector}`);
    }
    if(oddVector.length > 0) {
      console.log(`Ímpar - Vetor de números ímpares restantes: ${oddVector}`);
    }

    console.log(`\nPar - Vetor Total de Números Pares: ${pairTotalVector.join(', ')}`);
    console.log(`Ímpar - Vetor Total de Números Ímpares: ${oddTotalVector.join(', ')}`);
}

exercicio35();