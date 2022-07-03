const user = {     // 4567
    name: 'Bob',
    age: 26,
    isMarried: true
}

const copyUser = user  // #4567
// {} - нет
// new Object() - нет
// [] - нет
// new Array(...) - нет

user.name = 'Anne'
console.log(copyUser.name)

const realCopyUser = {} // #5666
realCopyUser.name = user.name
realCopyUser.age = user.age
realCopyUser.isMarried = user.isMarried

console.log(realCopyUser)
console.log(realCopyUser === user) //false
console.log(copyUser===user) //true