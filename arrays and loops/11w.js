function findIndex(array, word) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === word) {
        // Instead of creating an accumulator
        // variable and updating it in the loop,
        // we can just return i directly, when
        // we find it since this is a function.
        return i;
      }
    }

    // If the function has not returned by now,
    // logically that means the word must not
    // exist in the array, so we'll return -1.
    return -1;
  }

findIndex(['blue', 'green', 'yellow', 'green', 'black'], 'green')


function unique(array) {
    unique  = []
    for (let i = 0; i < array.length; i++) {
        result = findIndex(unique, array[i])
        if (result === -1) {
            unique.push(array[i])
        }
    }
    console.log(unique)
}

unique(['green', 'red', 'blue', 'green', 'red'])