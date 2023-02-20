function getTabLabel(tabName) {
    const labels = {
        theory: 'Teo',
        extras: 'Materials',
        homework: 'Home task',
        
    }
    
    return labels[tabName]
}
//* console.log(getTabLabel('homework'));
//===================================================
 const user = { 
    tag: 'mango',
    showTag() {
        console.log('this', this.tag);
    }
 }
//?   const outerShowTag = user.showtag//.bind(user)
//?   outerShowTag()
// user.showTag()
// console.log(user);


 //===================================================

 const show2Tag = function() {
    console.log('this', this.tag);
 }

 const user2 = {
    tag: 'Mango',
 }
// show2Tag.call(user2)

user2.show2Tag = show2Tag
//* user2.show2Tag()
//*  console.log(user2);

//* console.log(Object.isExtensible(user));
// console.log(Object.isFrozen(user));
// console.log(Object.is(user));
// console.log(Object.isSealed(user));
// console.log(Object.isPrototypeOf(user));
// console.log(Object.getPrototypeOf(user));


  //===================================================
const makeChangeColor = function () {
     const changeColor = function(color) {
        //
        console.log('this color:', this);
        this.color = color
     }


     const sweat = {
        color: 'teal',
     }

    //  sweat.changeColor()
     return changeColor.call(sweat)

    //  sweat.updateColor = changeColor//.bind(sweat)
    //  return sweat.updateColor
}
// makeChangeColor()


 //===================================================
function test(x){
    return x == 0 
    ? console.error('fail')
    : console.warn('try again');
   
}
// test(1)
 //===================================================
const make2ChangeColor = function() {
    const changeColor = function(color) {
        this.color = color 
        console.log(this);
        // 
    }
    const sweater = {
        color: 'teal',
     }
    // return changeColor.call(sweater.color)
     sweater.updatecolor = changeColor
    //  sweater.updatecolor('red')

     return sweater.updatecolor.bind(sweater)

}
const sweatColor =  make2ChangeColor()
sweatColor('blue')

 //===================================================
 //===================================================
 //===================================================
 //===================================================