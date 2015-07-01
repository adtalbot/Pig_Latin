var pigLatin = function(englishWord) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  for(var i = 0; i < vowels.length; i++) {                      /*Intializes index to 0, loops while i is less than 5, increments i by 1 after each loop*/
    if(englishWord[0] === vowels[i]) {                          /*Evaluates if first letter of englishWord is equal to vowel array at position = i*/
      var startsWithVowel = true;                               /*startsWithVowel will be true or false*/
      break;
    }
  }

  if(startsWithVowel) {                                         /*If startsWithVowel evaluates to true*/
    var translatedWord = englishWord;                           /*Creates variable translatedWord to englishWord*/
  } else {                                                      /*Else evaluates statement below*/
    var translatedWord = englishWord.slice(1) + englishWord[0]; /*Takes first letter off of englishWord, concates letter at position 0 of englishWord. Stores in translatedWord*/
  }
  return translatedWord + 'ay';                                 /*After if statement terminates, returns translatedWord with 'ay' concated to end*/
};
