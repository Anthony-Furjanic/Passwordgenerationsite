// Assignment Code
var generateBtn = document.querySelector("#generate");
// need collections to keep track of lower case letters uppercase letters, numbers and symbols
var numbers= ["1","2","3","4","5","6","7","8","9","0"]
var lowercase= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var special= ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"]

// Write password to the #password input
function writePassword() {
    
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// new function add here to generate pw
function generatePassword(){
// create variables for if else statements
  let passwordlength=parseInt (prompt("How long would you like your password to be? Choose between 8 and 128 characters"))
  if(passwordlength < 8 || passwordlength > 128){
    alert("Error pick a number between 8 and 128");
    // end function with empty value
    return "";}
  let Uppercaseletters=confirm("Would you like Uppercase characters in your password?")
  let lowercaseletters=confirm("Would you like lowercase letters in your password?")
  let specialcharacters=confirm("Would you like special characters in your password?")
  let number= confirm("Would you like to include numbers in your password?")

// need several if else statements as well as confirmation prompt to build collection
var pickTheseLetters = [] // I don't have letters yet

if (Uppercaseletters===true) {
  pickTheseLetters = pickTheseLetters.concat(uppercase);
} 
if (lowercaseletters===true) {
  pickTheseLetters = pickTheseLetters.concat(lowercase);  
}
if (specialcharacters===true) {
  pickTheseLetters = pickTheseLetters.concat(special);
}
if (specialcharacters===true) {
  pickTheseLetters = pickTheseLetters.concat(numbers);
}

var pass= "";

// for loops for generating pw


for (var i = 0; i<passwordlength; i++){
  pass = pass + pickTheseLetters[Math.floor(Math.random()*
    (pickTheseLetters.length))];
console.log(pass);

  }
  return pass 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);