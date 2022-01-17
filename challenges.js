// challenge 1
let p = "12345";
if (p.length < 8)
console.log("password is to short")
else 
consloe.log(password);

// challenge 2

let num = 0 ;
let one = num % 3 == 0;
let two = num % 5 == 0;

if (one || two)
console.log("YES, this number is divisble.")

else 
console.log("NO, this number is not divisble.")

// challenge 3 
switch (true){
case one || two:
    console.log( "fizz buzz")
    break

 case two:
    console.log("buzz")
    break

 case one:
    console.log("fizz")
    break
    default:
        console.log("failed")
}

// challenge 4

function checkPalindrome(word) {    
   let l = word.length;
   for (let i = 0; i < l / 2; i++) {
       if (word.charAt(i) !== word.charAt(l - 1 - i)) {
           return false;
       }
   }
   return true;
}

if (checkPalindrome("civic")) {
   console.log("The word is a palindrome");
} else {
   console.log("The word is NOT a palindrome");
}
  
// challenge 5

let placeOfWork = "office";
let townofHome = "liverpool";
let time = 7;

switch (true){
   case time > 8:
      console.log("At work!");
      break
      case time == 8:
         console.log(`Im commuting to the ${placeOfWork}`);
         break
         case time <8:
            console.log (`Im at home in ${townofHome}`);
            break
           
}           

// challenge 6

// challenge 7

let text = "test"    
   console.log(text.charAt(0) == text.charAt(text.length -1) ?"true" :
   "false")
  


// challenge 8
let num1 = 6
let num2 = 5
let test = num1 + num2
console.log(test);
if (test % 2==0){

   console.log ('Number is even!') 
   
} else{
   console.log('Number is odd!')
   
}
   




