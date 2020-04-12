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
    $(".pic").hover(function(){
        $(".text4", this).toggle();
    },function(){
        $(".text4", this).toggle();
    });


    $("#form").submit(function(event){
        event.preventDefault();
        var name=$("input#name").val();
        var email=$("input#email").val();
        var message=$("input#message").val()
        if($("input#name").val() && $("input#email").val()){
            alert("Awesome! "+  name +" we have gotten your message thanks for the feedback.");
        }
        

    })


    


})