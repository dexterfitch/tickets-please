describe("BankAccount", function() {
  describe("deposit()", function() {
    it("adds an amount to the balance", function() {
      var testAccount = Object.create(BankAccount);
      testAccount.deposit(50);
      expect(testAccount.balance).to.equal(50);
    });
  });
  describe("withdraw()", function() {
    it("subtracts an amount from the balance", function() {
      var testAccount = Object.create(BankAccount);
      testAccount.withdraw(50);
      expect(testAccount.balance).to.equal(-50);
    });
  });
});
