describe('pigLatin', function() {
  it('adds ay to the end of a word that starts with a vowel', function() {
    pigLatin('apple').should.equal('appleay');
  });

  it('takes a single consonant at the beginning of a word and moves it to the end', function() {
    pigLatin('cat').should.equal('atcay');
  });
});
