// Примитивы
// 1. string => "", '', ``
// 2. number => number, NaN, Infinity
// 3. undefined => undefined
// 4. null => null
// 5. boolean => true, false

// 6. symbol => symbol
// 7. bigInt => BigInt

// Объекты
// 8. object => object, array, function
// - составной (комбинированный)
// - ссылочный тип

const user = {
    name: 'Bob'
}
const user2 = user  // {}, new Object()
user2.name = 'Alex'
console.log(user.name)

const arr = [1, 2, 3, 4]
// arr.push(5)
// console.log(arr)

const newArr = arr.concat(5)
console.log(newArr)
console.log(arr)
console.log(newArr === arr)

const users = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true
    },
    {
        id: 3,
        name: 'Ann',
        isStudent: true
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: true
    }
]

const newUser = {
    id: 5,
    name: 'Farid',
    isStudent: true
}

//CRUD - create, read, update, delete

// const copyUsers = [
//     users[0],
//     users[1],
//     users[2],
//     users[3],
//     newUser
// ]

// create
const copyUsers = [...users, newUser]

console.log(copyUsers)
console.log(copyUsers === users)

// update
const updatedUsers = copyUsers.map(u => u.id === 2 ? {...u, isStudent: false} : u)

// delete
const deletedUsers = updatedUsers.filter(u => u.id !== 3)
console.log(deletedUsers === updatedUsers)

const superUser = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}

const superUserCopy = {...superUser, company: {...superUser.company, catchPhrase: 'anything'}}

const superUserCopy2 = {
    ...superUser,
    address: {
        ...superUser.address,
        geo: {...superUser.address.geo, lng: '8345.454'}
    }
}

