$(function() {
  // hide the story from the view
  $("#story").hide();

  // event handler
  $("#btn-click").click(function(e){

    // grab the values from input box then append in Domain object model (DOM)
    $(".person").empty().append($("input.person").val());
    $(".adjective").empty().append($("input.adjective").val());
    $(".noun").empty().append($("input.noun").val());
    $(".insect").empty().append($("input.insect").val());
    $(".noun2").empty().append($("input.plural-noun").val());
    $(".verb").empty().append($("input.verb").val());


    // show the story
    $("#story").show();

    $(".review-grammar").hide();

    // empty the form's values
    $(':input').val('');

    // hide the questions
    $("#questions").hide();
  });

  $("#btn-replay").click(function(e){
    $("#questions").show();
    $("#story").hide();
  });



});


// $ dollar sign in the button click is a jquery constructor, it tells the browser that the
// code within the paranthesis is jQuery.


// $("#btn-click").click(function(e) {
// this is the event, this initiates the process, running the code in the remainder of the function.
// the remaining JavaScript will not run until there is a button click.



// var input = $("input").val()
// this sets a vriable called input, while .val fetches the value from the input.

// console.log(input)
// displays the word to the end user via the JavaScript console.


// DOM Document Object Model

  // event handler (line 1)
  // grab the values from the input boxes, then append them to the DOM (line 2)