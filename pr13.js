// let promiseA = new Promise((res,rej)=>{
//     setTimeout(() => {
//         resolve('A')
//     },1000 );
// })

// let promiseB = new Promise((res,rej)=>{
//     setTimeout(() => {
//         resolve('B')
//     },1000 );
// })
// // console.log('first')
// // promiseA.then((data)=>{console.log(data);})
// // console.log('before b');
// // promiseB.then((data)=>{console.log(data);})
// // console.log('last');


// console.log('first');
// promiseA.then((data)=>{
//     console.log(data);
//     console.log('before b');
// })
// promiseB.then((data)=>{
//     console.log(data);
//     console.log('last');
// })


// function printLetter(let){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve (let)
//         }, 1000);
//     })
// }

// -----------------async, await
//make your code readeble


// function printLetter(let){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve (let)
//         }, 1000);
//     })
// }
// async function printAlpha(){
//    console.log(await printLetter('A')) 
// //    console.log(ans1);
//     console.log('before b get resolved');
//     let ans2= await printLetter('B')
//     console.log(ans2);
//     console.log('before c get resolved');
//     let ans3= await printLetter('B')
//     console.log(ans3);
// }
// printAlpha()



// console.log('first');
// let pr= new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve('second')
//     }, 1000);
// })
// pr.then((data)=>{
//     console.log(data);
//     console.log('third');
// })

// async function fun(){
//     console.log('first');
//     let result = await fun ()
// }

//prototype

let animal={
    eats:true,
    moves:true

}
let rabit={
    jump:true
}
let mouse={
    hasTail:true,

}
rabit.__proto__ = animal
mouse.__proto__ = animal
console.log('rabit',rabit);

console.log(rabit.hasOwnProperty('moves'));
console.log(rabit.hasOwnProperty('jump'));

///////

let keys= Object.keys(rabit)
console.log(keys);


//for in loop 
// for (const key in rabit) {
//     if (rabit.) {
//         console.log(key)
//     }
//     console.log(key)
//     }


    //constructor function

    function User(name) {
        this.firstName = name
    }

    let result= new User ('grishma')
    console.log(result);
