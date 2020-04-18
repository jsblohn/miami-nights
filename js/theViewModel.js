/*
===============================================================================
; Title:  theViewModel.js
; Author: Jeff Shepherd, Janet Blohn
; Modified By:
; Date:   3/14/2020
; Description: The ViewModel for the JavaScript Quiz.
; The ViewModel should handle data and behavior. It applies knockout observables
; (data bindings), exposes functions, takes input from view and places on model
; and vice versa, triggers events on view, and manipulates the model.
;==============================================================================
*/

function ViewModel(model) {

  "use strict";

  //quiz is the data
  let quiz = model.getData();

  let observables = {
    userAnswer1: ko.observable(quiz[0].userAnswer),
    userAnswer2: ko.observable(quiz[1].userAnswer),
    userAnswer3: ko.observable(quiz[2].userAnswer),
    userAnswer4: ko.observable(quiz[3].userAnswer),
    userAnswer5: ko.observable(quiz[4].userAnswer),
    userAnswer6: ko.observable(quiz[5].userAnswer),
    userAnswer7: ko.observable(quiz[6].userAnswer),
    userAnswer8: ko.observable(quiz[7].userAnswer),
    userAnswer9: ko.observable(quiz[8].userAnswer),
    userAnswer10: ko.observable(quiz[9].userAnswer)
  };

  this.getObservables = function () {
    return observables;
  };

  function setAnswers() {
    let num = 1;
    quiz.forEach((item) => {
      item.setUserAnswer(observables["userAnswer" + num]());
      console.log("Item ID: " + item.id + " Value: " + item.userAnswer);
      num++;
    });
  }

  this.report = function () {
    setAnswers();
    let aScore = getUserScore();
    let aRank = getRank(aScore);
    return {
      score: aScore,
      rank: aRank
    };
  };

  function getUserScore() {
    let maxScore = 10;
    let score = 0;
    quiz.forEach((item) => {
      if (item.isCorrect()) {
        score++;
      }
    });
    return ((score / maxScore) * 100);
  }

  function getRank(score) {
      let rank = "";
      if (score > 79) {
        rank = "expert!";
      } else if (score > 59) {
        rank = "novice.";
      } else {
        rank = "beginner."
      }
      return rank;
  }

  this.buildHtml = function () {
    quiz.forEach(item => {
      document.getElementById("innerCarousel")
        .insertAdjacentHTML("beforeend", getQuestionHTML(item));
    });
  };

  function getQuestionHTML(item) {
    let output =
      `<div id="question${item.id}" class="carousel-item text-light list-group-flush">

    ${item.id}. ${item.question}

    <ul>
      <li>
        <label class="btn text-light">
          <input type="radio" name="question${item.id}" value="a" data-bind="checked: userAnswer${item.id}">
          ${item.possibleAnswers.a}
        </label>
      </li>
      <li>
        <label class="btn text-light">
          <input type="radio" name="question${item.id}" value="b" data-bind="checked: userAnswer${item.id}">
          ${item.possibleAnswers.b}
        </label>
      </li>
      <li>
        <label class="btn text-light">
        <input type="radio" name="question${item.id}" value="c" data-bind="checked: userAnswer${item.id}">
          ${item.possibleAnswers.c}
        </label>
      </li>
    </ul>
    <br>
    <p>You selected <span data-bind="text: userAnswer${item.id}"></span></p>

    </div>`;
    return output;
  }

  this.buildSummary = function () {
    quiz.forEach(item => {
      document.getElementById("summaryTableBody")
        .insertAdjacentHTML("beforeend", getSummaryHTML(item));
    });
  };

  function getSummaryHTML(item) {
    let mark = getSymbol(item.isCorrect());
    let correctAnswerText = item.possibleAnswers[item.correctAnswer];
    let userAnswerText = "Skipped";
    if (item.userAnswer) {
      userAnswerText = item.possibleAnswers[item.userAnswer];
        }
    let output =
      `${(mark)}
      <td></td>
      <td>${item.id}</td>
       <td>${item.question}</td>
       <td>${correctAnswerText}</td>
       <td>${userAnswerText}</td>
  `; 
    return output;
  }
  function getSymbol(right) {  
    console.log(right);
    if (right) {
    return `<td class="fa fa-check fa-lg"></td`;
    } else {
      return `<td class="fa fa-times fa-lg"></td`;
   }}
}