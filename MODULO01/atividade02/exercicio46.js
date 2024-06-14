const sells = [
  { salesperson: 'Alice',commission: 100 },
  { salesperson: 'Roberto', commission: 200 },
  { salesperson: 'Alice', commission: 150 },
  { salesperson: 'Roberto', commission: 300 },
  { salesperson: 'Joao', commission: 250 },
  { salesperson: 'Alice', commission: 200 },
  { salesperson: 'Joao', commission: 100 }
];

function computeSalesperson(computeSells){
  const report = {};
  for(let i = 0; i < computeSells.length; i++) {
    const {salesperson, commission} = computeSells[i];
    report[salesperson] = (report[salesperson] ?? 0) + commission;
  }
  return report;
}

function exercicio46() {
  const report = computeSalesperson(sells);
  console.log('\nRelatório do valor total de vendas por vendedor');
  console.log(report);
}

exercicio46();
