// WIP

rom = "IV"
romKey = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}
let greaterThan = null
const romanToInt = (s) => {
    let sum = romKey[s[0]]
    for(let i = 0; i < s.length; i++){
        if(romKey[s[i]] <= romKey[s[(i+1)]]){
        //    sum += romKey[s[(i+1)]]
        greaterThan = true
    }else if(romKey[s[i]] > romKey[s[(i+1)]]){
        // sum -= romKey[s[(i + 1)]]
        greaterThan = false
        }
    }
    
    console.log(greaterThan)
}

romanToInt(rom)