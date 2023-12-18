numbers = [0,0,1,1,1,2,2,3,3,4]

const removeDuplicates = (nums) => {
    let j = 0
    for (let i = 0; i < nums.length; i++){
        if(nums[i] !== nums[i + 1]){
            nums[j] = nums[i]
            j++
        }
    }
    console.log(j, nums)
}
removeDuplicates(numbers)