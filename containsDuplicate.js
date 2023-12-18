const numbers = [1,2,3,4]

// const containsDuplicate = (nums) => {
//     let number = 0
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i+1; j < nums.length; j++){
//            if(nums[i] === nums[j]){
//             number++
//             break
//            }
//         }
//     }
//     return (number > 0 ? true : false)
// }

// const containsDuplicate = (nums) => {
//     let included
//     for(let i = 0; i < nums.length; i++){
//        included = nums.includes(nums[i], (i+1))
//        if(included){
//         break
//        }
//        }
//        return(included)
//     }

const containsDuplicate = (nums) => {
    const check = new Set(nums)
    if(check.size == nums.length){
        console.log(false)
    }else{
        console.log(true)
    }
}

containsDuplicate(numbers)