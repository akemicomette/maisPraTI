const { generateVector } = require("./generateVector");

function exercicio39() {

  const vectorA = generateVector(100);
  const vectorB = [];

  for(let i = 0; i < vectorA.length; i++) {
    if(vectorA[i] > 0){
      vectorB.push(vectorA[i]);
    }
  }

  console.log(`Vetor A: \n${vectorA.join(', ')}`);
  console.log(`\nVetor B: \n${vectorB.join(', ')}`);
}

exercicio39();
