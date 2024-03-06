/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Dustin Craven
      Date:   3/3/2024

      Filename: project06-03.js
*/
"use strict";

//useShip variable initialization to useShip element ID and EventListener added to the useShip element ID
let useShip = document.getElementById("useShip");
useShip.addEventListener("click", copyShippingToBilling);

//Function that copies values from shipping address into fields for billing address
function copyShippingToBilling() {
  //If the use shipping address checkbox is checked, copy fields into billing address
  if(useShip.checked){
    document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
    document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
    document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
    document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
    document.getElementById("cityBill").value = document.getElementById("cityShip").value;
    document.getElementById("countryBill").value = document.getElementById("countryShip").value;
    document.getElementById("codeBill").value = document.getElementById("codeShip").value;
    document.getElementById("stateBill").selectedIndex = document.getElementById("stateShip").selectedIndex;
  }
}

//Declare and Initialize variables for form element node list, length of the node list, and pointer to errorBox element ID
let formElements = document.querySelectorAll("input[type='text']");
let fieldCount = formElements.length;
let errorBox = document.getElementById("errorBox");

//Loop through the form's elements and add an event listener to handle invalid inputs
for(let i=0; i<fieldCount; i++) {
  formElements[i].addEventListener("invalid", showValidationError);
}

function showValidationError(evt) {
  evt.preventDefault();
  errorBox.textContent = "Complete all highlighted fields";
}