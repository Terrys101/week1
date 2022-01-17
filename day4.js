// let coffeeOrder = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's new"
//     ];
//     console.log (coffeeOrder.pop());
//     console.log(coffeeOrder)


// let coffeeOrder = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's new"
//     ];
//     coffeeOrder.push("Donna - espresso");
//      console.log(coffeeOrder)
//      coffeeOrder.pop()
//    console.log(coffeeOrder)

// MAPS
// const map1 = new Map();

// map1.set('a', 1);
// map1.set('b', 2);
// map1.set('c', 3);

// console.log(map1.get("a"));

// map1.set('a',97);
// console.log(map1.get('a'));

// console.log(map1.size);
// map1.delete('b');

// console.log(map1.size);

//  let names = ['true romance','the fighter of the navigator','alien','blade runner'];

//  while( typeof (i = names.shift()) !== "undefined" ) {
//     console.log(i);
//  }

// // UNSHIIFT()
// let myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

// console.log('myFish before:', JSON.stringify(myFish));

// var shifted = myFish.shift

// console.log('myFish after:', myFish)

// console.log('Removed this element:', shifted);



// The SPLICE()
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // inserts at index 1
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// // replaces 1 element at index 4
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "May"]

// // Syntax
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)

// SLICE()
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// // expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// // expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));
// // expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// // expected output: Array ["camel", "duck"]
// shift()
// const array1 = [1, 2, 3];

// const firstElement = array1.shift();

// console.log(array1);
// // expected output: Array [2, 3]

// console.log(firstElement);
// // expected output: 1


// Activity(1)
// let list =[
// " youtube - https://www.youtube.com/ ",
// " twitter - https://twitter.com/?lang=en",
// " ebay  - https://www.ebay.co.uk/" ];

// list.pop()
// console.log(list);
// console.log(list [2]);
// console.log(list.length);

//Activity(2)/(1) loops
//  let film = ['true romance','the fighter of the navigator','alien','blade runner'];
//  film.splice(0,1,'battle royale');
//  film.push('war of the worlds original')
//  for(let i = 0; i < film.length; i++){
//     console.log(film[i]);
//    }
   
 
//activity(2)loops
// for(let i = 0; i < 6; i++){
//     console.log(Math.ceil(Math.random() * 49.1));
//    }
   
// //Activity(3)
// for(let i = 9; i >= 0; i--){
//     console.log(i);
//    }
   

// Activity(4)
// let film = ['true romance','the fighter of the navigator','alien','blade runner'];
// const filmCheck = () =>{
//    for(let i = 0; i < film.length; i++){
//    console.log(film[i]);
//    }  
//    if (film[4] == 'Ghostbusters'){
//       console.log('Ghostbusters')
//    }else{
//            console.log('boo')
//   }
// }

// Activity(5)
   // for( i = 0; i < 6; i++){
   //    let x = Math.ceil(Math.random() * 29 + 1);
   //    if (x % 7 == 0 ) {
   //       console.log(`${x} is divisible by 7`)
         
   //    } else {
   //       console.log(`${x} is not disvisible by 7`)
   //    }
   // }

   // //  Activity(6)
   //      const Prime = n => {
   //    if (n === 2 || n === 3) return true;
   //    if (n < 2 || n % 2 === 0) return false;
    
   //    return x(n);
   //  }
   //  const x = (n, i = 3, limit = Math.floor(Math.sqrt(n))) => {	
   //    if (n % i === 0) return false;
   //    if (i >= limit) return true; 
   //    return x (n, i += 2, limit);
   //  }
    
   //  for (i = 0; i <= 20; i++) {
   //    console.log(`${i} is ${Prime(i) ? `a` : `not a` } prime`);


   //  }