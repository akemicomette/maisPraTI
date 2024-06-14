function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function generateVector(countNumbers) {
  const vector = [];
  for(let i = 0; i < countNumbers; i++){
    vector.push(getRandomIntInclusive(0,1000))
  }
  return vector;
}

function categorizeTransactions(transactions) {
  const categorized = {};

  transactions.forEach(transaction => {
    const { category, value } = transaction;

    if (!categorized[category]) {
      categorized[category] = {
        transactions: [],
        subtotal: 0
      };
    }

    categorized[category].transactions.push(JSON.stringify(transaction));
    categorized[category].subtotal += value;
  });

  return categorized;
}

function financial() {
  const amountTransactions = 10;
  const categories = ['fixas', 'variaveis', 'lazer', 'manutencaoCasa'];
  const transactions = [];

  for (let i = 0; i < amountTransactions; i++) {
    const registry = {
      id: generateVector(4).join(''),
      value: getRandomIntInclusive(10, 1000), 
      date: new Date().toString(), 
      category: categories[getRandomIntInclusive(0, categories.length - 1)]
    };
    transactions.push(registry);
  }

  return transactions;
}


const transactions = financial();
console.log('Transações Geradas:', transactions);
const categorizedTransactions = categorizeTransactions(transactions);
console.log("Transações Agrupadas por Categoria:", categorizedTransactions);