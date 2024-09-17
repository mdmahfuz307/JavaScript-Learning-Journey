// getElementById

document.getElementById("header-ID").innerHTML = "Hello ID"


// Alternative and Best practice

let headerId = document.getElementById("header-ID");
headerId.innerHTML = "MY ID is 22135981";

// getElementsByTagName
let tags1 = document.getElementsByTagName("h2")[0].innerHTML = "This is Manipulating Tag 1"
let tags2 = document.getElementsByTagName("h2")[1].innerHTML = "This is Manipulating Tag 2"
let tags3 = document.getElementsByTagName("h2")[2].innerHTML = "This is Manipulating Tag 3"


// getElementsByClassName
document.getElementsByClassName("header-class")[0].innerHTML = "Hello New Class";