describe('pigLatin', function() {
  it('adds ay to the end of a word that starts with the letter a', function() {
    pigLatin('apple').should.equal('appleay');
  });

  it('adds ay to the end of a word that starts with any vowel', function() {
    pigLatin('english').should.equal('englishay');
  })

  it('takes a single consonant at the beginning of a word and moves it to the end', function() {
    pigLatin('cat').should.equal('atcay');
  });
});
