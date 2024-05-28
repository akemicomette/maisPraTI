function exercicio16(){
  const position = [];
  let i = 0;
    
  while(i < 20){
    let arbitraryNumber = Math.floor(Math.random() * (99 + 1));
    position.push(arbitraryNumber);
    
    i++;
  }

  console.log(`\nVetor de números gerados desordenados: \n${position}`);
  
  position.sort();
  console.log(`\nVetor de números gerados em ordem crescente: \n${position}`);
}

exercicio16();






