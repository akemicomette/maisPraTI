const prompt = require("prompt-sync")();

function ValidEmail (email) {
  var emailPattern =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
   return emailPattern.test(email); 
}
function exercicio41(){
  let shouldContinue = "s";
  while (shouldContinue === "s") {
    let pessoa = {
      name: "Rainbow",
      age: 20,
    };
    
    console.log(`\nA pessoa chamada ${pessoa.name} tem ${pessoa.age} anos.`);
    
    let isValidEntry = false;
    pessoa.email = prompt('Insira o e-mail que deseja adicionar:');
    if(ValidEmail(pessoa.email) === false ){
      console.log('E-mail inválido.');
      isValidEntry = false;
      pessoa.email = '';
    }
    
    while (isValidEntry === false) {
      console.log("\nDeseja digitar o e-mail novamente? \ns - sim \nn - não. ");
      shouldContinue = prompt("> ");
          
    shouldContinue = shouldContinue.toLowerCase();
      if (shouldContinue != "s" && shouldContinue != "n") {
        isValidEntry = false;
        console.log("Por favor digite uma das opções dadas acima");
      } else {
        isValidEntry = true;
      }
    }

    if(ValidEmail(pessoa.email) === true){
      console.log(`\nA pessoa chamada ${pessoa.name} tem ${pessoa.age} anos, com ${pessoa.email} cadastrado para contato`);
      } else {
        console.log(`\nA pessoa chamada ${pessoa.name} tem ${pessoa.age} anos.`);
      }
  }
}

exercicio41();