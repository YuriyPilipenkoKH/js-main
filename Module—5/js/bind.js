 
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
const changeSweaterColor = changeColor.bind(sweater)
// changeSweaterColor('yellow')
// console.log(sweater);

// ========================================================

function sum(numbers) {
    console.log(numbers);
return numbers.reduce((acc,number) =>   {
    console.log(acc);
   return acc + number})

};
// console.log(sum([1, 5.2, 4, 0, -1]));
// ========================================================

const obj1 = {
    user: 'Sara Conor',
    getUser: function() {
        return this.user
    }
} 

const obj2 = {
    user: 'John Conor'
}
// console.log(obj1.getUser());

const f1 = obj1.getUser
// console.log(f1());
const f2 = f1.bind(obj1 )
// console.log(f2())

const f3 = f1.bind(obj2)
// console.log(f3());

// console.log(obj2);
// ======================================================== 
const button = {
    type: 'button',
    text: 'click',
    fs: '4em',

    render: function() {
        const b = document.createElement(this.type)
        b.textContent = this.text
        // b.backroundColor = 'teal'
        // b.padding = '20px'
       
        return b
    }
}

document.querySelector('.out').append(button.render())

const renderElement  = button.render
// console.log(renderElement) ;

const renderP  = renderElement.bind({type:'p',text:'bind()'})
document.querySelector('.out').append(renderP())


