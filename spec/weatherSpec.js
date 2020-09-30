describe('Weather', () => {

  describe('#getWeatherFor', () => {

    describe('when passed city is Sydney', () => {
      it('should resolve 25', () => {
        return expectAsync(getWeatherFor('Sydney')).toBeResolvedTo(25);
      });
    });

    describe('when passed city is Melbourne', () => {
      it('should resolve 15', () => {
        return expectAsync(getWeatherFor('Melbourne')).toBeResolvedTo(15);
      });
    });

    describe('when passed city is other than "Sydney" or "Melbourne"', () => {
      it('should reject with an error', () => {
        return expectAsync(getWeatherFor('London'))
          .toBeRejectedWith('City London does not exist in our database');
      });
    });

  });
});