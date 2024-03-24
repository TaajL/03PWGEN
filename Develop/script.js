// Assignment code here
function generatePassword() {
  var passwordLength = prompt("Choose as Password length between 8 and 128");
  if(!passwordLength || passwordLength < 8 || passwordLength > 128) {
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

  if(!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
  alert('You must choose at least one criteria.');
  return generatePassword();
  }
}

if (confirmLower) {
  userChoices = userChoices.concat(lowerCase.split(""));
}

if (confirmUpper) {
  userChoices = userChoices.concat(upperCase.split(""));
}

if (confirmNumber) {
  userChoices = userChoices.concat(numbers.split(""));
}

if (confirmSpecial) {
  userChoices = userChoices.concat(special.split(""));
}
      
// Generate PW
var password ="";
for (var i = 0; i <  passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * userChoices.length);
  password += userChoices[randomIndex];
}

return password;
  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
} 


// Add event listener to generate button
var generateBtn = document.getElementById('generate');
generateBtn.addEventListener("click", writePassword);