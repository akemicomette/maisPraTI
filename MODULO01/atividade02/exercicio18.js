const prompt = require("prompt-sync")();
const { verifyValidEntrance } = require("./utils/verficaEntradaValida.js");

function exercicio18(){
  const quantityStaff = 1;
  const employeeName = [];
  const employeePost = [];
  const employeeSalary = [];
  
  for (let i = 0; i < quantityStaff; i++){
    let name = prompt('Insira nome e sobrenome: ');
    let post = prompt('Insira o cargo: ');
    let salary = parseFloat(prompt('Insira o salário: ')).toFixed(2);
    if(verifyValidEntrance(salary) === false) {
      return;
    }

    employeeName.push(name);
    employeePost.push(post);
    employeeSalary.push(salary);

  }

  console.log('Dados do funcionário:')
  console.log(`Nome e Sobrenome: ${employeeName}`);
  console.log(`Cargo: ${employeePost}.`);
  console.log(`Salário R$ ${employeeSalary}.`);
}

exercicio18();
  