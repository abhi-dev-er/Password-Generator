const upperCaseSet ="ABCDEFGHIJKLMNOPQRSTUVWXYX"
const lowercaseSet ="abcdefghijklmnopqrstuvwxyz"
const numbersSet = "1234567890"
const symbolsSet = "!@#$%^&*()_*/"

const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperCaseInput = document.getElementById("upper-case")
const lowerCaseInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")



const getRandomData = (dataset)=>{
  return dataset[Math.floor(Math.random() * dataset.length)]
}

const genratePassword = (password = "") =>{
   if(upperCaseInput.checked){
    password +=  getRandomData(upperCaseSet)
   }
   if(lowerCaseInput.checked){
    password += getRandomData(lowercaseSet)
   }
   if(numberInput.checked){
    password += getRandomData(numbersSet)
   }
   if(symbolInput.checked){
    password += getRandomData(symbolsSet)
   }
   if(password.length < totalChar.value){
    return genratePassword(password)
   }

   passBox.innerText = truncateString(password, totalChar.value)
}
genratePassword();



document.getElementById("btn").addEventListener(
    "click",
    function(){ 
        genratePassword();    
    }
)

function truncateString(str, num){
    if(str.length > num){
        let substri = str.substr(0, num);
        return substri;
    }else{
        return str;
    }
}