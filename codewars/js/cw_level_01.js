
console.log('codewars    level_01');

//=================================================
// each  character x2

function doubleChar(str) {
   return str.split('').map(el => el+el).join('')
  }
//   console.log(doubleChar("Hello World"));

//=================================================
//amount of passengers

function enough(cap, on, wait) {
 
    // return (cap - on) >= wait
    // ? `0  # He can fit all ${cap - on} passengers`
    // : `${(((cap - on)- wait)* -1)} # He can't fit ${(((cap - on)- wait)* -1)} of the ${wait} waiting`
    return Math.max(wait + on - cap, 0);
  }
//   console.log(enough(10,5,5));

//===============================================

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - (dadYearsOld - sonYearsOld)* 2)
  }

//   console.log(twiceAsOld(55,30));
//   console.log(twiceAsOld(22,1));

//===============================================

function getSum(a, b){
    let su = 0
for (let i = a; i <= b; i++) {
    console.log(i);
su = su + i
    console.log('su', su);
    console.log('----------');
}
return su
}
// console.log(getSum(-2,5));

//========================================

function removeExclamationMarks(s) {


    let res = ''
for (let i = 0; i < s.length; i++) {
    if (s[i] !== '!') {
         res += s[i]
    }
}
return res
  }  //  return s.replace(/!/gi, '');
//   console.log(removeExclamationMarks('sgsgd!'));

//========================================

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
return ( mpg * fuelLeft ) >= distanceToPump
? true
: false
  };
//   console.log(zeroFuel(50, 25, 2));
//   console.log(zeroFuel(100, 50, 1));

//==========================================

function SeriesSum(n){
  const series = [1,0.25,0.14,0.10,0.08,0.06]
    console.log(series);
  const newseries =  series.slice(0,n)
    console.log(newseries);

return newseries.reduce((acc,el) => acc + el, 0).toFixed(2)
}
// console.log(SeriesSum(6));

//==========================================
//
function sumTwoSmallestNumbers(numbers) {  
   const snumbers = numbers.sort(compareNumbers)
   return snumbers[0] + snumbers[1]
   //------------------------------------
// numbers.sort((a,b) => a - b);
   //return numbers[0] + numbers[1];
  }
//   console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
function compareNumbers(a, b) {
    return a - b;
  }
  //==========================================
//  remove the smallest value
function removeSmallest(arr) {

    const min = Math.min(...arr);
    return arr.filter(e => e != min);
  }
// numbers.filter((_, idx) => idx !== numbers.indexOf(Math.min(...numbers)));
//   console.log(removeSmallest([5, 3, 2, 7, 4]));

  //==========================================

  function stray(numbers) {

    // return numbers.reduce((x, y) => x ^ y);
    return numbers.reduce(function(x,y) {
        console.log('x', x);
        console.log('y', y);
       
      return x ^ y
      }, );
  }
// console.log(stray( [17, 17, 3, 3, 3, 3, 17]));

 //==========================================
 function foon(num) {

    // return numbers.reduce((x, y) => x ^ y);
    return num.reduce(function(x,y) {
        console.log('x', x);
        console.log('y', y);   
      return x + y
      }, );
  }
// console.log(foon([2,3,4,2]));

 //==========================================

 function paperwork(n, m) {
  
    return n < 0 || m < 0 ? 0  : (n * m)
 }
// console.log(paperwork(5,-5));

 //==========================================

 function rentalCarCost(d) {

    return d < 3
           ? d * 40  
           : d < 7
              ? (d * 40)- 20
              : (d * 40)- 50 
  }
//  console.log(rentalCarCost(6));
 //==========================================
//to remove first and last element in array

function sumArray(array) {

return array.sort((a,b) => a - b).slice(1, -1).reduce((x, y) => x + y);
}
// console.log(sumArray([ 6, 2, 1, 8, 10 ]));

 //==========================================
//   average

 function findAverage(arr) {

 return (arr.length === 0) 
    ? 0
    : (arr.reduce((a, b) => a + b, 0) / arr.length);
  }
//   console.log(findAverage([1,2,3,4]));

 //==========================================

 function squareSum(numbers){
    
return  numbers.map(el => el ** 2).reduce((a, b) => a + b, 0)
 }
//  console.log(squareSum([0, 3, 4, 5]));

 //==========================================

 function duplicateCount(text){
   
return text.toLowerCase().split('').filter((e, i) => text.indexOf(e) !== i)//.filter((e, i) => text.indexOf(e) == i)//.length
  }
console.log(duplicateCount("aabbcde"));



