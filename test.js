const sumOfNums = (min, max) => {
    let sums = 0;
    for(let i = min; i < max + 1 ; i++){
    sums += i;
    }
    return sums;
   }
   console.log(`Sum of all numbers from 1 to 10 is ${sumOfNums(1,10)}.`);
   //Sum of all numbers from 1 to 10 is 55node 