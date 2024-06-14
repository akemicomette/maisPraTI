function palindrome() {
  let randomPalindrome = {
    names: ['ana', 'davi', 'otto', 'andre'],
    objects: ['osso', 'radar', 'sacas', 'level'],
    frases: ['a base do teto desaba', 'a dama admirou o rim da amada'],
    animals: ['arara', 'ewe']
  };

  function reverseString(string) {
    return string.split('').reverse().join('');
  }

  function isPalindrome(string) {
    const reformatedString = string.replace(/\s+/g, '').toLowerCase();
    const reversedString = reverseString(reformatedString);
    return reformatedString === reversedString;
  }

  function transformObject(obj, transformFunc) {
    const newObj = {};
    for (const key in obj) {
      if (Array.isArray(obj[key])) {
        newObj[key] = obj[key].map(transformFunc);
      } else {
        newObj[key] = transformFunc(obj[key]);
      }
    }
    return newObj;
  }

  function countPalindromes(obj) {
    const palindromeCounts = {};
    for (const key in obj) {
      if (Array.isArray(obj[key])) {
        palindromeCounts[key] = obj[key].filter(isPalindrome).length;
      }
    }
    return palindromeCounts;
  }

  const transformedObject = transformObject(randomPalindrome, reverseString);
  console.log("Objeto transformado:");
  console.log(transformedObject);

  const palindromeCounts = countPalindromes(randomPalindrome);
  console.log("Contagem de palíndromos no objeto original:");
  console.log(palindromeCounts);
}

module.exports = { palindrome };
