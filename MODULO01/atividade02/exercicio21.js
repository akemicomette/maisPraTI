const prompt = require("prompt-sync")();
const { verifyValidEntrance } = require("./utils/verficaEntradaValida.js");

function exercicio21(){
  console.log('');
  console.log('Olá! Para calcular o seu peso ideal necessitamos das seguintes informações:');
  console.log('Digite o sexo atribuído no nascimento: \nm - Masculino \nf - Feminino');
  let sex = prompt('> ');
  sex = sex.toLowerCase();
  if(sex != "f" && sex != "m"){
    console.log('Dado inválido, reinicie a questão.')
    return;
  }

  console.log('');
  console.log('Digite sua altura em metros \nEx: 1.82.')
  const height = parseFloat(prompt('> '));
  if(verifyValidEntrance(height) === false){
    return;
  }
  
  let idealWeight = 0;
  if(sex === "m") {
    idealWeight = 72.7 * height - 58;
    console.log('O peso ideal é: ');
    console.log(idealWeight.toFixed(2)+ ' kg.');
  }else if(sex === "f") {
    idealWeight = 62.1 * height - 44.7;
    console.log('O peso ideal é: ');
    console.log(idealWeight.toFixed(2)+ ' kg.');
  }
}

module.exports = { exercicio21 };
