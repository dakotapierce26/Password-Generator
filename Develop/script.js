// Assignment code here\

//charcter variables
var passwordItems = []
var password = []

document.getElementById("generate").addEventListener("click", promptUser);

function promptUser() {
  var passLength = prompt("Enter a length between 8 and 128");
  if (passLength <= 8) {
    window.alert("Please enter a number higher than 8!");
    return promptUser();}
    else if (passLength >= 128) {
      window.alert("Please enter a number lower than 128!");
      return promptUser();
  }

  var specialChar = confirm("Would you like special characters?");
  if (specialChar == true) {
    passwordItems.push("!", "@", "#", "$", "%", "&", "*", "?");
  }

  var lowerChar = confirm("Would you like letters?");
  if (lowerChar == true) {
    passwordItems.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
  }

  var upperChar = confirm("Would you like uppercase letters?");
  if (upperChar == true)  {
    passwordItems.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
  }

  var numChar = confirm("Would you like numbers?");
  if (numChar == true)  {
    passwordItems.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
  }

  if (passwordItems === undefined || passwordItems.length == 0) {
    window.alert("Please make one selection!")
    return;
  }

  console.log(passwordItems);

  for(var i = 0; i <= passLength; i ++){
    var values = passwordItems.join("");
    console.log(values)
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  console.log(password);
}



//create for loop to choose password characters


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
