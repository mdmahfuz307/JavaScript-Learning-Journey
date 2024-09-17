function myMessage1(){
    alert("I a  Button 1");
}

function myMessage2(){
    alert("I am Button 2");
}


function myMessage3(){
    alert("I am Paragraph");
}


function myMessage4(){
    var myVar = document.querySelector("#paraID");
    myVar.innerHTML = "You have clicked on button1";
}




function myImage1() {
    document.querySelector("#imageId").src = "images/pic1.jpg";
}


var myVir = document.querySelector("#imageId");
function myImage2() {
    myVir.src = "images/pic2.jpg";
}