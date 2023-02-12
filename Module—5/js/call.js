const showThis =  function () {
    console.log('this —>',this);
}
// showThis()

const objA = {
    a:5,
    b:10,
}

showThis.call(objA,1)
// showThis.apply(objA,[1])

const changeColor = function (color) {
    console.log('this —>',this);
    this.color = color;
}

const hat = {
    color:'black',
};

// changeColor.call(hat,'orange')
console.log(hat);

const sweater = {
    color:"green",
}

// changeColor.call(sweater, 'blue')
console.log(sweater);