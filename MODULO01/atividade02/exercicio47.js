function modifyObject(obj, modifyFunc) {
  const newObj = {};
  for(let i in obj) {
    if(obj.hasOwnProperty(i)) {
      newObj[i] = modifyFunc(obj[i]);
    }
  }
  return newObj;
}

const books = {
  romance: 13,
  fiction: 10,
  action: 12,
  archicteture: 5,
  programming: 8,
}

function addTwo(books) {
  return parseFloat(books += 2);
}

function subtractionThree(books) {
  let subtration = parseInt(books - 3);
  return subtration;
}

function dimensionsNeededMeters(books) {
  let dimensionsCM = parseFloat(books * 700);
  let dimensionsM =  parseFloat(dimensionsCM/10000).toFixed(2);
  return dimensionsM ;
}

function exercicio47() {
  const add = modifyObject(books, addTwo);
  console.log(`\nLivros acrescidos de 2 unidades ${JSON.stringify(add)}`);

  const subtraction = modifyObject(books, subtractionThree);
  console.log(`\nLivros decrescidos de 3 unidades ${JSON.stringify(subtraction)}`);

  const spaceForBooks = modifyObject(books, dimensionsNeededMeters);
  console.log('\nDimensão necessária em metros quadrados para a estante por categoria:');
  console.log(spaceForBooks);
}

module.exports = { exercicio47 };
