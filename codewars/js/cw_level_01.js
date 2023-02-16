
console.log('codewars[32]     4 294 967 296');
// Automedon/CodeWars-6-kyu-Soluitions

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
       
      return x ^  y
      },);
  }
// console.log(stray( [ 0, 0, 0.55, 0, 0 ]));

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
   
    const obj = text.toLowerCase().split('').
    reduce((count, item) => (count[item] = count[item] + 1 || 1, count), {});
    //.filter((e, i) => text.indexOf(e) !== i)//.filter((e, i) => text.indexOf(e) == i)//.length

    return Object.values(obj).filter(x => x > 1).length


    // return text.reduce((count, item) => (count[item] = count[item] + 1 || 1, count), {});
  }
// console.log(duplicateCount("aabbcde"));
// console.log(duplicateCount("Indivisibility"));
// console.log(duplicateCount("Indivisibilities"));

 //==========================================

 function greet (name, owner) {

return name === owner
      ? 'Hello boss'
      : 'Hello guest'
  }
// console.log(greet('Daniel', 'Daniel'));
// console.log(greet('Greg', 'Daniel'));

 //==========================================

 function findUniq(arr) {
    const obj = arr.reduce((count, item) => (count[item] = count[item] + 1 || 1, count), {});
    console.log(obj);
    for(let key in obj){
        if(obj[key] === 1) return Number(key);
    }

    //-----------------------------------------------------
    // mekes array of unique elements
    // return arr.filter((item, i, ar) => ar.indexOf(item) === i);
    //-----------------------------------------------------
    //  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
    //-----------------------------------------------------
    }
// console.log(findUniq([ 1, 0, 0 ]));
// console.log(findUniq([ 0, 0, 0.55, 0, 0 ]));

//===========================================
function findUniq2(arr) {
    let [a,b,c] = arr.slice(0,3);
    if( a != b && a!=c ) return a;
    for( let x of arr ) if( x!=a ) return x
  }
// console.log(findUniq2([0, 1, 0, 0 ]));
//===========================================
function findUniqs(arr) {
    const obj = arr.reduce((count, item) => (count[item] = count[item] + 1 || 1, count), {});
    console.log(obj);
    for(let key in obj){
        if(obj[key] === 1) return key;
    }
    //---------------------------------------------------------
    
  //  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));

  }
//   console.log(findUniqs([ 1, 1, 1, 2, 1, 1 ]));
//   console.log(findUniqs([ 4, 4, 'foo', 4 ]));
// console.log(findUniqs([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]));
//===========================================

function arrayDiff(a, b) {

// return a.filter(x => b.indexOf(x) == -1);
//-------------------------------------
//  return a.filter(e => !b.includes(e));
//----------------------------------------

const toRemove = new Set([...b]);
return a.filter( x => !toRemove.has(x) );
//-------------------------------------
// b = new Set(b)
// return a.filter(v => !b.has(v))
//-------------------------------------

}
// console.log( arrayDiff([1,2,2,1], [1]));
// console.log( arrayDiff([1,2,4,2,,4,1], [1,2]));

//===========================================
 //quater from month
 const quarterOf = m => Math.ceil(m/3);

//  console.log(quarterOf (4));
 //===========================================

 function duplicateEncode(word){
// return word.replace(/./gi, '(');
return word.split('')

 }
//  console.log(duplicateEncode("din"));
//  console.log(duplicateEncode("Success"));

 //===========================================
var number=function(array){
    return array.map((el,id) => `${id+1}: ${el}`)

}
// console.log(number(["a", "b", "c"]));

 //===========================================

 function printerError(s) {

    let f= s.match(/[^a-m]/g).length;
    return   s.match(/[^a-m]/g) === null
              ?   `0/${s.length}` 
              :    `${f}/${s.length}`
//---------------------------------------
// const printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;              

 }
// console.log(printerError("aaabbbbhaijjjm"));
// console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));

 //===========================================
// remove each second el

 function removeEveryOther(arr){
return arr.filter((el,id) => id % 2 === 0)

 }
// console.log(removeEveryOther([4,5,1,7,2,6]));

 //=========================================== 
// A smiley face

function countSmileys(arr) {
// const fit = [':',';',')','D']

// return arr.filter(el => el.includes(fit[0]))
//-----------------------------------------
// return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
//-----------------------------------------
return arr.filter(v=>v.match(/(:|;)(-|~)?(\)|D)/)).length

}
// console.log(countSmileys([':D',':~)',';~D',':)',':$']));

 //=========================================== 
const areaOrPerimeter = function(l , w) {

    return  l == w
    ?   l * w
    :   (l + w)* 2
};
// console.log(areaOrPerimeter(6,10));

 //=========================================== 
 function areYouPlayingBanjo(name) {

    let nod = name.toLowerCase()

    return nod.startsWith('r') 
            ?   `${name} plays banjo`
            :   `${name} does not play banjo`
  }

// console.log(areYouPlayingBanjo('ringo'));
 //=========================================== 

 function findEvenIndex(arr)
{
    return arr.findIndex((e,i,a)=> a.slice(0,i).reduce((p,c)=>p+c,0)==a.slice(i+1).
    reduce((p,c)=>p+c,0));
}
// console.log(findEvenIndex([1,100,50,-51,1,1]));

function countPositivesSumNegatives(input) {

const pos = input.filter(el => el > 0).length
const neg = input.filter(el => el < 0).reduce((acc,el) => acc +el)
console.log(pos);
console.log(neg);
return [pos,neg]

}
//  console.log(countPositivesSumNegatives([1, 2, 3, 4, 0, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));

 //=========================================== 

 class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length * width * height
    }
  }

// console.log(Kata.getVolumeOfCuboid(2,2,2));
 //=========================================== 

var humanYearsCatYearsDogYears = function(humanYears) {
if(humanYears == 1) return [1,15,15]
if(humanYears == 2) return [2,24,24]
 
    return [
        humanYears,
        24 + (humanYears -2) * 4,
        24 + (humanYears -2) * 5
    
    ]
  }
//   console.log(humanYearsCatYearsDogYears(5));
 //=========================================== 
 //Break camelCase

function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
    
}
// console.log(solution("camelCasing" ));
 //=========================================== 
 function nbYear(p0, percent, aug, p) {
    let years = 0;
  for (years; p0 < p; years++) {
    p0 += p0 * (percent / 100) + aug;
  }
  return years;
}
// console.log(nbYear((1500, 5, 100, 5000)));

 //===========================================
 
 function points(games) {
// const ponCount = []
return games.map((el)  => el.split(':')).map((el) => (el[0] > el[1]) ? 3 : (el[0] < el[1]) ? 0 : 1 ).
reduce((acc,el) => acc + el, 0)

  }

// console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));
// console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]));
// console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]));
 //=========================================== 
 function hoopCount (n) {

    return n >= 10 
        ?   "Great, now move on to tricks"  
        :   "Keep at it until you get it"
 }
// console.log( hoopCount(1));

 //=========================================== 

 function rps(p1, p2){
    if (p1 === p2) {
        return `Draw!`;
      }
      if (p1 === 'rock' && p2 === 'scissors') {
        return `Player 1 won!`;
      } else if (p1 === 'paper' && p2 === 'rock') {
        return `Player 1 won!`;
      } else if (p1 === 'scissors' && p2 === 'paper') {
        return `Player 1 won!`;
      } else {
        return `Player 2 won!`;
      }


};
// console.log(rps('rock', 'scissors'));

 //=========================================== 
// powers of 2

function powersOfTwo(n){
const result =[]
    for (let i = 0; i < n+1; i+=1) {
       console.log(2**i);
       result.push(2**i)
       console.log(result);
    }
    
    return result

    //---------------------------------------------
    //return [...Array(n + 1)].map((_, i) => 2 ** i)
    //---------------------------------------------
  }
// console.log(powersOfTwo(5)); 
// console.log(powersOfTwo(32));

//++++++++++++++++++++++++++++++++++++++++++++++++


function objPowTwo(n) {

    var myList = new Object();
    const temp = [...Array(n + 1)].map((_, i) => 2 ** i)
    // console.log(temp);

    const result = temp.map( function( el,id)  {
    console.log(id, el)
    return myList[id] = el
    }, [])

    return myList
}
// console.log(objPowTwo(100));
// console.log(objPowTwo(56)[44]);

function arPowTwo(n) {
  
  const temp = [...Array(n + 1)].map((_, i) => 2 ** i)
  return temp.map((el,id) => [id,el])

}
// console.log(arPowTwo(32));













 //=========================================== 
 //=========================================== 
 //=========================================== 
 //=========================================== 
 //=========================================== 
 //=========================================== 
 //=========================================== 
 //=========================================== 





