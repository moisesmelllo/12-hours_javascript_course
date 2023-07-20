function findIndex(array, word) {
    index = -1
    for (let i = 0; i < array.length; i++) {
        if (array[i] === word) {
            index = i;
            break;
        }   
    }
    console.log(index)
}

findIndex(['blue', 'green', 'yellow', 'green', 'black'], 'green')