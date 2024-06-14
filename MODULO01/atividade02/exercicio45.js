function countStrings(array){
  const count = {};
  for (const repeatedWords of array){
    if(count[repeatedWords]){
      count[repeatedWords]++;
    } else {
      count[repeatedWords] = 1;
    }
  }
  console.log('Cada string é uma chave e seu valor é o número de vezes que a string aparece no array.')
  console.log(count);
}

function exercicio45(){
  const cities = ['Porto Alegre','Maceió','São Paulo','João Pessoa','Porto Alegre','São Paulo', 'João Pessoa', 'São Paulo', 'Porto Alegre'];
  countStrings(cities);
}

module.exports = { exercicio45 };
