$(document).click(function(){ 
    $(".design").click(function(){
        $("#design-hide").toggle();
        $("#design-show").toggle();
    })   
});

$(".dev").click(function(){
    $("#development-hide").toggle();
    $("#development-show").toggle();
});
$(".product").click(function(){
    $("#product-hide").toggle();
    $("#product-show").toggle();
 });