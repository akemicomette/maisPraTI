const { generateVector } = require("./generateVector");
const prompt = require("prompt-sync")();
const { verifyValidEntrance } = require("./verficaEntradaValida.js");

function exercicio38() {
  const countElements = 6;
  const vectorInitial = generateVector(countElements);
  
  console.log('\nDigite uma das opções abaixo:')
  console.log('1 - Soma dos elementos;');
  console.log('2 - Produtos dos elementos;');
  console.log('3 - Média dos elementos;');
  console.log('4 - Elementos organizados em ordem crescente;');
  console.log('5 - Imprime o vetor inicial.');
  
  let operation = parseInt(prompt('> '));
  if(verifyValidEntrance(operation) === false) {
    return;
    }

  let sum = 0;
  let multiply = 1;
  let media = 0;
  
  for(let i = 0; i < countElements; i++){
    sum += vectorInitial[i];
    multiply *= vectorInitial[i];
    }
    
    media = sum/countElements;
    
  switch(operation) {
    case 1:
      console.log(`Vetor inicial: ${vectorInitial.join(', ')}`); 
      console.log(`\nSoma dos elementos = ${sum}`);
      break;
        
    case 2:
      console.log(`Vetor inicial: ${vectorInitial.join(', ')}`);
      console.log(`\nProduto de todos os elementos = ${multiply}`);
      break;
      
    case 3:
      console.log(`Vetor inicial: ${vectorInitial.join(', ')}`);
      console.log(`\nMédia dos elementos = ${media.toFixed(2)}`);
      break;
        
    case 4:
      console.log(`Vetor inicial: ${vectorInitial.join(', ')}`);
      const vectorAscending = vectorInitial.sort((a, b) => a - b);
      console.log(`\nVetor reescrito em ordem crescente = ${vectorAscending}`);
    break;
    
    case 5:
      console.log(`\nVetor inicial = ${vectorInitial.join(', ')}`);
      break;

    default:
      if(operation >= 6){
        console.log("Empty action received. Please enter a valid option.");
        break;
      }
  }
}

exercicio38();
