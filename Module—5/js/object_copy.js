

let age = 18
let age_2 = age
// console.log(age === age_2);

const a = {
    name: 'it',
    count: 10, 
    isOnline: true, 
    students: ['ivan', 'paul', 'andy'],
    classrom: {
        teacher: {
            name: 'bob',
            age: 44,
        }
    }
}

const b = a
console.log(a===b);

// b.students = []
// console.log(a);

const c = {...a}
// console.log(c===a);
c.students = [...a.students]
c.classrom = {...a.classrom}
c.classrom.teacher = {...a.classrom.teacher}

c.students = []
c.classrom.teacher.math = 'pro'
c.name = 'query'
console.log('c',c);
console.log('a',a);
console.log(c===a);



