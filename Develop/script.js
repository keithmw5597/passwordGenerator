// Assignment code here
var alfaArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numArray = ["0","1","2","3","4","5","6","7","8","9"]
var symbol = ["!","@","#","$","%","^","&","*","(",")","_","-","=","+","/","[","]","{","}","|","<",">"]
var password = []
//prompt uppercase

//prompt for numeric and or spectial characters

// prompt length of password

function randomUpper() {
 value = Math.floor(Math.random()* 26 + 26)
 upper = alfaArray[value];
  console.log(upper)
}
randomUpper();


var randomLower = function() {
  value = Math.floor(Math.random() * 26);
  lower = alfaArray[value]
  console.log(lower)
};
randomLower();

var randomNum = function() {
  value = Math.floor(Math.random() * 10);
  num = numArray[value]
  console.log(num)
};
randomNum();

var randomSym = function() {
  value = Math.floor(Math.random() * symbol.length);
  sym = symbol[value]
  console.log(sym)
};
randomSym();
//confirm
function generatePassword() {
}



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
