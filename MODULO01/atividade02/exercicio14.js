const prompt = require("prompt-sync")();

function exercicio14(){

  const quantity = 7;
  const list = [];
  
  for (i = 0; i < quantity; i++){
    let name = prompt('Qual nome deseja armazenar? ');
    list.push(name.toString());
  }
  
  const reversed = list.reverse();
  console.log('\nSegue a lista em ordem inversa da leitura:');
  console.log(reversed);

}

module.exports = { exercicio14 };
