
//array with numbers for characters,numbers,symbols//

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","n","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var numbers = ["1","2","3","4","5","6","7","8","9","10"];

var symbol = ["!","@","#","$","%","^","&","*","(",")",];

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//if lowerCase you replace the first if uppercase you replace the 3rd if specialcharacter replace4 if number 




// Get references to the #generate element


var generatePassword = function (d) {
//promt for user to select fields for password//
var lengthInput = prompt("Enter Password Length")
var length = parseInt (lengthInput)
console.log (length)
};


//use same method to use confirms to get whether they want lower case upper case , symbols, once i have those i can use those values to choose to make an array of all possibilitys make my password randomly with Math.random//

// Write password to the #password input


  console.log (writePassword(",null,undefined")
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  


  passwordText.value = password;

};

var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
//
generateBtn.addEventListener("click", writePassword);
// the last line that executes has to be return and you have to call it password
// if i go down a chain i have to return every thing the only way you take values between functions you have to return it and figure out what returns what

