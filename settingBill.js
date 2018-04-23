// get a reference to the sms or call radio buttons
var billItemElem = document.querySelector(".billItemTypeWithSettings");
var callTotalSettingsElem = document.querySelector(".callTotalSettings");
var  smsTotalSettingElem = document.querySelector(".smsTotalSettings");
var  totalSettingElem = document.querySelector(".totalSettings");
// get refences to all the settings fields
var callCostSettingElem = document.querySelector(".callCostSetting");
var  smsCostSettingElem = document.querySelector(".smsCostSetting");
var  warningLevelSettingElem = document.querySelector(".warningLevelSetting");
var criticalLevelSettingElem = document.querySelector(".criticalLevelSetting");

//get a reference to the add button
var addTwoBtn = document.querySelector(".addTwo");
//get a reference to the 'Update settings' button
var updateSettingBtn = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
function calculatebill(){
var callValue = 0;
var smsValue = 0;
var totalcalls = 0;
var totalsms =0;
var criticalCost = 0;
var warningCost = 0;
var totalCostSet =0;

      // logic function for settingBill//
      function setCallValue(updateCall){
      if(updateCall  !== ""){
      callValue = parseFloat(updateCall);
      }
      }

      function setSmsValue(updateSms){
       if(updateSms !== ""){
        smsValue = parseFloat(updateSms);
      }
      }

       function warningLevelSet(updateWarning){
       warningCost = parseFloat(updateWarning);

      }

       function criticalLevelSet(updateCritical){
       criticalCost = parseFloat(updateCritical);
      }

  //logic function for billtotal//
  function calculateValues(billItemTypeSet){
  if (billItemTypeSet === 'call'){
  totalcalls += callValue;
  }

  else if( billItemTypeSet === 'sms'){
  totalsms += smsValue;
  }
  }

  function addTotals(){
    totalCostSet= totalsms + totalcalls;
  }

  return{
    //how to get and calculate
    callValueSet:setCallValue,
    smsValueSet:setSmsValue,
    setWarningLevel:warningLevelSet,
    setcriticalLevel:criticalLevelSet,
    billCalculate:calculateValues,
    totalBill:addTotals,

    //return variables
    updatedCallValue:function(){
     return callValue
    },
     updatedSmsValue:function(){
     return  smsValue
    },
     updatedcriticalCost:function(){
     return  criticalCost
    },
     updatedwarningCost:function(){
     return   warningCost
    },
     addCalls:function(){
     return  totalcalls.toFixed(2)
    },
    addSms:function(){
     return  totalsms.toFixed(2)
    },
     TotalOverAll:function(){
     return  totalCostSet.toFixed(2)
    }

  }

}

  var setBill=calculatebill()



function billTotal(billItemElem){
  //To get the bill type to add from the radio button
  var pickedRadioBtn = document.querySelector("input[name='billItemTypeWithSetting']:checked");
if (pickedRadioBtn){
    var billItemTypeWithSet= pickedRadioBtn.value;
    // billItemType will be 'call' or 'sms'
    setBill.billCalculate(billItemTypeWithSet);
}
     setBill.totalBill();
     var overAllCost = setBill.TotalOverAll();
     var warningPoint= setBill.updatedwarningCost();
     var crticalPoint= setBill. updatedcriticalCost();
     callTotalSettingsElem.innerHTML = setBill.addCalls();
     smsTotalSettingElem.innerHTML = setBill.addSms();
     totalSettingElem.innerHTML= setBill.TotalOverAll();
  //color the total based on the criteria
     if( overAllCost  >= warningPoint ){
       totalSettingElem.classList.add("warning");
     }
   if( overAllCost >= crticalPoint ){
        totalSettingElem.classList.add("danger");
        addTwoBtn.disabled = true;
      //  alert("you can no longer add");
     }

}
// create a variables that will keep track of all three totals.
addTwoBtn.addEventListener("click" , billTotal);
//add an event listener for when the 'Update settings' button is pressed

function settingClick(){
  //display amount entered by user
 var updateCall = callCostSettingElem.value;
 setBill.callValueSet(updateCall);
 setBill.updatedCallValue();

  var updateSms = smsCostSettingElem.value;
  setBill.smsValueSet(updateSms);
  setBill.updatedSmsValue();

  var updateCritical =  criticalLevelSettingElem.value;
  setBill.setcriticalLevel(updateCritical);


  var updateWarning = warningLevelSettingElem.value;
  setBill.setWarningLevel( updateWarning);

  var overAllCost = setBill.TotalOverAll();
     var warningPoint= setBill.updatedwarningCost();
     var crticalPoint= setBill. updatedcriticalCost();
  if( overAllCost  < warningPoint ){
       totalSettingElem.classList.remove("warning");
     }
     if( overAllCost < crticalPoint ){
        totalSettingElem.classList.remove("danger");
        addTwoBtn.disabled = false;
      //  alert("you can no longer add");
     }
 }
updateSettingBtn.addEventListener("click" , settingClick);
//add an event listener for when the add button is pressed
