console.log('Hello Console');

let input1 = document.getElementById('myText');
let input2 = document.getElementById('myColor');
let valid = true;
$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myHeader").text($("#myText").val() + " " + $("#myColor").val());
    })
});
