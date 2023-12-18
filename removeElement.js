const numbers = [0,1,2,2,3,0,4,2]
const value = 2

const removeElement = (nums, val) => {
    let k = 0
    for(let i = 0; i < nums.length; i++){        
        if(nums[i] !== val){
            nums[k] = nums[i]
            k++            
        }
    }
    nums.fill(val, k)
    console.log(k, nums)   
}
removeElement(numbers, value)