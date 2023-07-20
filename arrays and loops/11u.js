function removeEgg(food) {
    newFood = food.slice()
    newFood.reverse()
    result = []
    egg = 2
    for (let i = 0; i < newFood.length; i++) {
        if (newFood[i] === 'egg' && egg > 0) {
            egg--
            continue
        } else {
            result.push(newFood[i]);
        }
    }
    console.log(result.reverse())
    console.log(food)
}

removeEgg(['egg', 'apple', 'egg', 'egg', 'ham'])