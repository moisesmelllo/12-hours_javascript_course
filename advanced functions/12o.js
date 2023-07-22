const removeEgg = (foods) => {
    counter = 2
    const result = foods.filter((value) => {
        if (value === 'egg' && counter > 0) {
            counter--
            return true;
        } else if (value !== 'egg') {
            return true
        }
        
    });
        return result
};

console.log(removeEgg(['egg', 'bread', 'egg', 'beaf', 'egg', 'egg', 'chocolate'])
)
