console.log('codewars[17]   131 072');
//* console.log(Date.now())

//===============================================================
//  GENERATOR-ID
const generateId = () => '_' + Math.random().toString(36).slice(2);
//* console.log(generateId());

//===============================================================
//===============================================================

function peopleWithAgeDrink(old) {

    return old < 14
           ? "drink toddy"
           :   (old < 18) && (old >= 14)
              ? "drink coke"
              :  (old < 21) && (old >= 18)
                ? "drink beer"
                : old >= 21
                  ? "drink whisky"
                  : 0

  };
// console.log(peopleWithAgeDrink(18));//
//================================================================
function isPalindrome(x) {

return x.toLowerCase() == x.toLowerCase().split('').reverse().join('')

}
// console.log(isPalindrome('ollo'));
//================================================================
function smallEnough(a, limit){

return a.every((e) => e <= limit )
}
// console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));
// console.log(smallEnough([66, 101], 200)
//================================================================
function twoSum(numbers, target) {


return numbers.map(function(e,i,a) {

    return e
} ) 

}
// console.log(twoSum([1, 2, 3], 4));

//================================================================

const user = {
    tag: 'mango',
    showtag() {
        console.log('this', this.tag);
    }
}
const outer = user.showtag.bind(user)
// outer()
//================================================================
function warnTheSheep(queue) {
    console.log(queue.length);

return queue.reduce((a,e,i) => a ^ e)

}
// console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]));
//================================================================

function easyLine(n) {
    for (var i = 1, sum = 1; i <= n; i++)
      sum *= (n + i) / i;
    return Math.round(Math.log(sum));
  }
//   console.log(easyLine(3));
//================================================================
function getRealFloor(n) {

return  n <= 0
        ? 0
        : n >= 1 && n < 13
           ? n + 1
           : n >= 13
              ? n + 2
              : 0

}
// console.log(getRealFloor(1));
//================================================================

function mergeArrays(arr1, arr2) {
    return [...(arr1),...(arr2)].sort((a,b) => a-b)
  }
//   console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]));
//================================================================
//!   Remove duplicate values from JS array 
function minValue(values){

    const res = values.sort((a,b) => a-b)
                .filter((el,id,ar) => ar.indexOf(el) === id)
                .join('')
      return Number(res) 
      //----------------------------------------
//    return   +[...new Set(values)].sort().join``
  }

// console.log(minValue([5, 7, 9, 5, 7]));
//================================================================
function getAge(inputString){
 
    return parseInt(inputString)

    }
// console.log(getAge('4 years old'));
//================================================================
function strCount(str, letter){  

const prom = str.toLowerCase()
                .split('')
                .reduce((acc, it) => (acc[it] = acc[it] + 1 || 1, acc), {})

return prom[letter]

} //  return str.split(letter).length-1
// console.log(strCount('Hello', 'l'));
//================================================================
function plural(n) {
return n === 1 ? false : true 
  }
// console.log(plural(1));
//================================================================
function take(arr, n) {
   
    return arr.slice(0,n)

  }
//   console.log(take([0, 1, 2, 3, 5, 8, 13], 3));

//================================================================
function noBoringZeros(n) {

    // while(n%10 == 0 && n!=0){n/=10;}
    // return n;
   //------------------------------------------------------
    return +(`${n}`.replace(/0+$/, ''))

  }
// console.log((noBoringZeros(9060000)));
//================================================================
function position(letter){
    const abet = 'abcdefghijklmnopqrstuvwxyz'
    const abetArray = abet.split('')

   const out = letter.charCodeAt() -96
   return `Position of alphabet: ${out}`
    }
// console.log(position('z'));
//================================================================
function sumStr(a,b) {
  
    return( Number(a) + Number(b)).toString(2) 
}
// console.log(sumStr("4","5"));
//================================================================
function keepOrder(ary, val) {
    const n = (element) => element > val;
    
    return ary.findIndex(n) !== -1
             ? ary.findIndex(n) 
             : ary.length
  }
// console.log(keepOrder([1, 2, 3, 4, 7], 5));
// console.log(keepOrder([1, 2, 3, 4], 5));
// console.log(keepOrder([1, 1, 2, 2, 2], 2));

//================================================================
function solve(s){

  let low = 0
  let high = 0
 
const temp = s.split('')
        .map((e,i,a) => {  
          console.log('e', e);
          console.log('i', i);
          if(e == e.toUpperCase()) {
            high += 1
          } else { low += 1}
        })
console.log('h',high ,"l",low);

    return high == low 
            ? s.toLowerCase() 
            : s.toUpperCase()

}// s.replace(/[A-Z]/g,'').length < s.length/2 ? s.toUpperCase() : s.toLowerCase()
// console.log(solve("CODe"));
//================================================================
function youAreACube (value){

  let n = value**(1/3)
  console.log(n);
  return n.toFixed(2)%1===0

  }
// console.log(youAreACube(64));
//================================================================
function nameShuffler(str){

return str.split(' ')
          .reverse()
          .join(' ')
}
// console.log(nameShuffler('john McClane'));

//================================================================
function flattenAndSort(array) {

  return array.flat(2).sort((a,b) => a-b)

}// [].concat(...array).sort((a,b)=>a-b)
// console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]));

//================================================================
function capitalize(s){

const temp = s.split('')
  console.log(temp);
const first = temp.map((e,i ) => {
      if (i % 2 === 0 ) {
        e = e.toUpperCase()
      } else { e = e.toLowerCase()}
      return e
}).join('')
console.log(first);

const second = temp.map((e,i) => {
  if (i % 2 === 0 ) {
    e = e.toLowerCase()
  } else { e = e.toUpperCase()}
  return e
}).join('')
console.log(second);

return [first, second]

};
// console.log(capitalize("codewarriors"));
//================================================================
function order(words){

  return words.split(' ')
              .map(e => e.split(''))
              .find((e,i) => e.typeof == 'number' )
  
}
// console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
//================================================================
function descendingOrder(n){

  // return Math.abs(n).toString().split('').reverse().join('')

  return +(n+'').split('').sort().reverse().join('')
}
// console.log(descendingOrder(58));
//================================================================
function findNeedle(haystack) {
 
const temp = Number(haystack.find((e,i) =>  [e === 'needle'] ))
 return `found the needle at position ${temp+1}`
}
// console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));
//================================================================
function saleHotdogs(n){

  if (n<5) {
    return 100*n
  } else if (n >= 5 && n < 10) {
    return 95*n
  } else { return 90*n}


}
// console.log(saleHotdogs(10));
//================================================================

function getDivisorsCnt(n){

return Array(n)
        .fill(1)
        .map((e,i) => e = i + 1)
        .filter((e,i) => n % e  === 0).length
//--------------------------------------------------------------------
// return [...Array(n).keys()].reduce((a,c)=>n%(c+1)?a:++a,0)
}
// console.log(getDivisorsCnt(28));
//================================================================
function isPrime(num) {
  if (num < 0) return false

 const divisor = Array(num)
                .fill(1)
                .map((e,i) => e = i + 1)
                .filter((e,i,a) => num % e === 0)
                console.log(divisor);

  return divisor.length === 2
}//   return num > 1 && [2, 3, 5, 7].every(i => num === i || num % i);
// console.log(isPrime(-73));
//================================================================
function addLength(str) {

  const word = str.split(' ')
                  .map((e,i) => `${e} ${e.length}` )
  // console.log(word[0].length);
// console.log(word);

// return JSON.stringify(word) 

}
// console.log(addLength("you will win"));
//================================================================
//* from a to b
function pipeFix(numbers){
  const a = numbers[0]
  const b = numbers[numbers.length-1]
  console.log('a:',a,'b:',b);

  return Array(b - a + 1).fill(1).map((_, i) => a + i)
}
// console.log(pipeFix([2,3,5,6,8,9]));

//================================================================
function remainder(n, m){
  let smallest = n < m
                ? n
                : m
  console.log('smallest:',smallest);
  if(smallest === 0 ) return NaN                

  return n < m
          ? m/n
          : n/m
//-----------------------------------------------------------------          
//   return Math.max(a,b) % (Math.min(a,b) || NaN);          
  
}//  return a > b ? a % b : b % a;
// console.log(remainder(72, 2));
//================================================================
function index(array, n){

return array[n] ** n || -1
}
// console.log(index([1, 2, 3, 4],2));
//================================================================
//* Abbreviate a Two Word Name
function abbrevName(name){

const temp = name.split(' ')
console.log(temp[0].charAt(0));

return [temp[0].charAt(0),temp[1].charAt(0)]
        .map(e => e.toUpperCase())
        .join('.')
}//return name.split(' ').map(i => i[0].toUpperCase()).join('.')
// console.log(abbrevName("patrick Feenan"));
//================================================================
function gimme (triplet) {

const prom = triplet.sort((a,b) => a-b)
console.log(prom);
console.log(prom[1]);

return prom[1]

}//return [...triplet].indexOf(triplet.sort((a,b)=>a-b)[1])

// console.log(gimme([2, 3, 1]));
//================================================================
var findAverage = function (nums) {

return nums.reduce((a,b) => a+b) / (nums.length)

}
// console.log(findAverage([1, 3, 5, 7]));
//================================================================
function getEvenNumbers(numbersArray){

return numbersArray.filter(e => e % 2 === 0)
}
// console.log(getEvenNumbers([1,2,3,6,8,10]));

//================================================================
//*  5 kyu  Primes in numbers

function primeFactors(n){
let a = 2
let z = 19

 const arr1 = Array(z - a + 1).fill(1).map((_, i) => a + i)
 const arr2 = Array(z - a + 1).fill(1).map((_, i) => (a + i)**2)
 const arr3 = Array(9 - a + 1).fill(1).map((_, i) => (a + i)**3)
 const arr4 = Array(5 - a + 1).fill(1).map((_, i) => (a + i)**4)
 const arr5 = Array(4 - a + 1).fill(1).map((_, i) => (a + i)**5)
 const arr6 = Array(3 - a + 1).fill(1).map((_, i) => (a + i)**6)
 const arr7 = Array(2 - a + 1).fill(1).map((_, i) => (a + i)**7)
 const arr8 = Array(2 - a + 1).fill(1).map((_, i) => (a + i)**8)
 const arr9 = Array(2 - a + 1).fill(1).map((_, i) => (a + i)**9)

 const all = [...arr1,...arr2,...arr3,...arr4,...arr5,...arr6,...arr7,...arr8,...arr9].filter((el,id,ary) => ary.indexOf(el) == id)

//  console.log('arr1:',arr1);
//  console.log('arr2:',arr2);
//  console.log('arr3:',arr3);
//  console.log('arr4:',arr4);
//  console.log('arr5:',arr5);
//  console.log('arr6:',arr6);
//  console.log('arr7:',arr7);
//  console.log('arr8:',arr8);
//  console.log('arr9:',arr9);
 console.log('all:',all);


 
}
// console.log(primeFactors(86240));

//================================================================
//*Метод padStart()дополняет текущую строку другой строкой (при необходимости несколько раз), пока результирующая строка не достигнет заданной длины.

function getRandomHexColor() {
  return `${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)
   }`;
   }
// console.log(getRandomHexColor());

//================================================================
//*  Remove duplicate values from JS array [duplicate]

function uniqueArray(a) {

  return a.filter((el, idx,arr) => arr.indexOf(el) == idx) 

}
// console.log(uniqueArray([2,4,4,4,7,6,,5,5]));
//================================================================
function doMath(s){

  return s.split(' ')
          .map(el => el.split('').sort((a,b) => b.localeCompare(a)).join('') )
          .sort((a,b) => a.localeCompare(b))
  
}
console.log(doMath("24z6 1x23 y369 89a 900b"));
// console.log(doMath("Basic tests added"));
//================================================================
function fstChar(st) {

const digits = Number(st.split('')
                  .map((el) => el.replace(/\D/g, '')  )
                  .join(''))

const letter = (st.split('').sort((a,b) => b.localeCompare(a))).join('').charAt(0)               


console.log('digits:',digits,'letter:',letter);

}
console.log(fstChar('24z6'));
console.log(fstChar('1x23'));
console.log(fstChar('y369'));
console.log(fstChar('9000b'));

//================================================================
//================================================================
//================================================================
//================================================================
//================================================================
//================================================================
//================================================================
//================================================================