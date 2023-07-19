function addNum(array, num) {
    for (let i = 0; i < array.length; i++) {
        array[i] += num;
}
    console.log(array)
}

addNum([10,20,30], 10)