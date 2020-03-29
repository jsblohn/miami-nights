/*
===============================================================================
; Title:  theModel.js
; Author: Jeff Shepherd, Janet Blohn
; Modified By:
; Date:   3/14/2020
; Description: The model (Data) for the JavaScript Quiz.
; Use for data and validation only
;==============================================================================
*/

function QuizModel() {
  "use strict";

  function Question(id, question, correctAnswer, possibleAnswers) {
    this.id = id; //string
    this.question = question; //string
    this.possibleAnswers = possibleAnswers; //answer object literal (string, string)
    this.correctAnswer = correctAnswer; //string
    this.userAnswer = ""; //string
  }

  Question.prototype.setUserAnswer = function (userAnswer) {
    this.userAnswer = userAnswer;
  };

  Question.prototype.isCorrect = function () {
    return this.userAnswer === this.correctAnswer;
  }

  // Present the questions for the quiz, one at a time
  this.getData = function () {
    return [new Question(
        "1", "The kinds of values that can be represented and manipulated in a \
        programming language are known as:", "b", {
          "a": "a) Variables",
          "b": "b) Types",
          "c": "c) Methods"
        }),

      new Question(
        "2", "What are used to contain the identifiers that are passed to a function?", "c", {
          "a": "a) Curly braces",
          "b": "b) Brackets",
          "c": "c) Parentheses"
        }),
        
      new Question(
        "3", "The three types of programming errors are:", "a", {
          "a": "a) Syntax, Runtime, and Logical",
          "b": "b) System, Runtime, and Logical",
          "c": "c) System, Grammatical, and User"
        }),
                
      new Question(
        "4", "Which method returns an array containing a subset of the elements of the array on which it is invoked?", "b", {
          "a": "a) Map",
          "b": "b) Filter",
          "c": "c) Slice"
        }),

      new Question(
        "5", "Which method transforms one array into another?", "a", {
          "a": "a) Map",
          "b": "b) Filter",
          "c": "c) Slice"
        }),
      new Question(
        "6", "How do developers gracefully handle runtime exceptions?", "c", {
          "a": "a) Try/Throw/Finally Statement",
          "b": "b) Try/Catch/Throw Statement",
          "c": "c) Try/Catch/Finally Statement"
        }),
               
      new Question(
        "7", "What are comma-separated lists of colon-separated name:value pairs known as?", "a", {
          "a": "a) Object Literals",
          "b": "b) Arrays",
          "c": "c) Variables"
        }),
        
      new Question(
        "8", "Object literals as functions are called:", "b", {
          "a": "a) Method objects",
          "b": "b) Constructor objects",
          "c": "c) Method functions"
        }),
        
      new Question(
        "9", "There are four ways to embed JavaScript code within HTML documents: Inline, external file, in an HTML event handler such as onClick, and in a URL that uses the special javascript: protocol.  Which are the most common?", "a", {
          "a": "a) Inline and external file",
          "b": "b) In an HTML event handler and a URL",
          "c": "c) External file and an HTML event handler"
        }),
        
      new Question(
        "10", "What is a predicate?", "c", {
          "a": "a) A function that returns an object",
          "b": "b) A function that returns an array",
          "c": "c) A function that returns a Boolean"
        }),
    ];
  }
}
