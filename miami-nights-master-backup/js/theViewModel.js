/*
===============================================================================
; Title:  theModel.js
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

    <p>You selected <span data-bind="text: userAnswer${item.id}"></span></p>

    </div>`;
    return output;
  }

  this.report = function () {
    let num = 1;
    quiz.forEach((item) => {
      item.setUserAnswer(observables["userAnswer" + num]());
      console.log("Item ID: " + item.id + " Value: " + item.userAnswer);
      num++;
    })
  }

};
