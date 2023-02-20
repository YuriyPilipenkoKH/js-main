console.log('codewars[17]   131 072');

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
//!   Remove duplicate values from JS array 
function minValue(values){

    const res = values.sort((a,b) => a-b)
                .filter((el,id,ar) => ar.indexOf(el) === id)
                .join('')
      return Number(res) 
      //----------------------------------------
//    return   +[...new Set(values)].sort().join``
  }

// console.log(minValue([5, 7, 9, 5, 7]));
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


//================================================================
//================================================================
//================================================================