// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

const string = "()[]{}}{"


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
const validParenthesis = (s) => {
   let j
   let i
    for(i = 0; i < s.length; i++){
        for(j = s.length - 1; j >= 0; j++){
            
        }
        
    }
}

validParenthesis(string)