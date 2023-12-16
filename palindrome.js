const num = 11333311
const palindrome = (x) => {
    const number = x.toString()
    let j = number.length - 1
    for(let i = 0; i < number.length; i++){
        if(number[i] === number[j]){
            j--    
        }else if(number[i] !== number[j]){
            console.log(false)
            break;
            } 
        if(j <= i){
            console.log(true)
            break;
        }
        }
}
const palindrome2 = (x) => {
    const stringifiedNum = x.toString()
    let reversedNum = ''

    for(let i = (stringifiedNum.length -1); i >= 0; i--){
        reversedNum = reversedNum.concat(stringifiedNum[i])
    }



    console.log(x == reversedNum)
    }

palindrome(num)
palindrome2(num)