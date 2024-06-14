function exercicio13(){

  const elements = 15;
  let number1 = 1;
  let number2 = number1 + number1;
  let nextNumber = number1 + number2;
  const sequence = [];
  
  sequence.push(number1, number1, number2, nextNumber);
  
  for (i = 4; i < elements; i++){
    number1 = number2;
    number2 = nextNumber;
    nextNumber = number1 + number2;
    sequence.push(nextNumber)
  }
  console.log(`Vetor numérico preenchido automaticamente é: ${sequence}`);
}

module.exports = { exercicio13 };
