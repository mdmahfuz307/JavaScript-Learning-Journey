// Hoisting holo execution context ar creation fez e variable and function er jrno Memory Creation korar process and oi process ar mardhome variable ar memory creation ar pore variable tah undefined hye jai and function ar jrno function defination ta memory er ekta address e chole jai tar refarance tah oi particular execution context ar stack e vorti hye jai jeta amra executon context dekhesi


/* Hoisting is JavaScript's default behavior of moving declarations to the top.
*/


x = 5;  /* assignment  {var use krle print krle tikh ei asbe ar karon hlo var x tokhon hoisting hye opor e uthe jai mne opor e giye declare kore and memory te ekta jaiga rakhe dei and oi khane (x = undefined) undefined rekhe dei}

--> ar jdi var er jaigai let ba Const use kri ta hle hoisting kore ba opor e nye jai kintu (x = undefined) tah kore na let use krle ai karon e opor e nye jai kintu memory te jaigai nei na {ai obosta take bole (Temporal dead zone)}jar karon e Refarence Error dbe

*/


console.log(x);

var x; //declare