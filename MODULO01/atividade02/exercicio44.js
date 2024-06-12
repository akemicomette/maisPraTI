const { generateVector } = require("./generateVector");

const obj = {
  name: 'Canastra',
  gameScore: {
    Fernanda: generateVector(4),
    Victor: generateVector(4),
  },
  city: 'São Paulo',
  state: 'São Paulo',
};

function countStrings(obj){
  let count = 0;
  for(const key in obj){
    if(typeof obj[key] === 'string') {
    count++;
    }
  }
  console.log(`Existem ${count} strings no objeto`);
}

countStrings(obj);