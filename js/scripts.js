var pigLatin = function(englishWord) {
  if(hasConsonantAt(englishWord, 1)) {
    var translatedWord = englishWord.slice(2) + englishWord.slice(0, 2);
  } else if (hasConsonantAt(englishWord, 0)) {
    var translatedWord = englishWord.slice(1) + englishWord.slice(0, 1);
  } else if (!hasConsonantAt(englishWord, 0)) {
    var translatedWord = englishWord;
  }
    return translatedWord + 'ay';
};

var hasConsonantAt = function(word, position) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];                       /*Intializes index to 0, loops while i is less than 5, increments i by 1 after each loop*/
  for (var i = 0; i < vowels.length; i++) {                     /*Evaluates if first letter of englishWord is equal to vowel array at position = i*/
    if(word[position] === vowels[i]) {                          /*startsWithVowel will be true or false*/
      return false;
    }
  }
  return true;
};
