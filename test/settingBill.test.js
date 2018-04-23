describe("settingBill,Select call or sms and it should add amount of sms cost or call cost", function(){
  it("capture interger call value return the interger", function(){
    var enteredBill = calculatebill();
    enteredBill.callValueSet(1)
    assert.equal(enteredBill.updatedCallValue(),1);
  });
    it("capture interger sms value return the interger", function(){
      var enteredBill = calculatebill();
      enteredBill.smsValueSet(2)
      assert.equal(enteredBill.updatedSmsValue(),2);
    });
    it("capture interger warning level value return the interger", function(){
      var enteredBill = calculatebill();
      enteredBill.setWarningLevel(10)
      assert.equal(enteredBill. updatedwarningCost(),10);
    });
    it("capture interger critical level value return the interger", function(){
      var enteredBill = calculatebill();
      enteredBill.setcriticalLevel(20)
      assert.equal(enteredBill.updatedcriticalCost(),20);
    });
    it("select call radio button and it should take call cost value and add the amount only", function(){
      var enteredBill = calculatebill();
      var addBill = enteredBill.callValueSet(1);
      enteredBill.billCalculate("call");
      enteredBill.billCalculate("call");
      enteredBill.billCalculate("call");
      enteredBill.billCalculate("sms");
      assert.equal(enteredBill.addCalls(addBill),3);
    });
    it("It should take in total calls cost and total cost of sms return overall cost", function(){
    var enteredBill = calculatebill();
    var addBill = enteredBill.callValueSet(2); //inputed call value
    enteredBill.billCalculate("call");
    var calls = enteredBill.addCalls(addBill); // returns calls value
    var addboth = enteredBill.totalBill(calls); // calulates total amount.
    assert.equal(enteredBill.TotalOverAll(addboth),2);
    });
  });
