function removeEgg(food) {
    result = []
    for (let i = 0; i < food.length; i++) {
        if (food[i] === 'egg') {
            continue
        } else {
            result.push(food[i]);
        }
    }
    console.log(result)
}

removeEgg(['egg', 'apple', 'egg', 'egg', 'ham'])