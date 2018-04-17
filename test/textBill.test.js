describe("textBill,Enter call or sms and it should add amount of sms cost or call cost", function(){
  it("input call string and it should return value of calls only", function(){
var dispalyValue = totalVar();
dispalyValue.calulateValue('call');
dispalyValue.calulateValue ('call');
dispalyValue.calulateValue ('call');
dispalyValue.calulateValue ('sms');
assert.equal(dispalyValue.callsValue(),8.25);
  });
  it("input sms string and it should return value of sms only", function(){
var dispalyValue = totalVar();
dispalyValue.calulateValue('sms');
dispalyValue.calulateValue ('sms');
dispalyValue.calulateValue ('call');
dispalyValue.calulateValue ('sms');
assert.equal(dispalyValue.smsValue(),2.25);
  });
  it("input sms string and call string it should return total value ", function(){
var dispalyValue = totalVar();
dispalyValue.calulateValue('sms');
dispalyValue.calulateValue ('sms');
dispalyValue.calulateValue ('call');
dispalyValue.calulateValue ('sms');
assert.equal(dispalyValue.totalValue(),5);
  });
  it("return no amount when other values are entred besides call or sms ", function(){
var dispalyValue = totalVar();
dispalyValue.calulateValue('scam');
dispalyValue.calulateValue ('can');
dispalyValue.calulateValue ('scam');
dispalyValue.calulateValue ('cam');
assert.equal(dispalyValue.totalValue(),0);
  });
});

// escribe("calculateBill,take calls cost and sms cost return total cost",function(){
//   it("enter calls only and return total cost for calls captured",function(){
//     assert.equal(calculateBillEvent("call"), 2.75);
//   });
