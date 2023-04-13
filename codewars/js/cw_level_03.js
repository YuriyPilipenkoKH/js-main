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
//!   Remove duplicate values from JS array / Unique
function minValue(values){

    // const res = values.sort((a,b) => a-b)
    //             .filter((el,id,ar) => ar.indexOf(el) === id)
    //             .join('')
    //   return Number(res) 
      //----------------------------------------
   return   [...new Set(values)].sort()//.join``
  }

console.log(minValue([5, 7, 9, 5, 7]));
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
  console.log(name.__proto__);
  console.log(name);

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
// console.log(gimme.prototype.constructor);
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
  return findindex `${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)
   }`;
   }
// console.log(getRandomHexColor());

//================================================================
//*  Remove duplicate values from JS array [duplicate]

function uniqueArray(a) {

  return a.filter((el, idx,arr) => arr.indexOf(el) === idx) 

}
console.log(uniqueArray([2,4,4,4,7,6,,5,5]));
console.log(uniqueArray(['cat','dog','cat']));
//================================================================
function doMath(s){

  const prom =  s.split(' ')
  const digits = prom.map( e =>Number(e.split('')
                  .map((el) => el.replace(/\D/g, '')  )
                  .join('')))
  

  const letter = prom.map(e => (e.split('').sort((a,b) => b.localeCompare(a))).join('').charAt(0)   )

  console.log('digits:',digits,'letter:',letter);
 
  return s.split(' ')
          .map((el,id) => [letter[id], digits[id]])
//--------------------------------------------------------
// return s.split(' ').map((w, i) => ({
//   c: w.replace(/\d/g, ''),
//   d: +w.replace(/\D/g, ''),
//   i
// }))
// .sort((a, b) => a.c.localeCompare(b.c) || a.i - b.i)
// .map(({ d }) => d);
//---------------------------------------------------------
// const sign = ['+','-','*','/']; 
// const tmp = s.split` `.sort((a,b) => a.replace(/\d/g,'').localeCompare( b.replace(/\d/g,'') ) || s.indexOf(a)-s.indexOf(b)).map((v,i) => v.replace(/[a-z]/g, '') );
// let res = tmp[0];
// for(let i = 1; i<tmp.length; i++)
//    res = eval(res + sign[(i-1)%sign.length] + tmp[i]);
//  return Math.round(res)
//------------------------------------------------------------
// var m = ['+','-','*','/'], exp = ''
// s = s.split(' ')
//      .map((e,i) => [+e.replace(/\D/,''),e.replace(/\d/g,'').charCodeAt(),i])
//      .sort((a,b) => a[1]-b[1] || a[2]-b[2])
//      .forEach((e,i) => exp += e[0]+m[i%4])
// var r = exp.slice(0,-1).replace(/[+\-*/]/g,')$&')
// return Math.round(eval('('.repeat((r.match(/\)/g) || []).length) + r))

}
// console.log(doMath("24z6 1x23 y369 89a 900b"));
// console.log(doMath("Basic tests added"));
//================================================================
function fstChar(st) {

const digits = Number(st.split('')
                  .map((el) => el.replace(/\D/g, '')  )
                  .join(''))

const letter = (st.split('').sort((a,b) => b.localeCompare(a))).join('').charAt(0)               


console.log('digits:',digits,'letter:',letter);
// return {l: letter,d: digits}
return [letter, digits]


}
// console.log(fstChar('24z6'));
// console.log(fstChar('1x23'));
// console.log(fstChar('y369'));
// console.log(fstChar('9000b'));

//================================================================
function wave(str){
 
  return str.split('')
            .map(function(e,i,arr)  {
              console.log('e:',e,'i:',i);
              if(e[i] === arr[i]) {
              return   e.toUpperCase()
              } else { return e}
            }).join('')
//-----------------------------------------------------------
// return Array(str.length).fill(str).map((v,i,arr)=>
// v.slice(0,i).toLowerCase()+v.slice(i,i+1).toUpperCase()+v.slice(i+1).toLowerCase())
// .filter(v=>v!=v.toLowerCase())
//-------------------------------------------------------------
//return [...w].map((a,i)=>w.slice(0,i)+a.toUpperCase()+w.slice(i+1)).filter(a=>a!=w)
//-----------------------------------------------------------
//  const wave = s => Array.from( s, (_,i) => /\s/.test(s[i]) ? null : s.slice(0,i) + s[i].toUpperCase() + s.slice(i+1) ).filter(Boolean) ;

}
// console.log(wave('two words'));
//================================================================
function sumUpNoAdjacents(a,n) {
  const evn = []
  const odd = []

  a.forEach((el,id) => {
    if(id % 2 === 0) {
      evn.push(el)
    } else { odd.push(el)}
  });

  const first = evn.map((el,id,arr) => {
    // console.log('el',el, 'sum:', el + arr[id+1]);
    if(el + arr[id+1] === n) {return true }
    else {return false}
  }).some(el => el)

  const second = odd.map((el,id,arr) => {
    console.log('el',el, 'sum:', el + arr[id+1]);
    if(el + arr[id+1] === n) {return true }
    else {return false}
  }).some(el => el)

  console.log('evn:', evn, 'odd:', odd);
  console.log('first:', first, 'second:', second);
  

  return (first || second)//.__proto__


}
// console.log(sumUpNoAdjacents([2,5,10,4,3,15,8,6,14,9],12));
// console.log(sumUpNoAdjacents([],12));
//================================================================
function incrementString (strng) {


const word = strng.split('')
                  .map((el) => el.replace(/\d/g, '') )
                  .join('')

const num = strng.split('')
                  .map((el) => el.replace(/\D/g, '') )
                  .join('')
                  .split('')
                 
const dig =  (Number(num.join(''))+1).toString().split('')

const fin = [...dig]//.fill(0)
              

console.log('word:', word, 'num:', num);
console.log('dig:', dig);
console.log('fin:', fin);
// console.log(num.length );
return (num ).__proto__
  
}
// console.log(incrementString('foobar0029'));
//================================================================
function likes(names) {

  console.log( names.length);

  switch (names.length) {
    case 0:
    return 'no one likes this'
    break;

    case 1:
    return names[0] + ' likes this'
    break;

    case 2:
    return `${names[0]} and ${names[1]} like this`
    break;

    case 3:
     return `${names[0]}, ${names[1]} and ${names[2]} like this`
    break;

    case 4:
    return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
    break;
    
    default:  return '—'
    break;
} 
  
}
// console.log(likes(["Alex", "Jacob", "Mark", "Max"] ));
//================================================================
function squareArea(A){
  return (A*4/(2*Math.PI))**2

}
// console.log(squareArea(1.57)); 
//================================================================

class Samurai {
  constructor(name) {
    this.name = name
  }
  hello() {
    alert(this.name)
  }
}
// console.log(Samurai.prototype) ;
// console.log(Samurai.prototype  === Object.prototype) ;
// console.log(Samurai.prototype === Function.prototype) ;
// console.log(Samurai.__proto__ === Function.prototype);

let shogun = new Samurai('Dim')

// console.log(shogun.prototype);
// console.log(shogun.__proto__);
// console.log(shogun.__proto__  === Samurai.prototype);

let shogun2 = new Samurai('Vik')

// console.log(shogun.__proto__ === shogun2.__proto__);

const compronent = () => {return 2}
// console.log(compronent.prototype);
// console.log(compronent.__proto__ ===  Function.prototype);

const age = 21
// console.log(age.__proto__);
// console.log(age.toString(16));
//================================================================
function isUnique(str) {

// const ar = str.split('')
// const obj = ar.reduce((acc, it) => (acc[it] = acc[it] + 1 || 1, acc), {})   
// // console.log(ar.length); 
// // console.log(obj);
// // console.log(Object.values(obj).length);

// return ar.length === Object.values(obj).length
//---------------------------------------------------------------

const set  = new Set()
for (let i = 0; i < str.length; i++) {
 let char = str[i]
  // console.log(char);

  if(set.has(char) ) {
    return false
  }
  set.add(char)
  // console.log(set);
}


return true

}
// console.log(isUnique('Ampersand'));
//================================================================
function flatten (ara) {

return ara.flat(5)

}
// console.log(flatten([[1],[[[3,7]]],[2,8,5]]));
//================================================================
function removeDups ( str) {

const set = new Set(str)
console.log(Object.values(set));

const map = new Map()
console.log(map);

return Array.from(set)
}
// console.log(removeDups('Array of life'));
 

//================================================================
function titleToNumber(title) {

const alphabet = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'
const alpha = [...(alphabet.replace(/ /g,""))]
// console.log(alpha);

const input = [...title].reverse()
// console.log(input[0]);

const idx = alpha.indexOf(input[0], 0)+ 1
console.log('idx',idx); 

const res = []
input.forEach(el => {
  let id = alpha.indexOf(el, 0)+ 1
  res.push(id)
});
console.log(res);

return res.reduce((acc,el,i) => (acc+el))

}
// console.log(titleToNumber('AA'));
// console.log(titleToNumber('CODEWARS'));
//================================================================
//================================================================
//================================================================
//================================================================