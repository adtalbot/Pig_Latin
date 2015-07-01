describe('pigLatin', function() {
  it('adds ay to the end of a word that starts with a vowel', function() {
    pigLatin('apple').should.equal('appleay');
  });
});
