
class DynamicArray {
    constructor(capacity) {
        this.capacity = capacity
        this.length = 0
        this.arr = new Array(this.capacity).fill(0)
    
    }
    get(i) {
        return this.arr[i]
    }
    set(i, n) {
        this.arr[i] = n
    }
    pushBack(n){
        this.arr.push(n)
    }
    popBack(){
        return this.arr.pop()
    }
    resize(){
        this.capacity = ((this.arr.length - 1) * 2)
        const newArr = new Array(this.capacity).fill(0)
        for(let i = 0; i < this.arr.length; i++){
            newArr.push(this.arr[i])
        }
        console.log(newArr)
    }
}

const func = new DynamicArray(6)
func.set(3,3)
console.log(func.get(3))
