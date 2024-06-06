function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function generateMatrix(rowCount, columnCount){
  const matrix = [];
  for (let row = 0; row < rowCount; row++){
    let line = [];
    for(let column = 0; column < columnCount; column++){
      line.push(getRandomIntInclusive(-100, 100));
    }
    matrix.push(line);
    line = [];
  }
  return matrix;
}

module.exports = { generateMatrix };
