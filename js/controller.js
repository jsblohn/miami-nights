let model = new QuizModel();
let viewModel = new ViewModel(model);
viewModel.buildHtml();
let observables = viewModel.getObservables();
ko.applyBindings(observables);

$(function () {

  $("#begin").click(() => {
    $(".instructions").hide(400);
    $("#begin").hide();
    $("#submit").fadeIn(1000);
    $("#myCarousel").css("display", "block");
    $("#question1").addClass("active");
  });

  $("#submit").click(function () {
    $("#myCarousel").hide(400);
    $(".summary").show(400);
    $("#submit").fadeOut(200);
    $("#retry").fadeIn(1000);
    viewModel.report();
  });

  $("#retry").click( () => {
    location.reload();
  });
});