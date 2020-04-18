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

  $("#submit").click( () => {
    const result = viewModel.report();
    viewModel.buildSummary();
    let animation = new ResultAnimation(result.score);
    animation.startAnimation();
    $("#result").html(result.score + "% correct.  Rank: " + result.rank);
    $("#myCarousel").hide(400);
    $("#submit").hide();
    $("#retry").fadeIn(1000);
    $(".summary").show(400);
  });

  $("#retry").click( () => {
    location.reload();
  });
});
