const prompt = require("prompt-sync")();

const { exercicio1 } = require("./exercicio1.js");
const { exercicio2 } = require("./exercicio2.js");
const { exercicio3 } = require("./exercicio3.js");
const { exercicio4e5 } = require("./exercicio4e5.js");
const { exercicio6 } = require("./exercicio6.js");
const { exercicio7 } = require("./exercicio7.js");
const { exercicio8 } = require("./exercicio8.js");
const { exercicio9 } = require("./exercicio9.js");
const { exercicio10 } = require("./exercicio10.js");
const { exercicio11 } = require("./exercicio11.js");
const { exercicio12 } = require("./exercicio12.js");
const { exercicio13 } = require("./exercicio13.js");
const { exercicio14 } = require("./exercicio14.js");
const { exercicio15 } = require("./exercicio15.js");
const { exercicio16 } = require("./exercicio16.js");

let numeroQuestao = parseInt(
  prompt("Informe o número da questão que deseja testar: ")
);
if (isNaN(numeroQuestao) || numeroQuestao > 16 || numeroQuestao < 1) {
  console.log("Erro: Somente números entre 1 e 16 são válidos.");
}

switch (numeroQuestao) {
  case 1:
    exercicio1();
    break;

  case 2:
    exercicio2();
    break;

  case 3:
    exercicio3();
    break;

  case 4:
  case 5:
    exercicio4e5();
    break;
  case 6:
    exercicio6();
    break;
  case 7:
    exercicio7();
    break;
  case 8:
    exercicio8();
    break;
  case 9:
    exercicio9();
    break;
  case 10:
    exercicio10();
    break;
  case 11:
    exercicio11();
    break;
  case 12:
    exercicio12();
    break;
  case 13:
    exercicio13();
    break;
  case 14:
    exercicio14();
    break;
  case 15:
    exercicio15();
    break;
  case 16:
    exercicio16();
    break;
}
