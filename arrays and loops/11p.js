array = ['some', 'strings', 'search', 'here', 'search', 'for',]
let index = -1

for (let i = 0; i < array.length; i++) {
    

    if (array[i] === 'search') {
        index = i
        break
    }

}

console.log(index)