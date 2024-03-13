const MY_NAME: string = "Leena"
let myMilkAmount: number = 50
let myCoffeType: string = "cappuccino"

console.log(`Hello, ${MY_NAME}! Your coffe is ${myCoffeType} and it has ${myMilkAmount} ml.`)
console.log(`Hello, ` + MY_NAME + `! Your coffe is ${myCoffeType} and it has ${myMilkAmount} ml.`)

function isTooMuchMilk() {
    return myMilkAmount > 50 && myCoffeType !== "latte";
}
function muchMilkString() {
    return "too much milk"
}

function muchMilkResult(isNotRealCoffee: boolean): string {
    if (isNotRealCoffee) {
        return "not a real coffee"
    }
    return "for other coffee types"
}

if (isTooMuchMilk()) {
    console.log(muchMilkString() + muchMilkResult(false))
} else if (myMilkAmount >= 100) {
    console.log(muchMilkString() + muchMilkResult(true))
} else if (myCoffeType === "cappuccino") {
    console.log("perfect choice")
} else {
    console.log("aĺl good")
}