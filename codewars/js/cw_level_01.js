console.log('level_01');

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