/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Dustin Craven
      Date:   3/10/2024

      Filename: project07-01.js
*/
"use strict";

//Declare and initialize variable pointing to form object
let signupForm = document.getElementById("signup");

//Event listener to prevent form from submitting until after the entered password is validated
signupForm.addEventListener("submit", function(e) {
   //Declare and initialize variables to get the value of the password input and a pointer to the error message feedback ID
   let pwd = document.getElementById("pwd").value;
   let feedback = document.getElementById("feedback");

   //Prevent form from submitting when submit button is clicked
   e.preventDefault();

   //Declare and itialize variables storing regular expressions to use for password validation
   let regex1 = /[A-Z]/;
   let regex2 = /[0-9]/;
   let regex3 = /[!\$#%]/;

   //Change text of feedback when the password entered doesn't meet the required parameters and sumbit the form when the entered password is valid
   if(pwd.length < 8) {
    feedback.textContent = "Your password must be at least 8 characters."
   }
   else if(!regex1.test(pwd)) {
    feedback.textContent = "Your password must include an uppercase letter.";
   }
   else if(!regex2.test(pwd)) {
    feedback.textContent = "Your password must include a number.";
   }
   else if(!regex3.test(pwd)) {
    feedback.textContent = "Your password must include on of the following: !$#%"
   }
   else {
    document.forms.signup.submit();
   }
}
);