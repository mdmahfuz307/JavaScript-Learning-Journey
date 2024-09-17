// Query Selector

// manipulate id content with query selector
document.querySelector("#pid").innerHTML = "Query selector id paragraph" 

// manipulate class content with query selector
document.querySelector(".piclass").innerHTML = "Query selector class paragraph"


// select a tags using query selector
document.querySelector("a").innerHTML = "My Home";

// select a tags inside ul list using query selector
document.querySelector("li a").innerHTML = "Contact Me";

// select a tags inside ul list using query selector
document.querySelector(".item a").innerHTML = "My Project";


// querySelectorAll
document.querySelectorAll("h2")[0].innerHTML = "Heading 1.1"
document.querySelectorAll("h2")[1].innerHTML = "Heading 1.2"