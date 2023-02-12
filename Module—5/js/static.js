const User = function ({email,password = {}}) {
    this.email = email
    this.password = password
}

User.prototype.changeEmail = function (newMail) {
    this.email = newMail
}

const mango = new User({
    email: 'mango@mail.com',
    password: 1111,
})
console.log(mango);

mango.changeEmail('diy@gmail')
// console.log(mango);

User.message = 'I’m The STATIC poperty';

// console.dir(User)
// console.log(User);
