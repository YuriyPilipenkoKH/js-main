const counter = {
    value: 0,
    increment() {
        // console.log('increment —> this', this);
        this.value +=1;
    },
    decrement() {
        // console.log('decrement —> this', this);
        this.value -= 1;
    },
};

const decrementBtn = document.querySelector('.js-decrement');
const incrementBtn = document.querySelector('.js-increment');
const valueEl = document.querySelector('.js-value');

decrementBtn.addEventListener('click', function() {
    // console.log('click—dec');

    counter.decrement();
    // console.log(counter);
    valueEl.textContent = counter.value;
});

incrementBtn.addEventListener('click', function() {
    // console.log('click—inc');

    counter.increment();
    // console.log(counter);
    valueEl.textContent = counter.value;
});

// ==============================================

// const objC = {
//     z:5,
// }
// const objC = Object.create(counter)
// objC.z = 4
// console.log(objC.z);
// const objB =Object.create(objC)
// objB.y = 2;

// console.log(objB.z);
// console.log(objB.y);

// const objA = Object.create(objB)
// objA.x = 1;

// console.log(objA);

// 0001=============================================
// function boolToWord( bool ){
//     //...
//     let message = 'No';
//     if (bool === true) {
//        message = 'Yes'
       
//     }
//     return message;
//   };
//   console.log(boolToWord(false));

// 0010
// function basicOp(operation, value1, value2)
// {
//   // Code
//   switch (operation) {
//     case '+': 
//     return value1 + value2;
//         break;

//         case '-': 
//     return value1 - value2;
//         break;

//         case '*': 
//     return value1 * value2;
//         break;

//         case '/': 
//     return value1 / value2;
//         break;
  
//     default:
//         return 'wrong operation'
//         break;
//   }
// };
// console.log(basicOp('+', 4, 7));
// console.log(basicOp('-', 15, 18));
// console.log(basicOp('*', 5, 5));
// console.log(basicOp('/', 49, 7));

// 0110
// function stringToArray(string){

// 	// code code code
//     let result = string.split(' ')
//     console.log(result);
//     return result

// }
// stringToArray("Robin Singh")
// stringToArray("I love arrays they are my favorite")

// =========================================================
const userStatistics = {
    users : [
   
        {
          name: "Moore Hensley",
          email: "moorehensley@indexia.com",
          eyeColor: "blue",
          friends: ["Sharron Pace"],
          isActive: false,
          balance: 2811,
          gender: "male"
        },
        {
          name: "Sharlene Bush",
          email: "sharlenebush@tubesys.com",
          eyeColor: "blue",
          friends: ["Briana Decker", "Sharron Pace"],
          isActive: true,
          balance: 3821,
          gender: "female"
        },
        {
          name: "Ross Vazquez",
          email: "rossvazquez@xinware.com",
          eyeColor: "green",
          friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
          isActive: false,
          balance: 3793,
          gender: "male"
        },
        {
          name: "Elma Head",
          email: "elmahead@omatom.com",
          eyeColor: "green",
          friends: ["Goldie Gentry", "Aisha Tran"],
          isActive: true,
          balance: 2278,
          gender: "female"
        },
        {
          name: "Carey Barr",
          email: "careybarr@nurali.com",
          eyeColor: "blue",
          friends: ["Jordan Sampson", "Eddie Strong"],
          isActive: true,
          balance: 3951,
          gender: "male"
        },
        {
          name: "Blackburn Dotson",
          email: "blackburndotson@furnigeer.com",
          eyeColor: "brown",
          friends: ["Jacklyn Lucas", "Linda Chapman"],
          isActive: false,
          balance: 1498,
          gender: "male"
        },
        {
          name: "Sheree Anthony",
          email: "shereeanthony@kog.com",
          eyeColor: "brown",
          friends: ["Goldie Gentry", "Briana Decker"],
          isActive: true,
          balance: 2764,
          gender: "female"
        },
      ],
 
      getUserName() {
        const narray = []
        narray.push(this.users.name)
        console.log(this);
        return narray
},
}
// =========================================================
// userStatistics.getUserName()


const seeTag = function() {
  console.log(this);
};

 const fuse = {
  tag: 'Mango',
  showTag() {
    console.log('showtag —> this',this);

  },
 };

// fuse.showTag()
fuse.seeUserTag = seeTag;
// console.log(fuse);
// fuse.seeUserTag()
// ==================================================

// function fakeBin(x){
//   const arra = x.split('')
//   const fin = [];
//   console.log(arra);

//   for (let a of arra) {
//     (a<5)
//     ? a=0
//     : a=1
//     fin.push(a)
//   }
//   console.log(fin);

//   const out = fin.join('')
//   console.log(out);
// return out

// }

// fakeBin('432574613')


