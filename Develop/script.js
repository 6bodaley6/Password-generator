
//array with numbers for characters,numbers,symbols//
for (statement 4)

var generatePassword = function () {
  //promt for user to select fields for password//
  var lengthInput = prompt("Enter Password Length")
  var length = parseInt (lengthInput)
  console.log (length)
  };
  //use same method to use confirms to get whether they want lower case upper case , symbols, once i have those i can use those values to choose to make an array of all possibilitys make my password randomly with Math.random//

  var generateUpperCase = function () {
    var upperCaseInput = window.prompt("Want an UpperCase?")
    if   
}  
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","n","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var numbers = ["1","2","3","4","5","6","7","8","9","10"];

var symbol = ["!","@","#","$","%","^","&","*","(",")",];

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//if lowerCase you replace the first if uppercase you replace the 3rd if specialcharacter replace4 if number 

//hello world
// Special characters for the function created
const specialCharacters = "!@#$%^&*()";
const generateButton = document.getElementById('generateBtn')
generateButton.addEventListener('click', writePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Prompts that come up after you click generate password
//prompt for user to select fields for password
var generatePassword = function () { 
    var lengthInput = prompt("Enter Password Length")
    var length = parseInt (lengthInput)
    console.log (length)
  };
  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

  var special = confirm("Do you want special characters in your password?");
 // var generatePassword = function () {
    //promt for user to select fields for password//
   // var lengthInput = prompt("Enter Password Length")
    //var length = parseInt (lengthInput)
    //console.log (length)
    //};

  // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
  var minimumCount = ;


  // Empty minimums for numbers, lowerCases, upperCases & specialCharacters

  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";


  // Generator functions**
  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 8 + 48));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

};

  // Checks to make sure user selected ok for all and uses empty minimums from above

  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;

  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;

  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;

  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;

  }

  // empty string variable for the for loop below
  var randomPasswordGenerated = "";

  // loop getting random characters
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;

  }

  // to make sure characters are added to the password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;


  return randomPasswordGenerated;

}

//hello world
// Get references to the #generate element





// Write password to the #password input


  console.log (writePassword(",null,undefined")
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  


  passwordText.value = password;

};

var generateBtn = document.querySelector("#generate");
// Add event listener to generate buttonsdd
//
generateBtn.addEventListener("click", writePassword);
// the last line that executes has to be return and you have to call it password
// if i go down a chain i have to return every thing the only way you take values between functions you have to return it and figure out what returns what

