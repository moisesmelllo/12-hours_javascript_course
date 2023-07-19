function addArrays(array1, array2) {
    let array3 = [];
    for (let i = 0; i < array1.length; i++) {
        array3.push(array1[i] + array2[i]);

    }
    console.log(array3);
}

addArrays([10, 10, 10], [10, 20, 30])