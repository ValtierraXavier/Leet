const numbers = [1, 0, 5, 2, 9, 3, 4, 3, 4, -2, 15]
const target = 24

const twoSum = (nums, target) => {
    let solution = []
    for(let j = 0; j < nums.length; j++){
        for(let k = j + 1; k < nums.length; k++){
            if(nums[j] + nums[k] === target){
                solution = [j,k]
                break;
            }
        }
    }
    console.log(solution.length > 0 ? solution : "No Solution Found.")
}
const twoSum2 = (nums, target) => {
    let complement
    let coordinates 
    for(let i = 0; i < nums.length; i++){
        complement = target - nums[i]
        if(nums.indexOf(complement) >= 0 && nums.indexOf(complement) !== i)
        coordinates = [nums.indexOf(complement), i]
    }
    console.log(coordinates ? coordinates : 'No solution found.')
}
twoSum(numbers, target)
twoSum2(numbers, target)