// Assignment code here
function generatePassword() {
  var passwordLenght = prompt("Choose as Password lenght between 8 and 128");
  if(!passwordLenght || passwordLenght < 8 || passwordLenght > 128) {
    alert("Invalid input. Please choose a number between 8 and 128.");
    return generatePassword();
  }
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