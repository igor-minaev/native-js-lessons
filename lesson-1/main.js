const user = {     // 4567
    name: 'Bob',
    age: 26,
    isMarried: true,
    friends: ['Alex', 'Bob', 'John']
}
// const arr = [1, 2, 3, 4]
//
// const copyUser = user  // #4567
// // {} - нет
// // new Object() - нет
// // [] - нет
// // new Array(...) - нет
//
// user.name = 'Anne'
// console.log(copyUser.name)
//
// // const realCopyUser = {} // #5666
// // realCopyUser.name = user.name
// // realCopyUser.age = user.age
// // realCopyUser.isMarried = user.isMarried
// const realCopyUser = {...user}
// const realCopyArr = [...arr]
//
// console.log(realCopyUser)
// console.log(realCopyArr)
// console.log(realCopyUser === user) //false
// console.log(copyUser === user) //true
//
// // Object.assign({}, user) похоже на спред оператор, только старый синтаксис
//
// console.log(user.name)

const copyUser = {...user}
copyUser.friends.push('Anne')
console.log(user === copyUser) //false
console.log(user.friends === copyUser.friends) //true

copyUser.isStudent = true
console.log(user)

// const deepCopy={...user,friends:[...user.friends]}
const deepCopy = structuredClone(user)
console.log(deepCopy === user)
console.log(deepCopy.friends === user.friends)