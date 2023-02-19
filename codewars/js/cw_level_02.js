console.log('codewars[53]  9 007 199 254 740 992');
// querySelector

function stray(numbers) {
    return numbers.reduce((acc,el) => acc^el)
  }
//   console.log(stray([17, 17, 3, 17, 17, 17, 17]));

  //=========================================================
  function makeNegative(num) {
    return num === 0 
      ? 0 
      : num < 0 
            ? num
            : -num

    } //  return -Math.abs(num);
// console.log(makeNegative(-11));
  //=========================================================

  function friend(friends){
console.log(friends);
// friends[0].length
return friends.filter(el => el.length === 4)

  }
// console.log(friend(["Ryan", "Kieran", "Mark"]));
  //=========================================================
// Persistent Bugger

function persistence(num) {

    var times = 0;
    num = num.toString();
 
    while (num.length > 1) {
      times++;
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
 
     return times;
 }
// console.log(persistence(55));
  //=========================================================
  function sumDigPow(a, b) {
    const ans = [];
    while(a <= b){
      if(a.toString().split('').reduce((x,y,i)=>x +y ** (i + 1),0) == a)
        ans.push(a);
      a++;
    }
    return ans;

  }
//   console.log(sumDigPow(1, 10));
  //=========================================================

  function calculateYears(principal, interest, tax, desired) {
 
    let year=0;
    while (principal<desired){year++; principal=principal+((principal*interest)-(principal*interest*tax))}
    return year
}
// console.log(calculateYears(1000, 0.05, 0.18, 1100));
  //=========================================================

  function accum(s) {


return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
// console.log(accum("ZpglnRxqenU"));

  //=========================================================

  function expandedForm(num) {
        return num.toString().split('').map(Number).reverse().
       map(function(el,id) {

        console.log(el,id);
        return el *( 10 ** id)
        }).reverse().filter(a => a > 0).join(" + ");
   
    //----------------------------------------------------------------------
// return num.toString().split("").reverse().map( (a, i) => a * Math.pow(10, i)).
// filter(a => a > 0).reverse().join(" + ");

  }
//   console.log(expandedForm(12085));
  //=========================================================
  function findNextSquare(sq) {

    return Number.isInteger(Math.sqrt(sq))
        ?   Math.sqrt(sq) === 0
                ?   -1
                :   ((Math.sqrt(sq))+1) ** 2
        :   -1

     //---------------------------------------------   
    //var root = Math.sqrt(sq);
  //return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;    
  }

// console.log(findNextSquare(25));

// console.log(Number.isInteger(-55.3));
  //=========================================================

  function sumOfSquares(n) {
    const pArray =[]
    let count = 0
    
    while (pArray.reduce((a,b) => a+b) !== n) {
        count +=1
        pArray.push(5)
    }

return pArray

  }
// console.log(sumOfSquares(15));

 //=========================================================

function correct(string){

// const fin = string.split('').map(el => el.includes('0') ? el.replace('0','O') :el)
// console.log(fin[1].includes('0'))
// fin.map(el => el.includes('0') ? el.replace('0','O') :el)
// return fin
//--------------------------------------------------

return string
        .replace(/5/g, 'S')
        .replace(/0/g, 'O')
        .replace(/1/g, 'I')

}
// console.log(correct("L0ND0N"));
  //=========================================================

  function encrypt(text, n) {
    // console.log(text, n);
    if (!text || n <= 0) return text; 
    while (n--) {
      let ans = '';
      for (let i = 1; i < text.length; i += 2) {
        ans += text[i];
      }
      for (let i = 0; i < text.length; i += 2) {
        ans += text[i];
      }
      text = ans;
    }
    return text;

  }
// console.log(encrypt("012345", 1));
  
  function decrypt(encryptedText, n) {
    if (!encryptedText || n <= 0) return encryptedText;
  const ans = new Array(encryptedText.length);
  while (n--) {
    let j = 0;
    for (let i = 1; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    for (let i = 0; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    encryptedText = ans.join('');
  }
  return encryptedText;

  }
// console.log(decrypt('135024',1));
  //=========================================================
  function oddOrEven(array) {
    if(array.length === 0) {
        return "even"
    } else {
        return array.reduce((el,id) => el + id ) % 2 === 0
        ? "even"
        : "odd"
    }
 }
// console.log(oddOrEven([]));
  //=========================================================
  function alphabetPosition(text) {
    const abet = '0123456789abcdefghijklmnopqrstuvwxyz'
    const abetArray = abet.split('')

    // console.log(abetArray[13]);
    // console.log(abetArray.indexOf('a'));

    
  // return text
  //       .toLowerCase()
  //       .replace(/ /g, '')
  //       .replace(/,/g, '')
  //       .replace(/'/g, '')
  //       .replace('.', '')
  //       .split('')

        //.map(el =>  typeof el === 'string' ? el = abetArray.indexOf(el)-9 : el )   //abetArray.indexOf(el)+1)
//.join(' ')
 
return text.split('').filter(v=>/[a-zA-Z]/.test(v)).map(v=>v.toLowerCase().charCodeAt(0)-96).join(' ');
  }

// console.log(alphabetPosition("The sunset sets at twelve o' clock."));
// console.log(alphabetPosition('0 19 2 0 0 0 25 21'));

  //=========================================================
  function firstNonConsecutive (arr) {
    for (let i = 0; i <arr.length-1; i++){
      if(arr[i+1] != arr[i]+1){
        return arr[i+1];
      }
    }
    return null;
  }
  // console.log(firstNonConsecutive([1,2,3,4,6,7,8]));
  //=========================================================
  function finalGrade (exam, projects) {

    return exam > 90 && projects > 10 
            ? 100
            : exam > 75 || projects >= 5 
                ? 90
                : exam > 50 || projects >= 2 
                    ? 75
                    : 0
  }
// console.log(finalGrade(19, 4));
  //=========================================================

  function solution(str, ending){

    return str.endsWith(ending)

  }
// console.log(solution('abcde', 'cde'));

  //=========================================================

  function filter_list(l) {

    return  l.filter(el => typeof el === 'number')
    // return  l.filter(el => typeof el === 'string')
  }
// console.log(filter_list([1,'a','b',0,15]));

  //=========================================================
  function isIsogram(str){

  const obj = str.toLowerCase().split('')
                 .reduce((acc, it) => (acc[it] = acc[it] + 1 || 1, acc), {})
// console.log(Object.values(obj));

  return !(Object.values(obj).some(e => e > 1))

  }//  return !/(\w).*\1/i.test(str)
// console.log(isIsogram("Isogram"));
  //=========================================================
  function booleanToString(b){
   
    //?  return b.toString()
    //?  return String(b)
    //?  return `${b}`
    return b+'';
    
  }
  // console.log(booleanToString(true));
  //=========================================================
  function minMax(arr){

    let h = Math.max(...arr)
    let l = Math.min(...arr)

    return [l,h]; 

  }
// console.log(minMax([1,2,3,4,5]));

  //=========================================================
  function numberToString(num) {
      return num + ""
    
  }
  // console.log(numberToString(67));
  //=========================================================
  function findOdd(A) {
    
//     const ml = A.reduce((acc, it) => (acc[it] = acc[it] + 1 || 1, acc), {})
//     console.log(Object.values(ml))
//     console.log(Object.keys(ml))

//   const res =  Object.keys(ml).forEach(el => {
//       console.log(el);
//       if(Object.values(ml) %2 !== 0) {
//           return el
//       }
      
//       })

// return res
//------------------------------------------------------
let count = {};
A.forEach(v => {
  count[v] = count[v] ? count[v] + 1 : 1;
});
return +Object.keys(count).find(key => count[key] % 2 === 1);

    }  //const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
  // console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));

  //=========================================================
  String.prototype.toAlternatingCase = function () {

return this.split('')
          .map((dt)  => {
            if(dt.toUpperCase() === dt ) {
              return dt.toLowerCase()
            } else {
              return dt.toUpperCase()
            }
          })
            .join('')
  }
// console.log('test'.toAlternatingCase());

  //=========================================================
  function saleHotdogs(n){

    return n < 5 
          ? 100
          : n >= 5 && n < 10 
               ? 95
               : 90
  }
// console.log(saleHotdogs(5));

//=========================================================
  function domainName(url){
    return url.toLowerCase()
              .replace('http://', '')
              .replace('https://', '')
              .replace('www.', '')
              .split('.')[0]

//-----------------------------------------------
// return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
// return url.replace(/.+\/\/|www.|\..+/g, '')
  }
// console.log(domainName("http://google.com"));

  //=========================================================
  var uniqueInOrder=function(iterable){
 
    const obj = typeof iterable === 'string' 
                    ? iterable.split('').reduce((acc, it) => (acc[it] = acc[it] + 1 || 1, acc), {})
                    : iterable.reduce((acc, it) => (acc[it] = acc[it] + 1 || 1, acc), {})

    
      return  typeof iterable === 'string' 
                      ? Object.keys(obj)
                      : Object.keys(obj).map(Number)           
  }
  // console.log(uniqueInOrder('AAAABBBCCDAABBB'));
  // console.log(uniqueInOrder([1,2,2,3,3]));

  //=========================================================
  //! Object from array
  
  function dirReduc(arr){
    const one = 1

    const obj = arr.reduce((acc, it) => (acc[it] = acc[it] + 1 || 1, acc), {})
      console.log(Object.values(obj)['1']);

      const {NORTH, SOUTH, EAST, WEST} = obj

      return Object.keys(obj)[Object.values(obj)['1']]
//----------------------------------------------------------
// var count = 0;
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] === "WEST" && arr[i+1] === "EAST" ||
//       arr[i] === "EAST" && arr[i+1] === "WEST" ||
//       arr[i] === "NORTH" && arr[i+1] === "SOUTH" ||
//       arr[i] === "SOUTH" && arr[i+1] === "NORTH") {
//       arr.splice(i, 2);
//       count++;
//       i--;
//   }
// }
// return count === 0 ? arr : dirReduc(arr);

  }
// console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
  //=========================================================
  function check(a, x) {

return a.some(e => e = x)
  }
// console.log(check([101, 45, 75, 105, 99, 107],107));
  //=========================================================
  function high(s){
    const abet = 'abcdefghijklmnopqrstuvwxyz'
    const abetArray = abet.split('')

    console.log(abetArray[13]);

//     const prom =  s.split(' ')
//             .map(el => el= [el.split('')
//             .map(el => el = abetArray.indexOf(el))
//             .reduce((a,b) => a+b)])
//             .flat()
//             // const index = prom.indexOf(Math.max(...prom))
//             .reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0)

// // console.log(prom);
// // console.log(index);
// return s.split(' ')[prom]

  //----------------------------------------------------------------
  
  let as = s.split(' ').map(s => [...s].reduce((a, b) => a+b.charCodeAt(0) - 96, 0)
  );
  return s.split(' ')[as.indexOf(Math.max(...as))];
  }
// console.log(high('man i need a taxi up to ubud'));
// console.log(high('what time are we climbing up the volcano'));
  //=========================================================

  
function temp(st) {
  // const arra = []
  // for (let i = 0; i < st.length; i++) {
  //  arra.push(st[i])
  // }
  const abet = 'abcdefghijklmnopqrstuvwxyz'
  const abetArray = abet.split('')

    // console.log(abetArray[19]);
    // console.log(abetArray.indexOf('o'));

return st.split('').map(el => el = abetArray.indexOf(el)).reduce((a,b) => a+b)
}
// console.log(temp('goodbuy'));

var a = [0, 21, 22, 7];
var indexOfMaxValue = a.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
// console.log(indexOfMaxValue);

  //=========================================================
  function arithmetic(a, b, operator){

    return operator === 'add'
            ? a + b
            : operator === 'subtract' 
              ? a-b
              : operator === 'divide' 
                ? a/b
                : operator === 'multiply' 
                  ? a*b
                  : 0

  }
  // console.log(arithmetic(8, 2, "subtract"));

  //=========================================================
  function highAndLow(numbers){

const dg = numbers.split(' ').map(Number)


    const hi = Math.max(...dg)
    const lo = Math.min(...dg)

  return `${hi} ${lo}`
  }
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

  //=========================================================

  function findDifference(a, b) {
      const asq = a.reduce((x,y) => x * y)
      const bsq = b.reduce((x,y) => x * y)
      console.log(asq);
      console.log(bsq);
    
      return Math.abs(asq - bsq)
  }
// console.log(findDifference([3, 2, 5], [1, 4, 4]));

  //=========================================================
  function roundToNext5(n){
    const rest = n % 5
   
    return n % 5 === 0
            ? n
            : n > 0 
              ? n - rest + 5
              : n - rest 

  }// return Math.ceil(n/5)*5;
  // console.log(roundToNext5(12));

  //=========================================================
  function getMiddle(s){

  // const qs = s.split('')
  // console.log(qs.length);
  // // console.log(qs[2]);
  // console.log(qs[(qs.length)/2])

  // return qs.length % 2 === 0
  //       ?  `${qs[qs.length/2-1]}${qs[qs.length/2]}`
  //       :  `${qs[qs.length/2]}`.
  //-------------------------------------
  return s.slice((s.length - 1) / 2, s.length/2 +1)
      

  }//`${qs.length/2}${qs.length/2+1}`

// console.log(getMiddle("testl"));
  //=========================================================
  function updateLight(current) {
  return current === "green"
        ? "yellow"
        : current === "yellow" 
          ? "red"
          : current === "red"
             ? "green"
             : 0


  }
// console.log(updateLight("yellow"));
  //=========================================================
  function findMultiples(integer, limit) {
  const tr = []
  for (let i = integer; i <= limit ; i+= integer) {
    tr.push(i)
  }
  
  return tr
  }// return Array(Math.floor(limit/int)).fill(1).map((x,i)=>int*(i+1));
// console.log(findMultiples(5,21));

  //=========================================================
  function expressionMatter(a, b, c) {
    let output = [];
  output.push(a *(b + c));
  output.push(a * b * c);
  output.push(a + b * c);
  output.push((a + b) * c);
  output.push(a+b+c);
    return Math.max(...output);
  
  }//return Math.max(a+b+c, a*b*c, (a+b)*c, a*(b+c));
// console.log(expressionMatter(1,2,3));

  //=========================================================
  function solut(nums){

    return nums 
            ? nums.sort((a,b) => a-b)
            : []

  }
  // console.log(solut([1, 2, 10, 50, 5]));
  // console.log(solut());
  //=========================================================
 function rot13(str){
    var lower = "abcdefghijklmnopqrstuvwxyz",
        upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        mod   = upper.length;
      
    return str
     .split('')
     .map(function(i) {
            return i.match(/[a-zA-Z]/) 
                ? (i.charCodeAt(0) < 90) 
                    ? upper[(upper.indexOf(i) + 13) % mod]
                    : lower[(lower.indexOf(i) + 13) % mod]
                : i;
     })
     .join('');
}
// console.log(rot13('ws~=[c elXZ'));

  //=========================================================
  var capitals = function (word) {
    const ara = []
    const cv = word.split('')
                  for (const c of cv) {
                    // console.log(cv.indexOf(c));
                    if(/^[A-Z]+$/.test(c)) {
                      ara.push(cv.indexOf(c))
                    }
                  }
     return ara

  };
// console.log(capitals('CodEWaRs'));
  //=========================================================
  class SmallestIntegerFinder {
    constructor(arr) {
      this.arr = arr;
     
    }
    get small() {
      return this.findSmallestInt();
    }
    
    findSmallestInt() {
      return this.arr.reduce((a,b) => a+b,0) 
      

       }
       
       
  }

  const int = new SmallestIntegerFinder([34, 15, 88, 2])
  // console.log(int.small);
  //=========================================================
  function between(a, b) {

    
  //   const cd = []
  //   for (let i = a; i <= b; i++) {
  //    cd.push(i)
      
  //   }
  // return cd
  //---------------------------------------------------------
  // return Array.from(new Array(b-a+1), (_, i) => a + i);
  //---------------------------------------------------------
  // return [...Array(b - a + 1)].fill(b).map((_, idx) => idx + a);
  //---------------------------------------------------------
  //  return Array.from({ length: b - a + 1 }, () => a++)
  //---------------------------------------------------------
  return Array(b - a + 1).fill(1).map((_, i) => a + i)
  //---------------------------------------------------------
  //---------------------------------------------------------
  }
// console.log(between(2,8));
  //=========================================================
function addFive (arg) {
console.log(typeof arg);

return typeof arg === 'number' 
              ? arg + 5
              : 0
}
// console.log(addFive('h'));

  //=========================================================
  function nbDig(n, d) {

  const test = [...Array(n+1)].map((_, i) =>  i **2).map(el => el.toString())   
  console.log(test);
  console.log(test[5].includes('2'));

  return test.filter(el => el.includes(`${d}`)).length
  }
  // console.log(nbDig(16, 2));

  //=========================================================
  function checkExam(array1, array2) {
  console.log(array1.length);
const res = array2.map( (el,id) => {
  if (el === array1[id]) {
      return 4
  } else if (el ===  '') {
    return 0
  } else { return -1}
}).reduce((a,b ) => a+b)
  
return res < 0 
            ? 0
            : res
//------------------------------------------------------
  //? return   Math.max(array2.reduce((a,b,i) =>b==array1[i]?a+4:b?a-1:a,0),0)        
  
  }
// console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))
// console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]))
// console.log(checkExam(["a", "a", "c", "b"], ["d", "d", "d",  "d"]))

  //=========================================================

  function count (string) {  
  
  
  //   return string.split('')
  //   .reduce((acc, it) => (acc[it] = acc[it] + 1 || 1, acc), {})
//------------------------------------------------------
//?  [...string].reduce((acc, el) => (acc[el] = -~acc[el], acc), {});
//--------------------------------------------------------
const r = {};
string.split('').forEach(c => r[c] = (r[c] || 0) + 1);
return r;
  }
//---------------------------------------------------------
//?   const count = require('lodash').countBy;

//  console.log(count("aba")); 
  //=========================================================
  var isSquare = function(n){

return Number.isInteger(Math.sqrt(n))
// return Math.sqrt(n) % 1 === 0;
  }
  // console.log(isSquare(4));
  //=========================================================
  function getChar(c){

return  String.fromCharCode(c);
  }
// console.log(getChar(65));

  //=========================================================
  function xor(a, b) {
return Boolean(a^b)
  
  }//?  return a != b;
// console.log(xor(false, false));

  //=========================================================
  function disjunction(operands, isExclusive) {

    return operands.reduce((a, b) => isExclusive ? a ^ b : a | b) != 0
  
  }//  return !(operands.reduce((a, b) => a ^ b, isExclusive));
// console.log(disjunction([1, 2, 3], false));

  //=========================================================
  function logicalCalc(array, op){
  //   let w 
  // op === "AND"
  //     ? w = '&&'
  //     : op === "OR"
  //        ? w = '||'
  //        :  op === "XOR"
  //           ? w = '^'
  //           : w = 0 

  //     console.log(w); 

  //     return Boolean(array.reduce((a,b) => `${a} ${w} ${b}`))
  //--------------------------------------------------------
  //return !!array.reduce((prev,cur)  => op == 'AND' ? prev && cur : op == 'OR' ? prev || cur : prev ^ cur  )
  //--------------------------------------------------------

 }
// console.log(logicalCalc([true, true, true, false], "AND"));
// console.log(logicalCalc([true, true, true, false], "XOR"));
  //=========================================================
  function reverseLetter(str) {

    return  str.replace(/[^a-z]/g, '').split('').reverse().join('')
    
  }// str.match(/[a-z]/g).reverse().join('');
// console.log(reverseLetter("ultr53o?n"));

  //=========================================================
  function openOrSenior(data){

// return [...Array(data.length)].fill(1)
          // .map((el,i) => (data[i][0] >= 55) || (data[i][1] > 7) ? 'Senior' : 'Open' )
          //----------------------------------------------------------------------------
              // .map(function(el,i) {
              //   console.log(data[i][1]);
              //   return el
              // })
   //----------------------------------------------------
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');           

  }
// console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));
// console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]));
  //=========================================================
  // string to char
function funn (a) {

  const char = a.map(el => el.charCodeAt() )
  const bin = char.map(el => el.toString(2)).map(Number)

  console.log(char);
  console.log(bin);
  // console.log('C'.charCodeAt());

  return this
}
// console.log(funn(['p','a','s','s','w','o','r','d']));
  //=========================================================
  function binaryToString(binary){
    console.log(String.fromCharCode(67, 97, 116));
  
return binary.replace(/0b/g, '.')
             .split('.')
             .filter(e => e)
             .map(Number)
            //  .map(e => parseInt(e, 2))
            //  .map(e => String.fromCharCode(e))
            //  .join('')
   //-----------------------------------------------------
   //?  String.fromCharCode(...binary.split(/(?=0b)/));          
   //-----------------------------------------------------
   //? String.fromCharCode( ...binary.split( /(?=0b)/ ).map(Number) ) ;         
   //----------------------------------------------------- 
   //?  String.fromCharCode(...a.slice(2).split`0b`.map(a=>parseInt(a,2)))         
          
  }
// console.log(binaryToString('0b10000110b11000010b1110100'));
  //=========================================================
  function decodePass( passArr, bin ){
 
    const keyPass = bin.split(' ')
               .map(Number)
               .map(e => parseInt(e, 2))
               .map(e => String.fromCharCode(e))
               .join('') 

    const fin = passArr.filter(el => keyPass === el ? el : false)     
    return fin.length !== 0
            ? fin.toString()
            : false
//---------------------------------------------------------
//const password = String.fromCharCode( ...s.split(" ").map( s => Number.parseInt(s,2) ) );
//return a.includes(password) && password ;

//---------------------------------------------------------
//let out = bin.split(' ').map($ => String.fromCodePoint(parseInt($,2))).join('')
//return passArr.includes(out) ? out : false
//---------------------------------------------------------
// passArr.find(
//   (pass) =>
//     pass ===
//     bin
//       .split(' ')
//       .map((b) => String.fromCharCode(parseInt(b, 2)))
//       .join('')
// ) || false;
//---------------------------------------------------------
// const password = bin.split` `.map(b => String.fromCharCode(parseInt(b, 2))).join``;
//   return passwords.find(pass => pass === password) || false;
//---------------------------------------------------------
//  const password = String.fromCharCode(...bin.split(' ').map(x => parseInt(x, 2)));
  // return passArr.includes(password) && password;
//---------------------------------------------------------
  }
//console.log(decodePass(['password123', 'admin', 'admin1'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011'));

  //=========================================================
function twoString(arg) {

return Math.E.toString()
}
// console.log(twoString());
  //=========================================================

  //  const conditions  
  // Test.assertEquals((123).toString(), "123"),
  // Test.assertEquals(Math.PI.toString(), "3.141592653589793"),
  // Test.assertEquals(Math.E.toString(), "2.718281828459045"),
  // Test.assertEquals(true.toString(), "true"),
  // Test.assertEquals(false.toString(), "false"),
  // Test.assertEquals([1,2,3,4,5].toString().replace(/\s+/g, ""), "[1,2,3,4,5]"),
   

  Boolean.prototype.toString = Number.prototype.toString = Array.prototype.toString =
  function () { return JSON.stringify(this); }
  //------------------------------------------------=--------
  //String.prototype.toString = function(){
 // return `${this}`
//}

  //=========================================================
  function toBinaryString(number){
    const out = Array(4).fill(0)

  const pow = Array(4).fill(0)
                 .map((e,i) => 2**i)

     while (out.reduce((a,b) => a+b) < number) {
    out.push('1')
     }            
                 console.log(out);
                 
  }
// console.log( toBinaryString(15)); // MY solution
  //=========================================================
// program to convert decimal to binary
function convertToBinary(x) {
  let bin = 0;
  let rem, i = 1, step = 1;

  while (x != 0) {
      rem = x % 2;
      console.log(
          `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}`
      );
      x = parseInt(x / 2);
      bin = bin + rem * i;
      i = i * 10;
  }
  console.log(`Binary: ${bin}`);
}

// take input
// let number = prompt('Enter a decimal number: ');
// convertToBinary(number);
  //=========================================================
  // bin to dec
  const getDecimalValue = function (head) {

    let total = head.reduce(
        (sum) =>
        sum + (head.shift() * Math.pow(2, head.length))
    )
    return total
    //-------------------------------------------------
    // let sum = 0
    // let i
    // while ((i = head.shift()) !== undefined) {
    //     sum += (i * Math.pow(2, head.length))
    //     // console.log(i * Math.pow(2, head.length))
    // }
    // return sum
}
// console.log(getDecimalValue([1,0,1]));
  //=========================================================
// dec to bin

function d2b(x) {
  for (let j = x; j <= 16; j++) {
    console.log(j);

    let res = ""
    let number = j
   
     while (number > 0) {
       res = res + number % 2
       number = Math.floor(number / 2)
     }
   
 let    len = res.length
   
 let rev=""
   
     for (let i = 1; i <= len; i++) {
       rev = rev + res[res.length - i]
     }
     
    //  console.log(rev)
    return rev
   }

}
  // console.log(d2b(2));

  //=========================================================
  // git hub solution

  function to2BinaryString(num){
    let out = "", bit = 1;
     while( num >= bit ) {
         out = ( num & bit ? 1 : 0 ) + out;
         bit <<= 1;
     }
     return out || "0";
 }
console.log(to2BinaryString(8));
//=========================================================
function to3BinaryString(n) {
  if (!n) return '0';
  for (var s = ''; n; n = n >> 1) s = (n % 2) + s;  
  return s;
}
//=========================================================
const to4BinaryString = n => {
  for (var i = 0, s = ''; i < 32; i++, s += String(n >>> 31), n <<= 1);
  return s.replace(/^0+/, '') || '0';
}
//=========================================================
const to5BinaryString=(n,s='')=>!n?s||'0':toBinaryString(~~(n/2),n%2+s)
//=========================================================
const to6BinaryString = n => {
  for (var i = 0, s = ''; i < 32; i++, s += String(n >>> 31), n <<= 1);
  return s.replace(/^0+/, '') || '0';
}
//=========================================================
function to7BinaryString(n) {
  if (!n) return '0';
  for (var s = ''; n; n = n >> 1) s = (n % 2) + s;  
  return s;
}
//=========================================================
const to8BinaryString=(n,s='')=>!n?s||'0':toBinaryString(~~(n/2),n%2+s)
//=========================================================
function to9BinaryString(d)
{
  var b = "";
  do {
    b = (d%2) + b;
    d = Math.floor(d/2);
  } while (d > 0);
  return b;
}
//=========================================================
const to10BinaryString = n => n ? (n > 1 ? toBinaryString(n >> 1) : '') + n % 2 : '0';
//=========================================================