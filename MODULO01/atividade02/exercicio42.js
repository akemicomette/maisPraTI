const { generateVector } = require("./generateVector");

function exercicio42() {
  const dados = {
    id: generateVector(4),
    name: 'Dados',
    properties: [],
    hobbies: ['reading', 'gaming', 'running'],
    gameScore: {
      Fernanda: generateVector(4),
      Victor: generateVector(4),
    }
  };

  function newDados (prop){
    const justArrays = {};
    for(const key in prop){
      if(Array.isArray(prop[key])) {
        justArrays[key] = prop[key];
      }
    }
    return justArrays;
  }

  const justArrays = newDados(dados);
  console.log('Novo objeto somente com Arrays do Array inicial');
  console.log(justArrays);
}

exercicio42();
