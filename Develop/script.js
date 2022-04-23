// Assignment code here
var lowerArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numArray = ["0","1","2","3","4","5","6","7","8","9"]
var symbol = ["!","@","#","$","%","^","&","*","(",")","_","-","=","+","/","[","]","{","}","|","<",">"]




function randomUpper() {
 value = Math.floor(Math.random()* 26)
 upper = upperArray[value];
  console.log(upper)
  return upper
}
// randomUpper();


var randomLower = function() {
  value = Math.floor(Math.random() * 26);
  lower = lowerArray[value]
   console.log(lower)
   return lower
};
// randomLower();

var randomNum = function() {
  value = Math.floor(Math.random() * 10);
  var num = numArray[value]
   console.log(num)
   return num
};
// randomNum();

var randomSym = function() {
  value = Math.floor(Math.random() * symbol.length);
  var sym = symbol[value]
   console.log(sym)
   return sym
};
// randomSym();
var passwordFunctions = ["randomLower()",]

  //prompt uppercase
var uppercase = function() {
  var upper = window.prompt("Do you want to include uppercase charactors? Yes or No");
    // console.log(upper);
  if (upper === "" || upper === null) {
    window.alert("Please provide a valid answer. Yes or No")
    uppercase();
    };
  upper = upper.toLowerCase();
  if (upper === "yes") {
    passwordFunctions.push("randomUpper()");
    };
  };

//prompt for numeric values  
var numbers = function() {
  var num = window.prompt("Do you want to include numbers? Yes or No");
    //console.log(num);
  if (num === "" || num === null) {
    window.alert("Please provide a valid answer. Yes or No")
    numbers();
  };
  num = num.toLowerCase();
  if (num === "yes") {
    passwordFunctions.push("randomNum()");
  };
};
//prompt for spectial characters
var sym1 = function() {
  var sym = window.prompt("Do you want to include symbols? Yes or No");
  
  //console.log(sym);
  if (sym === "" || sym === null) {
    window.alert("Please provide a valid answer. Yes or No")
    
      };
  sym = sym.toLowerCase();
  if (sym === "yes") {
    passwordFunctions.push("randomSym()");
    };
} 
//Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 

  passwordText.value = password

};
  function generatePassword() {
    var passwordString = "";
// prompt length of password
  var passwordLength = "";

  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Enter password length between 8 and 128");
  };
     
  uppercase();

  numbers();
 
  sym1();

  console.log(passwordFunctions);
    for (var i = 0; i < passwordLength; i++) {
     var value = Math.floor(Math.random() * passwordFunctions.length);
     //console.log(value);
     result = passwordFunctions[value];
     //console.log(result);
     if (result == "randomNum()") {
      var num = randomNum();
       passwordString = passwordString.concat(num);
       console.log(num);
     }
     else if (result === "randomSym()") {
      var sym = randomSym();
      passwordString = passwordString.concat(sym);
      console.log(sym)
     }
     else if (result === "randomLower()") {
      var low = randomLower();
      passwordString = passwordString.concat(low);
      console.log(low)
     }
     else {
      //  randomUpper()
      var upper = randomUpper();
      passwordString = passwordString.concat(upper)
      console.log(upper)
     }
  console.log(passwordString);
 
  } return passwordString
}
  
 




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
