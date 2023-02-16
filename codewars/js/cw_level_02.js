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
    // const abet = '0123456789abcdefghijklmnopqrstuvwxyz'
    // const abetArray = abet.split('')

    // console.log(abetArray[19]);
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
console.log(minMax([1,2,3,4,5]));

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
  //=========================================================
  //=========================================================
  //=========================================================