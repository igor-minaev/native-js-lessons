const todoListID_1 = 'qwer'
const todoListID_2 = 'asdf'

const todoLists = [
    {
        id: todoListID_1,
        title: 'What to learn',
        filter: 'all',
    },
    {
        id: todoListID_2,
        title: 'What to buy',
        filter: 'all',
    }
]


const tasks = {
    [todoListID_1]: [
        {id: 12, title: 'JS', isDone: false},
        {id: 13, title: 'ТS', isDone: false},
        {id: 14, title: 'HTML', isDone: false}
    ],
    [todoListID_2]: [
        {id: 22, title: 'Milk', isDone: false},
        {id: 23, title: 'Cheese', isDone: false},
        {id: 24, title: 'Ice-cream', isDone: false}
    ]
}

console.log(tasks[todoListID_1][0].title)  // 'JS'


// reduce

const nums = [10, 30, 20]
console.log(nums.reduce((acc, el) => {
    acc = acc + el
    return acc
}, 0))

console.log(nums.reduce((acc, el) => acc > el ? acc : el))

const students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

console.log(students.reduce((acc, el) => acc.scores > el.scores ? acc : el))
console.log(students.reduce((acc, el) => acc + el.scores, 0))
/*console.log(students.map(st=>({...st,scores:st.scores + 10})))*/
console.log(students.reduce((acc, el) => {
    acc.push({...el, scores: el.scores + 10})
    return acc
}, []))

const st = {
    1: {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    }
}

console.log(students.reduce((acc, el) => {
    acc[el.id] = {...el}
    delete acc[el.id].id
    return acc
}, {}))