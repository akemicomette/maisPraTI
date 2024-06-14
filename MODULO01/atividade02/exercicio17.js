const prompt = require("prompt-sync")();
const { verifyValidEntrance } = require("./utils/verficaEntradaValida.js");

function exercicio17(){
  const personCount = 9;
  const fullName = [];
  const ageList = [];

  console.log('Insira as informações solicitadas para listagem dos menores de idade.')
  for(let i = 0; i < personCount; i++) {
    let name = prompt('Nome: ');
    let age = parseInt(prompt('Idade: '));

    if(verifyValidEntrance(age) === false) {
      return;
    }

    fullName.push(name);
    ageList.push(age);
  }
  
  const underage = [];

  for(let i = 0; i < personCount; i++) {
    if(ageList[i] < 18) {
      underage.push({
        name: fullName[i],
        age: ageList[i],
      });
    }
  }

  console.log('Lista das pessoas menores de idade:');
  console.log(underage);
}

module.exports = { exercicio17 };
