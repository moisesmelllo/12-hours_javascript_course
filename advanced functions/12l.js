const countPositive = (nums) => {
    let positive = 0
    nums.forEach((value) => {
        if (value > 0) {
            positive++
        }
    });
    console.log(positive)
    
};


countPositive([1,-2,3])