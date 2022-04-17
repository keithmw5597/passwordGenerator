// Assignment code here
var alfaArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numArray = ["0","1","2","3","4","5","6","7","8","9"]
var symbol = ["!","@","#","$","%","^","&","*","(",")","_","-","=","+","/","[","]","{","}","|","<",">"]
var passwordFunctions = []

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

passwordFunctions.push(randomLower());


// characters();

//confirm
function generatePassword() {
  //   for (let i = 0; i < 28; i++) {
  //    var passwordArray = Math.floor(Math.random() * passwordFunctions.length);
  //    passwordFunctions[passwordArray]();
  // };
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var uppercase = function() {
    var upper = window.prompt("Do you want to include uppercase charactors? Yes or No");
    console.log(upper);
    if (upper === "" || upper === null) {
      window.alert("Please provide a valid answer. Yes or No")
      uppercase();
      };
    upper = upper.toLowerCase();
    if (upper === "yes") {
      passwordFunctions.push(randomUpper());
      console.log(passwordFunctions)
      };
    };
  uppercase()
  
  var numbers = function() {
    var num = window.prompt("Do you want to include numbers? Yes or No");
    console.log(num);
    if (num === "" || num === null) {
      window.alert("Please provide a valid answer. Yes or No")
      numbers();
      };
    num = num.toLowerCase();
    if (num === "yes") {
      passwordFunctions.push(randomNum());
      console.log(passwordFunctions)
      };
    };
  numbers()
  
  var sym = function() {
    var sym = window.prompt("Do you want to include symbols? Yes or No");
    console.log(sym);
    if (sym === "" || sym === null) {
      window.alert("Please provide a valid answer. Yes or No")
      sym();
      };
    sym = sym.toLowerCase();
    if (sym === "yes") {
      passwordFunctions.push(randomSym());
      console.log(passwordFunctions)
      };
    };
  sym();
    
  
  var count =function(){
    characterCount = window.prompt("Choose between 8 and 128 characters");
    if(characterCount === "" || characterCount === null) {
    window.alert("Please provide a valid answer. a number between 8 and 128")
    count();
   }
    
    if(characterCount < 8 || characterCount > 128) {
    window.alert("Please choose between 8 and 128");
    count();
  }
  console.log(characterCount);
  };
  
  count();

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
