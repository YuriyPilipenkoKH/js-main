 
const changeColor = function (color) {
    console.log('this —>',this);
    this.color = color;
}

const hat = {
    color:'black',
};


const sweater = {
    color:"green",
}

// const changeHatColor = changeColor.bind(hat)
// changeHatColor()
// const changeSweaterColor = changeColor.bind(sweater)
// changeSweaterColor('yellow')
console.log(sweater);

// ========================================================

function sum(numbers) {
    [...numbers].reduce((acc,number) => {
   
    let total = acc += number;
 
    return total
 },0)

};

console.log(sum([1, 5.2, 4, 0, -1]));
