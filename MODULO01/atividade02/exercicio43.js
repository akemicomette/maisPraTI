const { generateVector } = require("./utils/generateVector.js");

function joinObjects(obj1,obj2) {
  return {...obj1, ...obj2};
}

function exercicio43() {
  const obj1 = {
    name: 'Domino',
    gameScore: {
      Fernanda: generateVector(4),
      Victor: generateVector(4),
    },
    ready: 'Pronto para jogar',
  };

  const obj2 = {
    name: 'Canastra',
    gameScore: {
      Fernanda: generateVector(4),
      Victor: generateVector(4),
    }
  };

  const joinedObjects = joinObjects(obj1, obj2);
  console.log('Objetos combinados:');
  console.log(joinedObjects);
}

module.exports = { exercicio43 };