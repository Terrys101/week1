// //Activity0
// let age = (18)
//  let counrty = ("uk")
//  if ( age >= 18 && counrty =="uk") {
//     console.log("Yes I can serve you!")
// }
// else if (18 != age) {
//     console.log("You arent old enough!")
// }
// else {
//     console.log("boo")
// }
//Activity1

// let topping = ("Crispy bacon","mozzarell")

// switch(topping){
//     case "Crispy bacon" :
//     case  "mozzarell" :
//         console.log("These are important ingredients for my pizza")
//         break;
//         case artichoke == topping:
//         case  garlic == topping:
//             console.log("the console “I dont mind having ${topping}")
//         break;
//        case Fish :
//            case pineapple:
//                console.log("dont like log ${topping} should not be on a pizza")
// }



// // challenge 1
// let p = ("Thursday")
// if (p.length >= 8) {
//     console.log(`password! `)
    
// } else{ 
//     console.log(`${p} is too short.`)
    
// }

// // Challenge 2/3
// let num = 10 ;
// let one = num % 3 == 0;
// let two = num % 5 == 0;

// if (one || two)
// console.log("YES, this number is divisble.")

// else 
// console.log("NO, this number is not divisble.")

// switch(true){
//     case one || two :
//         console.log("“fizz buzz”")
// break
// case num % 5 == 0:
//     console.log("buzz")
//     break

//  case num % 3 == 0:
//     console.log("fizz")
//     break
//     default:
//         console.log("failed")
// }

// Challenge 4:
// function checkPalindrome(word) {    
//     let l = word.length;
//     for (let i = 0; i < l / 2; i++) {
//         if (word.charAt(i) !== word.charAt(l - 1 - i)) {
//             return false;
//         }
//     }
//     return true;
//  }
 
//  if (checkPalindrome("civic")) {
//     console.log("The word is a palindrome");
//  } else {
//     console.log("The word is NOT a palindrome");
//  }
   
// Challenge 5:
// let placeOfWork = "office";
// let townofHome = "liverpool";
// let time = 8;

// switch (true){
//    case time > 8:
//       console.log("At work!");
//       break
//       case time == 8:
//          console.log(`Im commuting to the ${placeOfWork}`);
//          break
//          case time <8:
//             console.log (`Im at home in ${townofHome}`);
//             break
           
// }           
//Challenge 6:
// const str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
// const strB = str.split('');

// let searchForVowels =["a", "e", "i", "o", "u"];
// for(let i = 0; i <searchForVowels.length; i++){
//    console.log(str.lastIndexOf(searchForVowels[i]));
// }



// Challenge 7
// let text = "test"    
//    console.log(text.charAt(0) == text.charAt(text.length -1) ?"true" :
//    "false")

// Challenge 8
// let num1 = 10
// let num2 = 10
// let test = num1 + num2

// if (test % 2==0){

//    console.log (`${test} is even number.`) 
   
// } else{
//    console.log(`${test} is odd number.`)
   
// }