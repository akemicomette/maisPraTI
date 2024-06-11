function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function generateVector(countNumbers) {
  const vector = [];
  for(let i = 0; i < countNumbers; i++){
    vector.push(getRandomIntInclusive(-100,100))
  }
  return vector;
}

module.exports = { generateVector };