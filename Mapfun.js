// Using map function

function function3() {

    const numbers = [1, 2, 3, 4, 5]
    const squares = numbers.map((value) => { return value ** 2 })

    console.log(numbers)
    console.log(squares)

}

function3()


function function4() {

    const students = [
        { Name: 'Prajwal', Id: '1804064', Sports: 'Cricket' },
        { Name: 'Koustubh', Id: '1803056', Sports: 'Hockey' },
        { Name: 'Rajat', Id: '1803054', Sports: 'Football' },
        { Name: 'Ravi', Id: '1803066', Sports: 'None' },
        { Name: 'Mayur', Id: '1803051', Sports: 'Basketball' },
    ]
    const sports = students.map((students) => { return { Name: students.Name, Sports: students.Sports } })
    const id = students.map((students) => { return { Name: students.Name, Id: students.Id } })
    console.log(sports)
    console.log(id)
}
function4()