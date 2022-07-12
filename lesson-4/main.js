const todoLists = [
    {
        id: 1,
        title: 'What to learn',
        filter: 'all',
    },
    {
        id: 1,
        title: 'What to buy',
        filter: 'all',
    }
]


const tasks = {
    [todoLists[0].id]: [
        {id: 12, title: 'JS', isDone: false},
        {id: 13, title: 'ТS', isDone: false},
        {id: 14, title: 'HTML', isDone: false}
    ],
    [todoLists[2].id]: [
        {id: 22, title: 'Milk', isDone: false},
        {id: 23, title: 'Cheese', isDone: false},
        {id: 24, title: 'Ice-cream', isDone: false}
    ]
}