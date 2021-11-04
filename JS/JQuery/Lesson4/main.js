// https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_ajax_load_callback
$(function(){
    $("button").click(function(){
      $("#div2").load("demo_test.txt .africa");
    });
  });