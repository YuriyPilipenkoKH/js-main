console.log('hello OOP')

class User{
        constructor(name, email, age=18){
            this.name = name
            this.email = email
            this.age = age
    }
}

const mike = new User('Mike', 'mike@m.com')
console.log(mike)

const bantino = new User("Bant", null, 4)
console.log(bantino)