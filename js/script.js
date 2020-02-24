$("#submit").click(function (event) {
    event.preventDefault();
    var name = $("#name").val();
    var mail = $("mail").val();
    var text = $("#text").val();
    //var key = '43ab10333d46e19325f96d210ed40c49-us5';//
    if (name == "" || mail == "" || text == "") {
        alert("hi" + " " + name + " " + "we have recieved Your message .Thank you for reaching out to us")        } else {
        alert("please make sure you have filled in the form correctly")
            }
        })


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