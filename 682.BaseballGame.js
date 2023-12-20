// You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

// You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

// An integer x.
// Record a new score of x.
// '+'.
// Record a new score that is the sum of the previous two scores.
// 'D'.
// Record a new score that is the double of the previous score.
// 'C'.
// Invalidate the previous score, removing it from the record.
// Return the sum of all the scores on the record after applying all the operations.

const ins = ["5","2","C","D","+"]

const baseballGame = (operations) => {
    let j = 0 
    let sum = 0 
    for(let i = 0; i < operations.length; i++){
        if(operations[i] === '+'){
                let add
                if(isNaN(operations[j - 1])){
                    add = Number(operations[j])
                    operations[j] = add
                    sum += add
                    j++
                }else{
                    add = Number(operations[j-1]) + (Number(operations[j - 2]))
                    operations[j] = add 
                    sum += add
                    j++             
                }
            }else
            if(operations[i] === 'D'){
                const double = Number(operations[j - 1]) * 2
                operations[j] = double
                sum += double
                j++
            }else
            if(operations[i] === 'C'){
                sum -= operations[j - 1]
                operations[j - 1] = 0
                j--
            }else {
                operations[j] = Number(operations[i])
                sum += operations[j]
                j++
            }
        }
        return(sum)
}

baseballGame(ins)