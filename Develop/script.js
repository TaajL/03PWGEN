// Assignment code here
function generatePassword() {
  var passwordLenght = prompt("Choose as Password lenght between 8 and 128");
  if(!passwordLenght || passwordLenght < 8 || passwordLenght > 128) {
    alert("Invalid input. Please choose a number between 8 and 128.");
    return generatePassword();
  }
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var special = '!@#$%^&*()_+=-[]{};:,.<>?/|';

var userChoices =[];
var confirmLower = confirm('Will this contain lower case letters?');
var confirmUpper = confirm('Will this contain upper case letters?');
var confirmNumber = confirm('Will this contain numbers?');
var confirmSpecial = confirm('Will this contain special characters?');

}

// Get references to the #generate element
var generateBtn.addEventListener("click") = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);