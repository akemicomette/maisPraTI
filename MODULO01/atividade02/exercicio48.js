function compareObjects(inventarioLojaA, inventarioLojaB) {
  const inventarioCombinado = {};

  for (let item in inventarioLojaA) {
    inventarioCombinado[item] = inventarioLojaA[item];
  }

  for (let item in inventarioLojaB) {
    if (inventarioCombinado[item]) {
      inventarioCombinado[item] += inventarioLojaB[item];
    } else {
      inventarioCombinado[item] = inventarioLojaB[item];
    }
  }

  return inventarioCombinado;
}

function exercicio48(){
  const inventarioLojaA = {
    luminaria: 10,
    lampadasLed: 12,
    fitaLed: 31,
    fonteFita: 13,
    cupula: 16,
    trilho: 13,
    spots: 5,
    }
  const inventarioLojaB = {
    luminaria: 7,
    fio3mm: 31,
    fio4mm: 13,
    fio10mm: 6,
    trilho: 9,
    fonteFita: 2,
    spots: 10,
  }
  
  inventarioCombinado = compareObjects(inventarioLojaA, inventarioLojaB);
  console.log('Inventario combinado das lojas A e B, somando as quantidades de itens iguais.');
  console.log(inventarioCombinado);
}

module.exports = { exercicio48 };
