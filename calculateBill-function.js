
// logic function
function calculateBillEvent(billCaptured){
  var billItem = billCaptured.split(",");
   var billTotal = 0;
  for (var i=0;i<billItem.length;i++){
  var billCount = billItem[i].trim();

      if (billCount === "call"){
          billTotal += 2.75;
      }

      if (billCount === "sms"){
          billTotal += 0.75;
      }
  }
  return billTotal.toFixed(2);
}

///////////////////////////////////////////////////////////////////
//get a reference to the calculate button
var calculateBtnElement = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
var billStringElement = document.querySelector(".billString");
//////////////////////////////////////////////////////////////


// Dom function
function calculateBtnClicked(){

  // get the string entered in the textArea
  var billString = billStringElement.value;
  //call logic function
  var roundedBillTotal = calculateBillEvent(billString);
  billTotalElement.innerHTML = roundedBillTotal;
// change color when amount hits 20-30 cost
  if ( roundedBillTotal >= 20){
    billTotalElement.classList.add("warning");
  }

  if ( roundedBillTotal < 20){
    billTotalElement.classList.remove("warning");
  }
// change color when amount hits 20-30 cost
      if(roundedBillTotal > 30  ){
    billTotalElement.classList.add("danger");
  }

  if(roundedBillTotal < 30  ){
  billTotalElement.classList.remove("danger");
 //return billTotalElement.classList.add("warning");
}
}
// add event listener
calculateBtnElement.addEventListener('click', calculateBtnClicked);
