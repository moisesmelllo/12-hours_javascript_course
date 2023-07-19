function arraySwap(array) {
    first = array[0];
    last = array[array.length - 1];
    array[0] = last;
    array[array.length - 1] = first;
    return array;
}

console.log(arraySwap([1,2,3,4, 8]));