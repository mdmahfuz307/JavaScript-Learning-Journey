let marks = 55;

if (marks > 100 || marks < 0) {
    console.log("Invalid marks");
}

else if (marks >= 80) {
    console.log("A+");
}

else if (marks >= 70 && marks <= 79) {
    console.log("A");
}

else if (marks >= 60 && marks <= 69) {
    console.log("A-");
}

else if (marks >= 50 && marks <= 59) {
    console.log("B");
}

else if (marks >= 40 && marks <= 49) {
    console.log("C");
}

else if (marks >= 33 && marks <= 39) {
    console.log("D");
}

else {
    console.log("F"); 
}