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
    id1: ko.observable(quiz[0].id),
    id2: ko.observable(quiz[1].id),
    id3: ko.observable(quiz[2].id),
    id4: ko.observable(quiz[3].id),
    id5: ko.observable(quiz[4].id),
    id6: ko.observable(quiz[5].id),
    id7: ko.observable(quiz[6].id),
    id8: ko.observable(quiz[7].id),
    id9: ko.observable(quiz[8].id),
    id10: ko.observable(quiz[9].id),

    userAnswer1: ko.observable(quiz[0].userAnswer),
    correctAnswer1: ko.observable(quiz[0].correctAnswer),
    userAnswer2: ko.observable(quiz[1].userAnswer),
    userAnswer3: ko.observable(quiz[2].userAnswer),
    userAnswer4: ko.observable(quiz[3].userAnswer),
    userAnswer5: ko.observable(quiz[4].userAnswer),
    userAnswer6: ko.observable(quiz[5].userAnswer),
    userAnswer7: ko.observable(quiz[6].userAnswer),
    userAnswer8: ko.observable(quiz[7].userAnswer),
    userAnswer9: ko.observable(quiz[8].userAnswer),
    userAnswer10: ko.observable(quiz[9].userAnswer),
    
    correctAnswer2: ko.observable(quiz[1].correctAnswer),
    correctAnswer3: ko.observable(quiz[2].correctAnswer),
    correctAnswer4: ko.observable(quiz[3].correctAnswer),
    correctAnswer5: ko.observable(quiz[4].correctAnswer),
    correctAnswer6: ko.observable(quiz[5].correctAnswer),
    correctAnswer7: ko.observable(quiz[6].correctAnswer),
    correctAnswer8: ko.observable(quiz[7].correctAnswer),
    correctAnswer9: ko.observable(quiz[8].correctAnswer),
    correctAnswer10: ko.observable(quiz[9].correctAnswer),

    points1: ko.observable(quiz[0].points)

  };
  
  this.getObservables = function () {
    return observables;
  };

  let observableA = ko.observableArray ([
    {id1: ko.observable(quiz[0].id), userAnswer1: ko.observable(quiz[0].userAnswer),
    correctAnswer1: ko.observable(quiz[0].correctAnswer)},
    {userAnswer2: ko.observable(quiz[1].userAnswer),
      correctAnswer2: ko.observable(quiz[1].correctAnswer)},
    {userAnswer3: ko.observable(quiz[2].userAnswer),
      correctAnswer3: ko.observable(quiz[2].correctAnswer)},
    {userAnswer4: ko.observable(quiz[3].userAnswer),
      correctAnswer4: ko.observable(quiz[3].correctAnswer)},
    {userAnswer5: ko.observable(quiz[4].userAnswer),
      correctAnswer5: ko.observable(quiz[4].correctAnswer)},
    {userAnswer6: ko.observable(quiz[5].userAnswer),
      correctAnswer6: ko.observable(quiz[5].correctAnswer)},
    {userAnswer7: ko.observable(quiz[6].userAnswer),
      correctAnswer7: ko.observable(quiz[6].correctAnswer)},
    {userAnswer8: ko.observable(quiz[7].userAnswer),
      correctAnswer8: ko.observable(quiz[7].correctAnswer)},
    {userAnswer9: ko.observable(quiz[8].userAnswer),
      correctAnswer9: ko.observable(quiz[8].correctAnswer)},
    {userAnswer10: ko.observable(quiz[9].userAnswer),
      correctAnswer10: ko.observable(quiz[9].correctAnswer)}
    ]);
    
  this.getObservableA = function () {
    return observableA;
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

    <p>You selected &nbsp;<span data-bind="text: userAnswer${item.id}"></span></p>

    </div>`;
    return output;
  }

  this.report = function () { // Added correctAnswer 4/4
    let num = 1;
    quiz.forEach((item) => {
      item.setUserAnswer(observables["userAnswer" + num]());
      console.log("Item ID: " + item.id + " Value: " + item.userAnswer + " Right: " + item.correctAnswer + item.points);
      num++;
    })
  }

};
