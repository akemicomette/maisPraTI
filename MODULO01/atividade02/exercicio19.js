const prompt = require("prompt-sync")();

const validHHMMSSstring = (str) => /^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/.test(str);
const timeList = [];


for (let i = 0; i < 5; i++) {
  let time = prompt(`Insira o horário ${i + 1} no formato HH:MM:SS> `);

  if(validHHMMSSstring(time) === true) {
    timeList.push(time);
  } else {
    console.log(`O horário ${i + 1} é inválido! Por favor digitar de acordo com o formato HH:MM:SS.`)
  }
}
console.log(`Os horários inseridos foram: \n${timeList}`);