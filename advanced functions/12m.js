const fun = (array, num) => {
    const result = array.map((value) => {
        return value + num;
    });
    return result;
}

console.log(fun([1,2,3], 10))