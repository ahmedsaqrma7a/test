// var arr = [1,2,"10",30];

// var res = arr.reduce((acc,el,i,array)=>{
//     // console.log(x);
//     // console.log("hello");
//     return acc+el;
// })
// console.log(res);
// var sum = arr[0];
// sum+=arr[i]

////promises

// function test(){
//     console.log("first");
//    second();
//     console.log("end");
// }
// function second(){
//     setTimeout(() => {
//             ccc
//         console.log("second");

//     }, 500);
// }
// test();

// var x;
// setTimeout(() => {
//     x = 10;
//     console.log(x);

// }, 500);
var user;
// function userFunc(){
//     setTimeout(() => {
//          user = {
//             name:"hamada",
//             id:1
//         }
//         console.log(user);
//         setTimeout(()=>{
//             console.log(user.id);

//         },1000)
//     }, 2000);
// }
// userFunc();

//////////////callback hell/////////////
// setTimeout(() => {
//     var ids = [100, 200, 300]
//     console.log(ids);
//                 setTimeout(() => {
//                             var user = {
//                                 id: ids[1],
//                                 name: "hamada"
//                             }
//                            console.log(user)
//                         setTimeout(() => {
//                             var address = {
//                                 userName: user.name,
//                                 city: "ismailia"
//                             }
//                             console.log(address);

//                         }, 2000);
//     }, 500);

// }, 1000);


//promises 
//ele creation 
//using 
// console.log("hello");
// var p = new Promise((resolve,reject)=>{
//   // reject("error to get data");
//    resolve("resolved data")
//         console.log("promise code");

// })
// console.log(p);//pending fullfulied reject
// p.then((d)=>{
//     console.log(d);
// })
// .catch((msg)=>{
//     console.log(msg);

// })
// console.log("end");


// var getIds = new Promise((res, rej) => {
//     setTimeout(() => {
//         var ids;
//         // = [100, 200, 300];
//         if (ids) {

//             res(ids);
//         }
//         else {
//             rej("error to get ids");
//         }

//     }, 1000);
// })
// function getUser(userId) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             var user = {
//                 id: userId,
//                 name: "hamada"
//             }
//             if (user) {

//                 res(user);
//             }
//             else {
//                 rej("error to get user")
//             }

//         }, 500);

//     })
// }
// function getAddress(userName) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             var address = {
//                 userName: userName,
//                 city: "isamilia"
//             }
//             res(address);

//         }, 2000);

//     })
// }
//then catch

// getIds.then((ids) => {
//     console.log(ids);
//     return getUser(ids[1]);
// })
// .then((user) => {
//         console.log(user);
//         return getAddress(user.name)
//     })
//     .then((add) => {
//         console.log(add);

//     })
//     .catch((msg) => {
//         alert(msg);
//     })

//async await
// async function asyncFun(){
// try{

//     var ids = await getIds;
//     console.log(ids);
//     var user = await getUser(ids[1]);
//     console.log(user);
//     var add = await getAddress(user.name);
//     console.log(add);
    
// }
// catch(e){
//     alert(e);
// }
   
// }
// asyncFun();

// var x = 10;

// getUser(100).then((u)=>{
//     console.log(u);

// }).catch((msg)=>{
//     console.log(msg);

// })


// getAddress("hamda").then((add)=>{
//     console.log(add);

// })

////fetch es6 ajax request
// var res = fetch("https://jsonplaceholder.typicode.com/users");
// // console.log(res);
// //then
// res.then((d)=>{
//    return d.json();
// })
// .then((users)=>{
//     console.log(users);

// })

//await
async function getUsers(){
 var res = await fetch("https://jsonplaceholder.typicode.com/users");
 var users = await res.json();
 console.log(users);
 //2- show user data in html
 //3- get user posts
 //4- show posts in html



}
getUsers();

var arr = ["aa","aaa","aaa"]

