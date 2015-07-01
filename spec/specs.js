describe('pigLatin', function() {
  it('adds ay to the end of a word that starts with the letter a', function() {
    pigLatin('apple').should.equal('appleay');
  });

  it('adds ay to the end of a word that starts with any vowel', function() {
    pigLatin('english').should.equal('englishay');
  });

  it('takes a single consonant at the beginning of a word and moves it to the end', function() {
    pigLatin('cat').should.equal('atcay');
  });

  it('takes two consanants at the beginning of a word and moves them to the end', function() {
    pigLatin('cricket').should.equal('icketcray');
  });
});

describe('indexOfFirstVowel', function() {
  it('returns 0 for a word that starts with a vowel', function() {
    indexOfFirstVowel('apple').should.equal(0);
  });

  it('returns 1 for a word that starts with a single consonant', function() {
    indexOfFirstVowel('cat').should.equal(1);
  });
});
