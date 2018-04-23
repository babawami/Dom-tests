
//logic function
function calculateRadio(){
  var callsTotalTwo = 0;
  var smsTotalTwo = 0;
  var totalCostTwo = 0;

function count(billType){
  if (billType === "call"){
      callsTotalTwo += 2.75
  }

  if (billType === "sms"){
      smsTotalTwo += 0.75;
  }
}

return {
  count,

  callsTotal: function(){
    return callsTotalTwo.toFixed(2);
  },

  smsTotal: function(){
    return smsTotalTwo.toFixed(2);
  },

  combineTotal: function(){
    totalCostTwo = callsTotalTwo + smsTotalTwo;
    return totalCostTwo.toFixed(2);
  },
  }
}

var selectBill = calculateRadio();// instance


//////////////////////////////////////////////////////////////////////////
// get a reference to the sms or call radio buttons
var billItemTypeRadioElem = document.querySelector(".billItemTypeRadio");
var callsTotalElemTwo = document.querySelector(".callTotalTwo");
var  smsTotalElemTwO = document.querySelector(".smsTotalTwo");
var  totalCostElemTwo = document.querySelector(".totalTwo");
//get a reference to the add button
var radioTotalAddBtn = document.querySelector(".radioBillAddBtn");
//////////////////////////////////////////////////////////////////////

// Dom functions
function radioBillTotal(){
  //To get the bill type to add from the radio button
  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value;
    // billItemType will be 'call' or 'sms'
}
       var billItemSelected = selectBill.count(billItemType);
       var totalCostTwo = selectBill.combineTotal()
    //update the totals that is displayed on the screen.
    callsTotalElemTwo.innerHTML =selectBill.callsTotal();
    smsTotalElemTwO.innerHTML = selectBill.smsTotal();
    //var totalCostTwo = callsTotalTwo + smsTotalTwo;
    totalCostElemTwo.innerHTML = selectBill.combineTotal()

    //color the total based on the criteria
   if (totalCostTwo >= 50){
       // adding the danger class will make the text red
       totalCostElemTwo.classList.add("danger");
   }
    if (totalCostTwo >= 30){
       totalCostElemTwo.classList.add("warning");
   }
}
//add an event listener for when the add button is pressed
radioTotalAddBtn.addEventListener('click', radioBillTotal);
