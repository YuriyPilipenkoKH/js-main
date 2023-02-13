
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