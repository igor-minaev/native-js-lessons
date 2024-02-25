const students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100
    }
]

const getNames = (array) => {
    const result = []  // new Array()
    const getName = el => el.name
    for (let i = 0; i < array.length; i++) {
        // names.push(array[i].name)
        result[i] = getName(array[i])
    }
    return result
}

console.log(getNames(students))

const getScores = (array) => {
    const result = []
    const getResult = el => el.scores
    for (let i = 0; i < array.length; i++) {
        result[i] = getResult(array[i])
    }
    return result
}

console.log(getScores(students))

const addScores = (array) => {
    const result = []
    const getResult = el => ({...el, scores: el.scores + 10})
    for (let i = 0; i < array.length; i++) {
        result[i] = getResult(array[i])
    }
    return result
}

console.log(addScores(students))

const getMappedArray = (array, mapFunc) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        result[i] = mapFunc(array[i])
    }
    return result
}

console.log(getMappedArray(students, el => el.name))
console.log(getMappedArray(students, el => el.scores))
console.log(students.map(st => st.name))

const getFilterArray = (array, filterFunc) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        if (filterFunc(array[i]))
            // result.push(array[i])
            result[result.length] = array[i]
    }
    return result
}

console.log(getFilterArray(students, el => el.age >= 21))

//find, push, indexOf, includes

const getFind = (array, findFunc) => {
    for (let i = 0; i < array.length; i++) {
        if (findFunc(array[i])) {
            return array[i]
        }
    }
}

console.log(getFind(students, el => el.name === 'Alex'))

const selfMadePush = (array, el) => {
    array[array.length] = el
    return array.length
}

const selfMadeIndexOf = (array, el, start = 0) => {
    for (let i = start; i < array.length; i++) {
        if (array[i] === el) {
            return i
        }
    }
    return -1
}

const selfMadeIncludes = (array, el, start = 0) => {
    for (let i = start; i < array.length; i++) {
        if (array[i] === el) {
            return true
        }
    }
    return false
}

console.log(students)

function getLength() {
    return `Length of array is ${this.length}`
}

Array.prototype.getLength = getLength

console.log([].getLength())
console.log([1].getLength())
console.log([2,3,4,5].getLength())
