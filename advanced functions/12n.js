const removeEgg = (foods) => {
    let result = foods.filter((value) => {
        return value != 'egg'
    })
    return result;
}

console.log(removeEgg(['egg', 'bread', 'egg', 'beaf'])
)
