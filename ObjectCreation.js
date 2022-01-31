function fun1() {

    const person = {
        name: 'Prajwal',
        address: 'Sangamner',
        phone: '8390110610',
    }
    console.log(person)
}
fun1()

//object within object

function fun2() {
    const laptop = {
        model: 'Dell inspiron 15',
        company: 'Dell',
        price: '64990',
        details: {
            RAM: '8Gb',
            SSD: '552Gb',
            Storage: '1Tb',
            Generation: '11th generation',
        },
        features: ['best camera', 'clssic design', 'superfast', 'gaming']
    }
    console.log(laptop)
}
fun2()