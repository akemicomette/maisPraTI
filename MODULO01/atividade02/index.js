const prompt = require("prompt-sync")();

const { exercicio01 } = require("./exercicio01.js");
const { exercicio02 } = require("./exercicio02.js");
const { exercicio03 } = require("./exercicio03.js");
const { exercicio04 } = require("./exercicio04.js");
const { exercicio05 } = require("./exercicio05.js");
const { exercicio06 } = require("./exercicio06.js");
const { exercicio07 } = require("./exercicio07.js");
const { exercicio08 } = require("./exercicio08.js");
const { exercicio09 } = require("./exercicio09.js");
const { exercicio10 } = require("./exercicio10.js");
const { exercicio11 } = require("./exercicio11.js");
const { exercicio12 } = require("./exercicio12.js");
const { exercicio13 } = require("./exercicio13.js");
const { exercicio14 } = require("./exercicio14.js");
const { exercicio15 } = require("./exercicio15.js");
const { exercicio16 } = require("./exercicio16.js");
const { exercicio17 } = require("./exercicio17.js");
const { exercicio18 } = require("./exercicio18.js");
const { exercicio19 } = require("./exercicio19.js");
const { exercicio20 } = require("./exercicio20.js");
const { exercicio21 } = require("./exercicio21.js");
const { exercicio22 } = require("./exercicio22.js");
const { exercicio23 } = require("./exercicio23.js");
const { exercicio24 } = require("./exercicio24.js");
const { exercicio25 } = require("./exercicio25.js");
const { exercicio26 } = require("./exercicio26.js");
const { exercicio27 } = require("./exercicio27.js");
const { exercicio28 } = require("./exercicio28.js");
const { exercicio29 } = require("./exercicio29.js");
const { exercicio30 } = require("./exercicio30.js");
const { exercicio31 } = require("./exercicio31.js");
const { exercicio32 } = require("./exercicio32.js");
const { exercicio33 } = require("./exercicio33.js");
const { exercicio34 } = require("./exercicio34.js");
const { exercicio35 } = require("./exercicio35.js");
const { loteriaEsportiva } = require("./exercicio36.js");
const { exercicio37 } = require("./exercicio37.js");
const { exercicio38 } = require("./exercicio38.js");
const { exercicio39 } = require("./exercicio39.js");
const { exercicio40 } = require("./exercicio40.js");
const { exercicio41 } = require("./exercicio41.js");
const { exercicio42 } = require("./exercicio42.js");
const { exercicio43 } = require("./exercicio43.js");
const { exercicio44 } = require("./exercicio44.js");
const { exercicio45 } = require("./exercicio45.js");
const { exercicio46 } = require("./exercicio46.js");
const { exercicio47 } = require("./exercicio47.js");
const { exercicio48 } = require("./exercicio48.js");
const { exercicio49 } = require("./exercicio49.js");
const { menu } = require("./reservaHotel.js");
const {palindrome} = require("./palindrome.js");


let numeroQuestao = parseInt(
  prompt("Informe o número da questão que deseja testar: ")
);
if (isNaN(numeroQuestao) || numeroQuestao > 51 || numeroQuestao < 1) {
  console.log("Erro: Somente números entre 1 e 51 são válidos.");
}

switch (numeroQuestao) {
  case 1:
    exercicio01();
    break;

  case 2:
    exercicio02();
    break;

  case 3:
    exercicio03();
    break;

  case 4:
    exercicio04();
    break;

  case 5:
    exercicio05();
    break;

  case 6:
    exercicio06();
    break;

  case 7:
    exercicio07();
    break;

  case 8:
    exercicio08();
    break;

  case 9:
    exercicio09();
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

  case 17:
    exercicio17();
    break;

  case 18:
    exercicio18();
    break;

  case 19:
    exercicio19();
    break;

  case 20:
    exercicio20();
    break;

  case 21:
    exercicio21();
    break;

  case 22:
    exercicio22();
    break;

  case 23:
    exercicio23();
    break;

  case 24:
    exercicio24();
    break;

  case 25:
    exercicio25();
    break;

  case 26:
    exercicio26();
    break;

  case 27:
    exercicio27();
    break;

  case 28:
    exercicio28();
    break;

  case 29:
    exercicio29();
    break;

  case 30:
    exercicio30();
    break;

  case 31:
    exercicio31();
    break;

  case 32:
    exercicio32();
    break;

  case 33:
    exercicio33();
    break;

  case 34:
    exercicio34();
    break;

  case 35:
    exercicio35();
    break;

  case 36:
    loteriaEsportiva();
    break;

  case 37:
    exercicio37();
    break;

  case 38:
    exercicio38();
    break;

  case 39:
    exercicio39();
    break;

  case 40:
    exercicio40();
    break;

  case 41:
    exercicio41();
    break;

  case 42:
    exercicio42();
    break;

  case 43:
    exercicio43();
    break;

  case 44:
    exercicio44();
    break;

  case 45:
    exercicio45();
    break;

  case 46:
    exercicio46();
    break;

  case 47:
    exercicio47();
    break;

  case 48:
    exercicio48();
    break;

  case 49:
    exercicio49();
    break;

  case 50:
    menu();
    break;
  
  case 51:
    palindrome();
    break;

  default:
    break;
}