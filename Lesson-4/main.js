const todoListId_1 = '1'
const todoListId_2 = '2'

const todoLists = [
    {
        id: todoListId_1,
        title: 'What to learn',
        filter: 'all',
        // tasks: [
        //     {id: 3, title: 'HTML', isDone: false},
        //     {id: 4, title: 'CSS', isDone: false},
        //     {id: 5, title: 'REACT', isDone: false}
        // ]
    },
    {
        id: todoListId_2,
        title: 'What to buy',
        filter: 'all',
        // tasks: [
        //     {id: 6, title: 'MILK', isDone: false},
        //     {id: 7, title: 'BEER', isDone: false},
        //     {id: 8, title: 'MEAT', isDone: false}
        // ]
    }
]

// const tasks = [
//     [{todoListId: 1, id: 3, title: 'HTML', isDone: false},
//     {todoListId: 1, id: 4, title: 'CSS', isDone: false},
//     {todoListId: 1, id: 5, title: 'REACT', isDone: false}],
//
//     [{todoListId: 2, id: 6, title: 'MILK', isDone: false},
//     {todoListId: 2, id: 7, title: 'BEER', isDone: false},
//     {todoListId: 2, id: 8, title: 'MEAT', isDone: false}]
// ]

const tasks = {
    [todoListId_1]: [
        {id: 3, title: 'HTML', isDone: false},
        {id: 4, title: 'CSS', isDone: false},
        {id: 5, title: 'REACT', isDone: false}
    ],
    [todoListId_2]: [
        {id: 6, title: 'MILK', isDone: false},
        {id: 7, title: 'BEER', isDone: false},
        {id: 8, title: 'MEAT', isDone: false}
    ]
}

const addTodolist = (title) => {
    const todoListId = crypto.randomUUID()
    const newTodo = {
        id: todoListId,
        title,
        filter: 'all'
    }
    setTodoLists([...todoLists, newTodo])
    setTasks({...tasks, [todoListId]: []})
}

const removeTodolist = (todoListId) => {
    setTodoLists(todoLists.filter(t => t.id !== todoListId))
    const copyTasks = {...tasks}
    delete copyTasks[todoListId]
    setTasks(copyTasks)
}

const addTask = (title, todoListId) => {
    const newTask = {
        id: crypto.randomUUID(),
        title,
        isDone: false
    }
    setTasks({...tasks, [todoListId]: [...tasks[todoListId], newTask]})
}

const changeTaskTitle = (id, todolistId, newTitle) => {
    setTasks({...tasks, [todolistId]: tasks[todoListId].map(t => t.id === id ? {...t, title: newTitle} : t)})
}


const todoListsOk = [
    {
        id: '1',
        title: 'What to learn',
        filter: 'all',
    },
    {
        id: '2',
        title: 'What to buy',
        filter: 'all',
    },
    {
        id: '3',
        title: 'What to buy',
        filter: 'all',
    }
]

// const todoListsOkObj = {}
// for (let i = 0; i < todoListsOk.length; i++) {
//     todoListsOkObj[todoListsOk[i].id] = todoListsOk[i]
//     delete todoListsOkObj[todoListsOk[i].id].id
// }
//
// // console.log(todoListsOkObj)


console.log(todoListsOk.reduce((acc, el) => {
    acc[el.id] = el
    delete acc[el.id].id
    return acc
}, {}))


const nums = [1, 2, 3, 4, 5]
console.log(nums.reduce((acc,el)=>{
    acc += el
    return acc
}))
