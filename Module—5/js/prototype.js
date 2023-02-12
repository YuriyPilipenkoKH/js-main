const objC = {
    z:5,

};
console.log(objC);
console.log(objC.hasOwnProperty('z'));

const objB =Object.create(objC)
objB.y = 2
objB.k = 6
// console.log(objB);
// console.log(objB.y);
// console.log(objB.z);

const objA = Object.create(objB)
objA.x =1

// console.log(objA);
// console.log(objA.z);

// objA.z = 12
// console.log(objA.z);
// console.log(objA.hasOwnProperty('y')); 
