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






  
  //=========================================================
  //=========================================================
  //=========================================================
  //=========================================================
  //=========================================================
  //=========================================================
  //=========================================================
  //=========================================================