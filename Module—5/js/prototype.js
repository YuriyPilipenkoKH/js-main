const objC = {
    z:5,

};
// console.log(objC);
// console.log(objC.hasOwnProperty('z'));

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

const user = {
    name: "Jonny",
    age: 45,
    sayHello(){
        console.log('Hello all')
    },
    sayMyName() {
        console.log(this.name)
    },
    showMyAge(){
        console.log(`My age ${this.age}`)
    }
}

// console.log(user.sayMyName())
console.log(user.showMyAge())

const tommy = Object.create(user)
tommy.name = 'Tommy'
tommy.age = 28
console.log( tommy.sayMyName())
console.log(tommy.showMyAge())
console.log(tommy)
