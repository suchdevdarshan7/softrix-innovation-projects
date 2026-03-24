// console.log("This is line 1");

// setTimeout(() => {
//     setTimeout(()=>{
//         console.log("This is second set timeout ");
//         setTimeout(()=>{
//             console.log("This is third set timeout");
//         })
//     },2000)
// }, 1000);
// console.log("This is line 3");
// console.log("This is line 4");
// console.log("This is line 5");

// let promise1 = new Promise((res, rej) => { setTimeout(() => {
//     res("This is resolved");
//   }, 1000);
// });

// console.log(promise1);
// console.log("This is after promise1 printing");

// let promise2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej("This is rejected");
//   }, 2000);
// });

// let func = async (promise2) => {
//   try {
//     const result = await promise2;
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// func(promise2);
// promise2
//   .then((res) => {
//     d
//   })
//   .catch((err) => {
//     console.log(`This is the catch block and the error is ${err}`);
//   })
//   .finally(() => {
//     console.log("This block works in then and catch");
//   });
