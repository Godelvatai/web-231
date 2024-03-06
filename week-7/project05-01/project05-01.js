/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Dustin Craven
      Date:   2/25/24

      Filename: project05-01.js
*/

"use strict";

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions
let timeID;
let questionList = document.querySelectorAll("div#quiz input");

//countdown function to update quiz clock
function countdown() {
  if(timeLeft === 0) {
    //clear the timer interval
    clearInterval(timeID);

    //Read number of correct answers and display it to user
    let totalCorrect = checkAnswers();
    if(totalCorrect === correctAnswers.length) {
      alert("You've answered 100% of the questions correctly. Congratulations!")
    } else {
      alert("You answered "+totalCorrect+" out of "+correctAnswers.length+" correctly.")
      //Reset quiz
      timeLeft = quizTime;
      quizClock.value = timeLeft;
      document.getElementById("overlay").className = "hidequiz";
    }
  } else {
    timeLeft -= 1;
    quizClock.value = timeLeft;
  }
}

//Add onclick event handler to startQuiz object
document.getElementById("startquiz").addEventListener("click", function() {
  //Change class of overlay to show quiz to user
  document.getElementById("overlay").className = "showquiz";

  //Run countdown function on 1000 millisecond intervals
  timeID = setInterval(countdown, 1000);
});




















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;

   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }
   }
   return correctCount;
}

