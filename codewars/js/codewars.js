console.log('codewars');

function countBy(x, n) {
    const z = [];
  
    // for (let i = 1; i < n+1; i+=1) {
    //  z.push(i*x)
        
    // }
   
    //    return  [...Array(n)].map((_, id) => (id += 1) * x)
    // return  [...Array(n)].map((_, id) => ++ id * x)
  
    //returns array with length n all multiplyed by x
  }
//  console.log( countBy(2,10))

// ==========================================
//   returns the time since midnight in milliseconds.

function past(h, m, s){
    return  (h*3600000)+ (m*60000)+ (s*1000)
    //const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);

  }
// console.log(past(0,1,1));

//==================================
const list = [4,6,2,1,9,63,-134,566] 
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

// console.log(min(list));
// console.log(max([-52, 56, 30, 29, -54, 0, -110]  ));

//==================================
//   century from year

function century(year) {
    // Finish this :)
    return Math.floor(year/100) +1
  }
//   console.log(century(1900));

//==================================
// array of digits from number

function digitize(n) {
    const res = []

    const temp = n.toString().split('').reverse()
    temp.forEach((el) => {
        // console.log(el);
        // console.log(Number(el));
       res.push(Number(el))
    });
return res

//----------------------------------
//return String(n).split('').map(Number).reverse()
  }
//   console.log(digitize(4612));

  //==================================

  function greet(name){
    //your code here
    // return window.prompt('Are you feeling lucky') 
    return alert(`Hello, ${name} how are you doing today?`)
  }
// greet('Yura')

//=============================================
//  opposite number

function opposite(number) {
   
    return -number
  }

//========================================
// returns string

function repeatStr (n, s) {
    return [...Array(n)].map((el) => el = s ).join('')
  }

//   console.log(repeatStr(5, 's'));

  //======================================

  function invert(array) {
    return array.map((el) => -el)
 }
// console.log(invert([1,-2,3,-4,5]) );
// console.loginvert([]) );

 //======================================
 // even numbers

 function evenOrOdd(number) {
//   number %2 === 0
//   ? console.log('Even')
//   : console.log('Odd')
if (number %2 === 0) {
    return "Even"
} else {
    return "Odd"
}  
 } //   return number % 2 ? "Odd" : "Even"

//  console.log(evenOrOdd(0));

//=========================================

function lovefunc(flower1, flower2){
    // moment of truth
    if((flower1 + flower2) % 2 === 0){
        return true
    }return false
   
  } 
//=======================================

function getGrade (s1, s2, s3) {
 
  let score = Math.round((s1+s2+s3)/3)
  console.log(score);

  switch (true) {
        case (90 <= score && score <= 100):
        return 'A'
        break;

        case 80 <= score && score < 90:
        return 'B'
        break;

        case 70 <= score && score < 80:
        return 'C'
        break;

        case 60 <= score && score < 70:
         return'D'
        break;

        case 0 <= score && score < 60:
        return'F'
        break;
        
    default:  return '—'
        break;
  }  }
//   console.log(getGrade(77,112,100));

//=====================================
// returns string n times

var countSheep = function (num){

    let b = ` sheep...`
    return [...Array(num)].map((el,id) => el = (id+1)+ b  ).join('') 
  }
//---------------------------------------------
  // let str = "";
//   for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
//   return str;

//   console.log(countSheep (5));

//=========================================

function squareDigits(num){

    var digits = num.toString().split('');
    var realDigits = digits.map(Number)
    // console.log(digits);
    // console.log(realDigits);

return  Number(realDigits.map((el,id) => `${el ** 2}` ).join(''))
  } //  return +num.toString().split('').map(i => i*i).join('');

//   console.log(squareDigits(3212));
//=========================================
// count true items
function countSheeps(arrayOfSheep) {
    const strArray = arrayOfSheep.map((el) => `${el}`)
    console.log(strArray);
    // console.log(arrayOfSheep);
    

const count =  strArray
    .reduce((count, item) => (count[item] = count[item] + 1 || 1, count), {});

    // return count['true'];
    // console.log(arrayOfSheep.filter(Boolean));

    return arrayOfSheep.filter(Boolean).length;
     
  } //  return arrayOfSheeps.filter(Boolean).length;
// console.log(countSheeps([true,  true,  true,  false]));

//=======================================
//same amount

function XO(str) {
  const amountArray = str.toLowerCase().split('')

  // console.log(amountArray);

  const count =  amountArray
    .reduce((count, item) => (count[item] = count[item] + 1 || 1, count), {});
    console.log(count);
    console.log(count.o);
    console.log(count['x']);

    if(count['o'] === count['x']) {
        return true
    }   return false
    //-------------------------------------------------
    // str = str.toLowerCase().split('');
    // return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
    //------------------------------------------------
    //  return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}
console.log(XO("ooxx"));
// console.log(XO("ooxXm"));

//===================================
//  
function maps(x){
 return x.map( el => el *2)
}
// console.log(maps([1, 2, 3]));

//===================================
// 
function litres(time) {
    return Math.floor(time *0.5 )
  }
//   console.log(litres(3));

  //===================================
// sum in binary parseInt(number / 2)

function addBinary(a,b) {

    return  Number((a+b >>> 0).toString(2));
    //-----------------------------------
    //return (a+b).toString(2)
}
// console.log(addBinary(51,12) );
//===================================
// 9  007  199  254  740  992  BigInt  2 ** 53
//           4  294  967  296  Number  2 ** 32
//===================================

function dec2Bin(dec) {
    return (dec >>> 0).toString(2);
  }

// console.log( dec2Bin(-5));
// console.log( dec2Bin(5));

//===================================

// window['ref'].style.background = 'red';
// ref.hidden = true

//===================================

// let div = document.createElement('div');
//   div.className = "alert";
//   div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";

//   document.body.append(div);
//   setTimeout(() => div.remove(), 10000);

  //===================================
//validate for digits only
//   var alphanum=/^[0-9a-bA-B]+$/; //This contains A to Z , 0 to 9 and A to B
// if(usrid.value.match(alphanum)){
// return true;
 

function validatePIN (pin) {
  // console.log(typeof(pin));
if (typeof(pin) === 'number') {
  
  if( pin.toString().length == 4 || pin.toString().length == 6) {
    return true
  } return false
}return false

}
// console.log(validatePIN(0000));
  //===================================
  //You get an array of numbers, return the sum of all of the positives ones.

  function positiveSum(arr) {
let res = 0
return arr.reduce(function(sum, current) {
  if (current > 0) {
   res =  sum + current;
  }
  return res
}, 0);
  }
  // console.log(positiveSum([1,-4,7,12])); 
//===================================================

function simpleMultiplication(number) {
  if(number % 2 === 0) {
    return number*8
  } return number*9
  // return n % 2 == 0 ? n * 8 : n * 9
}
// console.log(simpleMultiplication(5));

//===================================================

function solution(str){
  // return str.split('').reverse().join('')
  return  [...str]
}
// console.log(solution('fight'));

//===================================================

const stringToNumber = function(str){
  // put your code here
  return Number(str)
}

// console.log(stringToNumber("1405"));

//===================================================
//There is a bus moving in the city which 
//takes and drops some people at each bus stop.

var number = function(busStops){
const test = busStops.flatMap(n => n)
const ins = test.filter((number,id) => id % 2 === 0).reduce((acc,el) => acc + el, 0)
const outs = test.filter((number,id) => id % 2 !== 0).reduce((acc,el) => acc + el, 0)

return ins - outs
} //const number = busStops => busStops.reduce((p,n) => p+n[0]-n[1],0)

// console.log(number([[10,0],[3,5],[5,8]]))

//===================================================
//no space

function noSpace(x){
return x.split(' ').filter(el => el).join('')

//   return x.replace(/\s/g, '');
//   const noSpace = x => x.replace(/ /g, "");
}
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));

//===================================================
//remove all of the vowels 

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, ''). replace()
}

// console.log(disemvowel("This website is for losers LOL!"));

//===================================================
//
function smash (words) {
  return words.join(' ')
};
// console.log(smash(['hello', 'world', 'this', 'is', 'great'] ));

//===================================================
// you're better than the average 
//[41, 75, 72, 56, 80, 82, 81, 33]

function betterThanAverage(classPoints, yourPoints) {

  const average = classPoints.reduce((acc, el) => acc + el, 0) / classPoints.length;
console.log(average);
return (average < yourPoints)
? true
: false
}

// console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));
//===================================================
//return if number

function filter_list(l) {
  return l.filter(function(el) { return typeof el === 'number' })
}
// console.log(filter_list([1,5,3,2,'g,' ,'sd', 'd ']));

//===================================================
// bin 2 dec    from string

const binaryArrayToNumber = arr => {

  return parseInt( (arr.join('')), 2)
};
// console.log(binaryArrayToNumber([0,0,1,0]));

//===================================================
//  length of the shortest word

function findShort(s){
// const tod = s.split(' ').map((str, index) => ({ value: str, id: index + 1 }));
// console.log(tod[0].value);

const shortestWord = s.split(' ').reduce((a, b) => a.length <= b.length ? a : b)
return shortestWord.length

// return Math.min.apply(null, s.split(' ').map(w => w.length));
// return Math.min(...s.split(" ").map (s => s.length));
// return s.split(' ').sort((a, b) => a.length - b.length)[0].length || 0;
// const findShort = (s) => s.split(' ').sort((a, b) => b.length - a.length).pop().length;
}
// console.log(findShort("Let's travel abroad shall we"));

//===================================================

var summation = function (num) {

   let sum = 0
   for (let i = 1; i <num+1; i += 1) {
   sum = sum + i
}
return sum

// return num * (num + 1) / 2
// return (num > 1) ? num + summation(num - 1):num;
}
// console.log(summation(8));

//===================================================
// cockroach speed  Math.floor((kmph * centimetersInKilometers) / secsInHour)

function cockroachSpeed(s) {
 
 return Math.floor((s * 100000) / 3600)
}
// console.log(cockroachSpeed(1.08));

//===================================================
//   3 integer values a, b, c.
// return true if a triangle can be built with the sides of given length

function isTriangle(a,b,c) {
  return (a+b > c && a+c > b && b+c > a) ? true : false
  // Math.max(a,b,c)<(a+b+c)/2

}
// console.log(isTriangle(7,2,2));

//===================================================
// array of integers from n to 1

function reverseSeq(n) {
  const finArr = []
  for (let i = n; i > 0; i-=1) {
    finArr.push(i)
  }
  return finArr;
};
// console.log(reverseSeq(7));

//===================================================
// Return the number  of vowels    //   return str.replace(/[aeiou]/gi, ''). replace()

function getCount(str) {
  // return str.match(/[aeiou]/gi).length;
  return (str.match(/[aeiou]/ig)||[]).length;
}
// console.log(getCount('abyraca dab yra'));

//===================================================
// boolean

function setAlarm(emp, vac){
return emp && ! vac
}
// console.log(setAlarm(true, true));
// console.log(setAlarm(false, true));
// console.log(setAlarm(false, false));
// console.log(setAlarm(true, false));

