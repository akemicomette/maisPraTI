function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getAnswers(count){
  const answers = [];
  for(let i = 0; i < count; i++){
    let options = "ABCDE";
    let randomOptionNumber=getRandomIntInclusive(1, 5);
    answers.push(options.substring(randomOptionNumber-1,randomOptionNumber));
  }
  return answers;
}


function exercicio37() {
  const vectorG = getAnswers(20);
  console.log(`Vetor Gabarito: ${vectorG}`);

  let vectorR = [];
  for(let i = 0; i < 50; i++) {
    let student = {
      id: i + 1,
      vectorTries: getAnswers(20),
    };
    vectorR.push(student);
  }

  vectorR.forEach(student => {
    let rightAnswers = 0;
    for(let i = 0; i < 20; i++) {
      if(student.vectorTries[i] === vectorG[i]) {
        rightAnswers++;
      }
    }
    const status = rightAnswers >= 12 ? "APROVADO" : "REPROVADO";
    console.log(`Aluno: ${student.id} - Respostas: ${student.vectorTries.join(', ')} - Acertos: ${rightAnswers} - ${status}`);
  });

}

exercicio37();