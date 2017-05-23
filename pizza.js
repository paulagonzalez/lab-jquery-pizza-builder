// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
  $(".btn-pepperonni").on("click", function(){
    $(".pricepepperoni").toggle();
    $(".pep").toggle();
  });
  $(".btn-green-peppers").on("click", function(){
    $(".pricegreen-pepper").toggle();
    $(".green-pepper").toggle();
  });
  $(".btn-mushrooms").on("click", function(){
    $(".pricemushroom").toggle();
    $(".mushroom").toggle();
  });


});
