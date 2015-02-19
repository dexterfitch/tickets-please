describe("MovieTicket", function() {
  describe("priceCalc", function() {
    it("calculates the price of a regular-price adult ticket", function() {
      var testStub = Object.create(MovieTicket);
      testStub.priceCalc("adult", 1);
      expect(testStub.total).to.equal(10);
    });

    it("calculates the price of a regular-price child ticket", function() {
      var testStub = Object.create(MovieTicket);
      testStub.priceCalc("child", 1);
      expect(testStub.total).to.equal(6);
    });

    it("calculates the price of a regular-price special ticket", function() {
      var testStub = Object.create(MovieTicket);
      testStub.priceCalc("special", 1);
      expect(testStub.total).to.equal(8);
    });

    it("calculates the price of a matinee-price adult ticket", function() {
      var testStub = Object.create(MovieTicket);
      testStub.matinee = true;
      testStub.priceCalc("adult", 1);
      expect(testStub.total).to.equal(6.5);
    });

    it("calculates the price of a matinee-price child ticket", function() {
      var testStub = Object.create(MovieTicket);
      testStub.matinee = true;
      testStub.priceCalc("child", 1);
      expect(testStub.total).to.equal(2.5);
    });

    it("calculates the price of a matinee-price special ticket", function() {
      var testStub = Object.create(MovieTicket);
      testStub.matinee = true;
      testStub.priceCalc("special", 1);
      expect(testStub.total).to.equal(4.5);
    });
  });
});
