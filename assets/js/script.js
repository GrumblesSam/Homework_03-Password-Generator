// Assignment Code
var generateBtn = document.querySelector("#generate");

function numOfCharacter(){
  var numInput = Number(window.prompt("What length would you like your password(8-128)?"));

  if(numInput < 8 || numInput > 128){
    numInput = numOfCharacter();
  }

  if(!numInput || Number.isNaN(numInput)){
    return;
  }

  return numInput;
}

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = lowerCase.toUpperCase();
const nums = "0123456789";
const specialChar = ` !"#$%&'()*,-./:;<>=+?@[\\]^_\`\{|\}~`;

function prompts(){
  let includeLower = window.confirm("Would you like to use lowercase letters?");
  let includeUpper = window.confirm("Would you like to use uppercase letters?");
  let includeNums = window.confirm("Would you like to use numbers?");
  let includeSpec = window.confirm("Would you like to use special characters?");

  let list = "";

  if(includeLower){
    list += lowerCase;
  }
  if(includeUpper){
    list += upperCase;
  }
  if(includeNums){
    list+= nums;
  }
  if(includeSpec){
    list += specialChar;
  }

  if(list === ""){
    window.alert("Sorry, password cannot be generated. Password must include at least one set of characters.");
    return;
  }  
  
  return list;
}

function generatePassword(){
  var length = numOfCharacter();

  if(length === undefined){
    return "";
  }

  const charUsed = prompts();

  if(charUsed === undefined){
    return "";
  }

  let password = "";
  let index;

  for(var i = 0; i < length; i++)
  {
    index = Math.floor(Math.random() * charUsed.length);

    password = password + charUsed[index];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
