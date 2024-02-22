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

