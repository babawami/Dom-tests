//get a reference to the calculate button
var calculateBtnElement = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
var billStringElement = document.querySelector(".billString");
//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once dfone looping over all the entries - display the total onto the screen in the billTotal element
//link the function to a click event on the calculate button

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




// Dom function
function calculateBtnClicked(){

  // get the string entered in the textArea
  var billString = billStringElement.value;
  //split the string
  var billItems = billString.split(",");
  // a variable for the total phone bill.

  //loop over all the bill items


  //round to two decimals
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
