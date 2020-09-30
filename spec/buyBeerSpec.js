
describe('BuyBeer', () => {
  describe('#canGregBuyBeer', () => {
    describe('when greg is 18', () => {
      it('should return "Greg is 18, he can buy beer!"', () => {
        const originalAge = greg.age;
        greg.age = 18
        
        const result = canGregBuyBeer();

        expect(result).toBe('Greg is 18, he can buy beer!');
        greg.age = originalAge;
      })
    });
    describe('when greg is under 18', () => {
      it('should return "Greg is under 18, he is not allowed to buy beer!"', () => {
        const originalAge = greg.age;
        greg.age < 18;
        
        const result = canGregBuyBeer();

        expect(result).not.toBe('Greg is under 18, he is not allowed to buy beer!');
        greg.age = originalAge;
      })
    });
  });
});