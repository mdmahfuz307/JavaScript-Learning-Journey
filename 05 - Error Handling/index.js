/*

The try statement defines a code block to run (to try).

The catch statement defines a code block to handle any error.

The finally statement defines a code block to run regardless of the result.

*/


try {
    dadalert("Welcome Fellow Geek!");
}
catch (err) {
    console.log(err);
}






// The finally statement lets you execute code, after try and catch, regardless of the result:

try{
    console.log("Try block starts here");
    //error -> reference error
    console.log(x);
    console.log("try block ends here");
}
catch(err){
    console.log("I am inside catch block");
    console.log("Your error is here: ",err);
}
finally{
    console.log("I will run everytime, as i am finally block")
}