numbers = [1,3,2,1,5]

const concatArrays = (nums) => {
    let ans = new Array((nums.length ) * 2)
    j = (nums.length)
        for(let i = 0; i < ans.length; i++){
            ans[i] = nums[i]  
            ans[j] = nums[i]
            j++ 
            if(j == ans.length){
                break
            }         
        }
    console.log(ans)
}

concatArrays(numbers)