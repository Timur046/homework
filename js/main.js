// let age = 19;
// // if (age >= 18) {
// //     console.log('Вам есть 18')
// // } else {
// //     console.log('Вам нет 18')
// // }
// age>=18 ? console.log('Вы соверешеннолетний'):console.log('Вам еще нет 18')

//==================================================

// for(let i=2;i<=12;i=i+2){
//     console.log(i)
// }четные числа



// for(let i=10;i>=1;i=i-1){
//     console.log(i)
// } обратный порядок


// ....................................................................................

// function helloName(name){
//     return `Hello, ${name} !!!`
// }
// console.log(helloName(`Timur Skorobogatov`))



// let numbers = [2, 30, 5, 40, 10, 5, 7, 33, 5]
// function largeSearching(array) {
//     for (let i= 0; i < array.length; i++) {
//         if(array[i]>10){
//             console.log (array[i])
//         }
//     }
// }
// largeSearching(numbers)


// function calc(firstNumb, secondNumb, sign){
//     if (sign == `+`)   {
//         console.log(firstNumb+secondNumb)
//     }else if (sign ==`-`){
//         console.log(firstNumb-secondNumb)
//     }else if (sign ==`*`){
//         console.log(firstNumb*secondNumb)
//     }else if (sign ==`/`){
//         console.log(firstNumb/secondNumb)
//     }else{
//         console.log(`Unexpected operation`)
//     }
// }

// calc(10,2,`-`)
// =====================================================================================


// ДОМАШНЕЕ ЗАДАНИЕ НАЧИНАЕТСЯ ТУТ !!!!!!!!!!!!!!!!!!!!

// Первое и второе задания:

// const student ={
//     name:`Timur`,
//     surname:`Skorobogatov`,
//     age:25,
//     sayHello(name){
//         console.log(`Hello ${name}`)
//     }
// }
// student.sayHello(`Masha`)


// Третье задание:

let notAdminCount = 0;
const users = [
    {
        name: `Peter`,
        isAdmin: false
    },
    {
        name: `Anna`,
        isAdmin: false
    },
    {
        name: `Ivan`,
        isAdmin: true
    },
    {
        name: `Greg`,
        isAdmin: false
    }
]

for (let i = 0; i < users.length; i++){
    if(!users[i].isAdmin){
        notAdminCount++
    }
}
console.log(notAdminCount)