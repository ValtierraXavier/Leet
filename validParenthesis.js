// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// const string = "[()[]{]}}{"


// const validParenthesis = (s) => {
//     let regular = 0;
//     let square = 0;
//     let curly = 0;
//     for(i = 0; i < s.length; i++){
//         if(s[i] === '('){
//             regular++
//         }
//         if(s[i] === ')'){
//             regular--
//         }
//         if(s[i] === '['){
//             square ++
//         }
//         if(s[i] === ']'){
//             square--
//         }
//         if(s[i] === '{'){
//             curly++
//         }
//         if(s[i] === '}'){
//             curly--
//         }
//     }
//     if(regular === 0 && square === 0 && curly === 0){
//         console.log(true)
//     }else(
//         console.log(false)
//     )
//     // console.log(regular, square, curly)
// }



// const validParenthesis = (s) => {
//     const openKeys = '({['
//     const closeKeys = ')}]'
//     let regular = 0
//     let square = 0
//     let curly = 0
    
//     for(let i = 0; i < openKeys.length; i++){
//         const key = openKeys[i]
//         const clo = closeKeys[i]
//         // console.log(clo, key)
//         for(let j = 0; j < s.length; j++){         
//             if(s[j] == clo){ 
//                 if(clo === ')'){
//                     regular--
//                 }else
//                 if(clo === ']'){
//                     square--
//                 }else
//                 if(clo === '}'){
//                     curly--
//                 }
//             }
//             if(s[j] == key){
//                 if(key === '('){
//                     regular++
//                 }else
//                 if(key === '['){
//                     square++
//                 }else
//                 if(key === '{'){
//                     curly++
//                 }
//             }
//             console.log(regular, square, curly)
//             if(regular <= (-1) || curly <= (-1) || square <= (-1)){
//                 return false
//         }
//     }
// } if(regular == 0 && square == 0 && curly == 0){
//     return true
// } else if (regular > 0 || square > 0, curly > 0){
//     return false
// }
   
// }

const string = "(()())[((()()()()()))]"

const validParenthesis = (s) => {
    if( s.length % 2 === 1){
        return false
    }

    if(s[0] === ')' || s[0] === '}' || s[0] === ']'){
        return false
    }
    
    if(s[(s.length-1)] === '(' || s[(s.length-1)] === '{' || s[(s.length-1)] === '['){
        return false
    }

    const obj = {
        '(': ')',
        '{': '}',
        '[': ']',
    }
    let arr = []
    for(let i = 0; i < s.length; i++){
        if (s[i] === '(' || s[i] === '{' || s[i] === '['){
            arr.push(s[i]);
        }else{
            if(obj[arr.pop()] !== s[i]){
                return false
            }
        }
    }
    return arr.length === 0
}

console.log(validParenthesis(string))