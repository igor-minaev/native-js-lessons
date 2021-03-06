const user = {     // 4567
    name: 'Bob',
    age: 26,
    isMarried: true,
    friends: ['Alex', 'Bob', 'John'],
    address: {
        city: 'Bobruisk',
        street: 'Lenina'
    }
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
// const deepCopy = structuredClone(user)
// console.log(deepCopy === user)
// console.log(deepCopy.friends === user.friends)
const deepCopy = {...user, friends: [...user.friends], address: {...user.address}}
console.log(deepCopy === user)
console.log(deepCopy.friends === user.friends)
console.log(deepCopy.address === user.address)

const students = [
    {name: 'Bob'},
    {name: 'Alex'},
    {name: 'Ann'}
]

const copyStudents = [...students]
console.log(copyStudents === students)

// const deepCopyStudents = []
// for (let i = 0; i < students.length; i++) {
//     deepCopyStudents[i]={...students}
// }

const deepCopyStudents= students.map(t=>({...t}))
console.log(deepCopyStudents===students)
console.log(deepCopyStudents[0]===students[0])
console.log(deepCopyStudents[0].name===students[0].name)