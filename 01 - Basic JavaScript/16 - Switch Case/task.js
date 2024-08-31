// Task 5 - input a letter and check it is vowel or consonant using switch

let letter = "F"

switch (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        console.log(letter, "is a Vowel.");
        break;
        default:
        console.log(letter, "is a Consonant.");
        break;
}