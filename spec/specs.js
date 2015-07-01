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

describe('hasConsonantAt', function() {
  it('returns true if a word has a consonant in the specified spot', function() {
    hasConsonantAt('peanut', 0).should.equal(true);
  });

  it('returns false if a word does not have a consonant in the specified spot', function() {
    hasConsonantAt('peanut', 1).should.equal(false)
  });
});
