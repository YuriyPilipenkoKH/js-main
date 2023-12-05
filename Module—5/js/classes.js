console.log('hello OOP')

class User{
    static counter = 0
    static addUser () {
        // this.counter += 1
        User.counter += 1
        console.log(`Number of users ${this.counter}`)
    }
    #location
        constructor({
            name,
            email,
            age=18,
            location = "Ukraine",
        } = {}){
            this.name = name
            this.email = email
            this.age = age
            this.#location = location
            User.addUser()
    }
    sayHello() {
        console.log(`Hello`)
    }
    sayMyName(){
        console.log(`my name is ${this.name}`)
    }
    #getEmail() {
        console.log(this.email)
    }
    get locale() {
        return this.#location
    }
    set locale(city) {
        this.#location = city
    }
} 

// const mike = new User('Mike', 'mike@m.com')
const mike = new User({
    name: 'Mickey',
    email: 'mike@m.com',
    location: 'Kharkiv',
   })
console.log(mike)

// const bantino = new User("Bant", null, 4)
const bantino = new User ({
    name: 'Bant',
    email: 'bantik@m.com',
    age: 22,
   
})
bantino.showAge = function() {
    console.log(this.age)
}
console.log(bantino)
// console.log(bantino.sayMyName())

