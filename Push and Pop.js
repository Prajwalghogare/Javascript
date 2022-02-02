//Push Operations

function function1() {
    const numbers = [10, 20, 30, 40, 50]
    console.log(numbers)

    //Pushing numbers from last

    numbers.push(60)
    console.log(numbers)

    //Pushing numbers at desired location

    numbers.splice(0, 1, 0)
    console.log(numbers)
}

function1()

//Pop Opearation

function function2() {

    const fruits = ["Apple", "Oranage", "Mango", "Banana"]
    console.log(fruits)

    //Pop operation
    fruits.pop()
    console.log(fruits)

    //Pop operation at location
    fruits.splice(1, 1)
    console.log(fruits)
}

function2()