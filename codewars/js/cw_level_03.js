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

return numbers.map((e,i,a) => e) 

}
console.log(twoSum([1, 2, 3], 4));

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
console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]));
//================================================================
//================================================================
//================================================================
//================================================================
//================================================================