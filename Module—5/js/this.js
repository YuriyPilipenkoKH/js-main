console.log('[] === []', [] === []);
console.log('{} === {}',{} === {});


const user = {
    tag: 'mango',
    showTag() {
        // console.log('showTag —> this', this);
    },
};

// user.showTag()

// const players = [
//     {id: 'player-1', name: 'mango', timePlayed: 310, points: 54, online: false,},
//     {id: 'player-2', name: 'poly', timePlayed: 470, points: 92, online: true,},
//     {id: 'player-3', name: 'kiwi', timePlayed: 230, points: 48, online: true,},
//     {id: 'player-4', name: 'ajax', timePlayed: 150, points: 0, online: false,},
//     {id: 'player-5', name: 'chelsey', timePlayed: 80, points: 48, online: true,},
//   ];  

  const showTag1 = function () {
    console.log('showTag2 —> this', this);
    console.log('showTag2 —> this.tag', this.tag);
  
  }
//   showTag1()
const user1 = {
    tag: 'kiwi',
}

   user1.showUsertag = showTag1
//    console.log(user1);

//    user1.showUsertag()

   const bookShelf = {
        authors: ["Bernard Cornwell", "Robert Sheckley"],
        getAuthors() {
          return this.authors;
        },
        addAuthor(authorName) {
          this.authors.push(authorName);
        },
        checkAuthor(authorName) {
           return this.authors.includes(authorName)
        }
      };
    //   console.table(bookShelf);

      const fun1 = function() {
        console.log('fun-1');
        console.log(this);
      }
      bookShelf.oneShelf = fun1;

    //   bookShelf.oneShelf() 
    //   console.log(bookShelf.getAuthors());  
// =======================================================
    const book = {
        title: 'React for beginners',
        showThis() {
            console.log('this—>',this);
        },
        showTitle() {
            console.log('title—>', this.title);
        },
    };

    const outerShowThis = book.showThis;

    // book.showThis()
    // book.showTitle()
    // console.log(book.showThis());
    // console.log(book.showTitle());

    // outerShowThis()
// =======================================================
const makeChangeColor = function () {
    const changeColor = function (color) {
        console.log('changecolor —>this',this);
    };

    changeColor()
    const sweater = {
        color: 'teal',

    };
    sweater.updateColor = changeColor;
    sweater.updateColor('red')

    // console.log(sweater);
    return sweater.updateColor;
}
// makeChangeColor()
// ======================================================= 
const counter = {
    value: 0,
    increment(value) {
        console.log('increment —>this',this);
        this.value += value
    },
    decrement(value) {
        console.log('decrement —>this',this);
        this.value -= value
    },
}

const updateCounter = function (value,operation) {
   operation(value); 
};

// updateCounter(10,counter.increment.bind(counter)) 
// counter.decrement(4)




   