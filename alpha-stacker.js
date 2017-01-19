// Create an array that contains the letters of the alphabet
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lettersStacked = '';

// The stackLetter function should accept the array as the sole argument
function stackLetters(theAlphabetArray) {
  for (let i = 0; i < alphabet.length; i++) {
    lettersStacked += alphabet[i];
    console.log(lettersStacked);
    if((i + 1) % 3 === 0) {
      lettersStacked += ' ';
      console.log(lettersStacked);
    }
  }
}

// Invoke the function and pass in the array
stackLetters(alphabet);
