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
function past(h, m, s){
    return  (h*3600000)+ (m*60000)+ (s*1000)
    //const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);

//  function which returns the time since midnight in milliseconds.
  }
// console.log(past(0,1,1));
//==================================
const list = [4,6,2,1,9,63,-134,566] 
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

// console.log(min(list));
// console.log(max([-52, 56, 30, 29, -54, 0, -110]  ));

//==================================
function century(year) {
    // Finish this :)
    return Math.floor(year/100) +1
  }
//   console.log(century(1900));
//==================================
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
function opposite(number) {
    //your code here
    return -number
  }

//========================================
function repeatStr (n, s) {
    return [...Array(n)].map((el) => el = s ).join('')
  }

//   console.log(repeatStr(5, 's'));
  //======================================

  function invert(array) {
    return array.map((el) => -el)
 }
// console.log(invert([1,-2,3,-4,5]) );
// console.log(invert([]) );
 //======================================
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

function countSheeps(arrayOfSheep) {
    const strArray = arrayOfSheep.map((el) => `${el}`)
    // console.log(strArray);
    // console.log(arrayOfSheep);
    

const count =  strArray
    .reduce((count, item) => (count[item] = count[item] + 1 || 1, count), {});

    // return count['true'];
    // console.log(arrayOfSheep.filter(Boolean));

    return arrayOfSheep.filter(Boolean).length;
     
  } //  return arrayOfSheeps.filter(Boolean).length;
console.log(countSheeps([true,  true,  true,  false]));
//=======================================


