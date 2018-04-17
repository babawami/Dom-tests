describe("calculateBill,take calls cost and sms cost return total cost",function(){
  it("enter calls only and return total cost for calls captured",function(){
    assert.equal(calculateBillEvent("call"), 2.75);
  });
  it("enter sms only and return total cost for sms captured",function(){
    assert.equal(calculateBillEvent("sms"), 0.75);
  });
  it("enter sms and calls and return total cost",function(){
    assert.equal(calculateBillEvent("sms,call,call"), 6.25);
  });
});
