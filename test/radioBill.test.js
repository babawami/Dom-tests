describe("radioBill,Select call or sms and it should add amount of sms cost or call cost", function(){
  it("Select call radio button and it should return value of calls only", function(){
var selectBill = calculateRadio();
selectBill.count('call');
selectBill.count('call');
selectBill.count('call');
selectBill.count('sms');
assert.equal(selectBill.callsTotal(),8.25);
});
it("Select sms radio button and it should return value of sms only", function(){
var selectBill = calculateRadio();
selectBill.count('sms');
selectBill.count('sms');
selectBill.count('call');
selectBill.count('sms');
assert.equal(selectBill.smsTotal(),2.25);
});
it("add sms total and calls total it should return total value ", function(){
var selectBill = calculateRadio();
selectBill.count('sms');
selectBill.count('sms');
selectBill.count('call');
selectBill.count('sms');
assert.equal(selectBill.combineTotal(),5.00);
});
it("return no amount when other values are entred besides call or sms ", function(){
  var selectBill = calculateRadio();
  selectBill.count('sns');
  selectBill.count('sns');
  selectBill.count('calls');
  selectBill.count('smss');
  assert.equal(selectBill.combineTotal(),0.00);
});

  })
