// get a reference to the textbox where the bill type is to be entered
 var billTypeTextElem = document.querySelector(".billTypeText");
 var callsTotalElem = document.querySelector(".callTotalOne");
 var  smsTotalElem = document.querySelector(".smsTotalOne");
 var  totalCostElem = document.querySelector(".totalOne");
//get a reference to the add button
var textTotalAddBtn = document.querySelector(".addToBillBtn");
//create a variable that will keep track of the total bill
// these variables are global and defined outside of the Add button event listener.



// greg
// function totalVar(){
//   var callsTotal = 0;
//   var smsTotal = 0;
//   var totalBillS = 0;
//
//   function cal(value){
//     if(value ==="call"){
//       callsTotal += 2.75;
//     }
//    return callsTotal
//   }
//
//    function smses(value){
//     if(value ==="sms"){
//       smsTotal += 0.75;
//     }
//
//      return smsTotal
//    }
//
//
//
//
//   function getTotal(){
//    totalBillS = callsTotal + smsTotal;
//
//     return totalBillS;
//   }
//
//   return {
//     callValue : cal,
//     getT: getTotal,
//     smsValue: smses,
//   }
// }
// var display =totalVar();
//
// display.displayTotal("call");
// display.displayTotal("call");
// display.displayTotal("call");
// display.displayTotal("sms");
// display.smsValue('sms')
// display.smsValue('sms')
// display.callValue('call')
// display.callValue('call')
// display.callValue('call')
//
// console.log(display.smsValue());
// console.log(display.callValue());
// console.log(display.getT());

function totalVar(){
  var callsTotal = 0;
  var smsTotal = 0;
  var totalBillS = 0;

// do logic calculations
  function cal(value){
    if(value ==="call"){
      callsTotal += 2.75;
    }

    else if(value ==="sms"){
      smsTotal += 0.75;
    }
   }

  // give access to the functions and variables
  return {
    calulateValue : cal,

    smsValue: function(){
     return  smsTotal;
    },

    callsValue: function(){
      return callsTotal ;
    },

    totalValue: function(){
      totalBillS = callsTotal + smsTotal;
      return totalBillS;
    }
  }
}







var logic = totalVar();

// Dom function
function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeTextElem.value.trim();
    // update the correct total

     billTypeEntered= logic.calulateValue(billTypeEntered);


    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = logic.callsValue().toFixed(2);
    smsTotalElem.innerHTML = logic.smsValue().toFixed(2);
  //  var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = logic.totalValue().toFixed(2);

   //  //color the total based on the criteria
   // if (totalCost >= 50){
   //     // adding the danger class will make the text red
   //     totalCostElem.classList.add("danger");
   // }
   // else if (totalCost >= 30){
   //     totalCostElem.classList.add("warning");
   // }
}
//add an event listener for when the add button is pressed
textTotalAddBtn.addEventListener('click', textBillTotal);

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
