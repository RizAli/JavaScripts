$(function() {
  console.log("Whee!")

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

  // event handler
$("#btn-click").click(function(e) {
  var input = $("input").val()
  console.log(input)
  $(".results").empty().append(input);
  });
});
