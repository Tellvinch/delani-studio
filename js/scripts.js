$(document).ready(function() {
    $("#design").click(function() {
        $("#design").toggle();
        $(".design").toggle();

    })
    $("#development").click(function() {
        $("#development").toggle();
        $(".development").toggle();

    })
    $("#product").click(function() {
        $("#product").toggle();
        $(".product").toggle();

    })
    $(".design").click(function() {
        $(".design").toggle();
        $("#design").toggle();

    })
    $(".development").click(function() {
        $(".development").toggle();
        $("#development").toggle();

    })
    $(".product").click(function() {
        $(".product").toggle();
        $("#product").toggle();

    })


    


})