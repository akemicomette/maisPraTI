function countStrings(array){
  const count = {};
  for (const repetedWords of array){
    if(count[repetedWords]){
      count[repetedWords]++;
    } else {
      count[repetedWords] = 1;
    }
  }
  console.log(count);
}

function exercicio45(){
  const cities = ['Porto Alegre','Maceió','São Paulo','João Pessoa','Porto Alegre','São Paulo', 'João Pessoa', 'São Paulo', 'Porto Alegre'];
  countStrings(cities);
}

exercicio45();
