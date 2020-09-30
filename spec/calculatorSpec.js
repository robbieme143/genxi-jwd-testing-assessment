describe('Calculator', () => {

  describe('#add', () => {

    describe('when a string is passed as a number', () => {
      it('should throw an error', () => {
        const calculator = new Calculator();

        expect(() => calculator.add('1', 2)).toThrow();
        expect(() => calculator.add(1, '2')).toThrow();
      });
    });

    describe('when passed two numbers', () => {
      it('should not throw an error', () => {
        const calculator = new Calculator();

        expect(() => calculator.add(1, 2)).not.toThrow();
        // expect(calculator.add(1, 2)).not.toThrow();
      });

      it('should add the numbers together', () => {
        const calculator = new Calculator();
        const result = calculator.add(1, 2);
        expect(result).toBe(3);
      });
    });
  });

  describe('#subtract', () => {

    describe('When a string is passed as a number', () => {
     it('should throw an error', () => {
       const calculator = new Calculator();
  
        expect(() => calculator.subtract('10', 5)).toThrow();
        expect(() => calculator.subtract(10, '5')).toThrow();
        });
      });
  
      describe('when passed two numbers', () => {
        it('should not throw an error', () => {
          const calculator = new Calculator();
  
          expect(() => calculator.subtract(10, 5)).not.toThrow();

        });
  
        it('should subtract the numbers together', () => {
          const calculator = new Calculator();
          const result = calculator.subtract(10, 2);
          expect(result).toBe(8);
        });
      });
  });

  describe('#Multiply', () => {

    describe('When a string is passed as a number', () => {
     it('should throw an error', () => {
       const calculator = new Calculator();
  
        expect(() => calculator.multiply('10', 5)).toThrow();
        expect(() => calculator.multiply(10, '5')).toThrow();
        });
      });
  
      describe('when passed two numbers', () => {
        it('should not throw an error', () => {
          const calculator = new Calculator();
         
          expect(() => calculator.multiply(10, 5)).not.toThrow();

        });
  
        it('should multiply numbers together', () => {
          const calculator = new Calculator();
          const result = calculator.multiply(15, 2);
          expect(result).toBe(30);
        });
      });
  });

  describe('#divide', () => {

    describe('When a string is passed as a number', () => {
     it('should throw an error', () => {
       const calculator = new Calculator();
  
        expect(() => calculator.divide('10', 5)).toThrow();
        expect(() => calculator.divide(10, '5')).toThrow();
      });
    });
  
    describe('when passed two numbers', () => {
      it('should not throw an error', () => {
       const calculator = new Calculator();
 
       expect(() => calculator.divide(10, 5)).not.toThrow();

      });
    });

    describe('when the divisor passed is 0', () => {
      it('should throw an error', () => {
       const calculator = new Calculator();
 
       expect(() => calculator.divide(10, 0)).toThrowError('Can not divide by zero.');

      });
    });
  });
});