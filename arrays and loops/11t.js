function removeEgg(food) {
    result = []
    egg = 2
    for (let i = 0; i < food.reverse().length; i++) {
        if (food[i] === 'egg' && egg > 0) {
            egg--
            continue
        } else {
            result.push(food[i]);
        }
    }
    console.log(result.reverse())
}

removeEgg(['egg', 'apple', 'egg', 'egg', 'ham'])