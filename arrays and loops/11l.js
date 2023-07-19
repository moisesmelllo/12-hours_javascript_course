function minMax(nums) {
    let max = null
    let min = null
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            max = nums[i]
            min = nums[i]
        } else if (nums[i] > max) {
            max = nums[i]
        } else if (nums[i] < min) {
            min = nums[i]
        }
    }
    
    const result = {
        min: min,
        max: max
    }

    console.log(result)
}

minMax([4,3, -5])