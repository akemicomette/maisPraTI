const { generateVector } = require("./generateVector");

function exercicio35() {
  const initialVector = generateVector(30);
  console.log(`Vetor Inicial: ${initialVector.join(', ')}`);

  const pairVector = [];
  const oddVector = [];

  for(let row = 0; row < 30; row++){
    if(initialVector[row] % 2 === 0){
      pairVector.push(initialVector[row]);
    } else {
      oddVector.push(initialVector[row]);
    }
  }
  console.log(`\nVetor de Números Pares: ${pairVector.join(', ')}`);
  console.log(`\nVetor de Números Ímpares: ${oddVector.join(', ')}`);
}

exercicio35();