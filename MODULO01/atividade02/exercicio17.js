const prompt = require("prompt-sync")();
const { verifyValidEntrance } = require("./verficaEntradaValida.js");

function exercicio17(){
  const personCount = 9;
  const fullName = [];
  const ageList = [];

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

  console.log(underage);
}

exercicio17();
