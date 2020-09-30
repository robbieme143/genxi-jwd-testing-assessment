describe('login', () => {
  describe('#Successful Login', () => {
    describe('when the user logs in successfully', () => {
      it('should resolve a token', () => {
        const response = { token: '123' };
        const loginValue = new Promise((resolve, reject) => {
          resolve(response);
        });

        spyOn(Api, 'login').and.returnValue(loginValue);

        return expectAsync(login('test', 'test')).toBeResolvedTo(response.token);
      });
    });
  });
  describe('#Incorrect User Login entered', () => {
    describe('when the user uses an incorrect email', () => {
      it('should reject with an error message', () => {
        const response = { error: 'user not found' };
        const loginValue = new Promise((resolve, reject) => {
          resolve(response);
        });
    
        spyOn(Api, 'login').and.returnValue(loginValue);
    
        return expectAsync(login('test', 'test'))
          .toBeRejectedWithError('Oops! Incorrect username or password. Check your details and try again.');
      });
    });
  });
  describe('#Incorrect Password entered', () => {
    describe('when the user enters an incorrect password', () => {
      it('should reject with an error message', () => {
        const response = { error: 'Missing password' };
        const loginValue = new Promise((resolve, reject) => {
          resolve(response);
        });
    
        spyOn(Api, 'login').and.returnValue(loginValue);
    
        return expectAsync(login('test', 'test'))
          .toBeRejectedWithError('Oops! Missing password, make sure to fill in your password and try again.');
      });
    });
  });
});