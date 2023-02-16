console.log('codewars[53]  9 007 199 254 740 992');

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

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
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
   
    // return b.toString()
    // return String(b)
    // return `${b}`
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
console.log(high('man i need a taxi up to ubud'));
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



  //=========================================================

  //=========================================================
  //=========================================================
  //=========================================================
  //=========================================================
  //=========================================================
  //=========================================================
  //=========================================================
  //=========================================================
  //=========================================================
  //=========================================================
  //=========================================================
  //=========================================================
  //=========================================================
  //=========================================================
  //=========================================================
  //=========================================================
  //=========================================================