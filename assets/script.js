//if lowerCase you replace the first if uppercase you replace the 3rd if specialcharacter replace4 if number

//Generate Password Function
// Special characters for the function created
const specialCharacters = "!@#$%^&*()";

var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePasswordFunc();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Prompts that come up after you click generate password
//prompt for user to select fields for password
var generatePasswordFunc = function () {
  var lengthInput = prompt("Enter Password Length between 8-128 characters");
  var length = parseInt(lengthInput);
  console.log(length);
  if (lengthInput <= 7 || length >= 129) {
    window.alert("please enter a number that is between 8 - 128");
    prompt("A number between 8-128");
  }
  console.log(length);
  //** should I have console log before or after curly bracket  **/

  var numbers = confirm("Do you want numbers in your password?");
  console.log(numbers);

  var lowerCases = confirm("Do you want lowercases in your password?");
  console.log(lowerCases);

  var upperCases = confirm("Do you want uppercases in your password?");
  console.log(upperCases);

  var special = confirm("Do you want special characters in your password?");
  console.log(special);
  // "! is to make the parameter is opposite to check boolean"
  if (!numbers && !lowerCases && !upperCases && !special) {
    alert("must pick character please");
    return;
  }
  // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
  // // var minimumCount = "";

  // Empty minimums for numbers, lowerCases, upper    Cases & specialCharacters
  // // var minimumNumbers = "";
  // // var minimumLowerCases = "";
  // // var minimumUpperCases = "";
  // // var minimumSpecialCharacters = "";

  // Generator functions**
  var functionArray = {
    getNumbers: function () {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function () {
      return specialCharacters[
        Math.floor(Math.random() * specialCharacters.length)
      ];
    },
  };

  // Checks to make sure user selected ok for all and uses empty minimums from above
  // // if (numbers === true) {
  // //   minimumNumbers = functionArray.getNumbers();
  // //   minimumCount++;
  // // }
  // // //??

  // // if (lowerCases === true) {
  // //   minimumLowerCases = functionArray.getLowerCases();
  // //   minimumCount++;
  // // }
  // // //!! Trying to not have any lower cases if they choose not to have it
  // // // else {
  // // //   minimumLowerCases = functionArray.getLowerCases();
  // // //   minimumLowerCases = 0;
  // // // }
  // // //??

  // // if (upperCases === true) {
  // //   minimumUpperCases = functionArray.getUpperCases();
  // //   minimumCount++;
  // // }
  // // //!! Trying to not have any uppercases if they choose not to have it
  // // // else {
  // // //   minimumUpperCases = functionArray.getUpperCases();
  // // //   minimumUpperCases = 0;
  // // // }
  // // //??

  // // if (special === true) {
  // //   minimumSpecialCharacters = functionArray.getSpecialCharacters();
  // //   minimumCount++;
  // // }

  //!! Trying to not have any special characters if they choose not to
  // else {
  //   minimumSpecialCharacters = 0;
  //   minimumSpecialCharacters = functionArray.getSpecialCharacters();
  // }
  //??

  // empty string variable for the for loop below
  var generatePassword = "";

  // loop getting random characters
  //??
  while (generatePassword.length < length) {
    var randomNumberPicked = Math.ceil(Math.random() * 4);
    if (randomNumberPicked === 1 && numbers === true) {
      generatePassword += functionArray.getNumbers();
    } else if (randomNumberPicked === 2 && lowerCases === true) {
      generatePassword += functionArray.getLowerCases();
    } else if (randomNumberPicked === 3 && upperCases === true) {
      generatePassword += functionArray.getUpperCases();
    } else if (randomNumberPicked === 4 && special === true) {
      generatePassword += functionArray.getSpecialCharacters();
    }
  }
  //?? My loop will still pick my ??//
  console.log(generatePassword);
  // to make sure characters are added to the password
  // // generatePassword += minimumNumbers;
  // // generatePassword += minimumLowerCases;
  // // generatePassword += minimumUpperCases;
  // // generatePassword += minimumSpecialCharacters;

  return generatePassword;
};

// Add event listener to generate button
var generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", writePassword);

//hello world
// Get references to the #generate element

// Write password to the #password input
//*
//* console.log (writePassword()
//*var password = generatePassword();
//*var passwordText = document.querySelector("#password");
//* passwordText.value = password;

//};

//var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
//
//generateBtn.addEventListener("click", writePassword);
// the last line that executes has to be return and you have to call it password
// if i go down a chain i have to return every thing the only way you take values between functions you have to return it and figure out what returns what
