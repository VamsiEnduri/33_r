// // function friend1(arr,num, bool){
// //  console.log(arr + "  " + num + " "+ bool)
// // }
// // friend1([1,2,3,4],0,true)

// // // xyz=function xyz(){ named function expression

// // // }

// // function friend1(xyz,num){
// //     console.log(num)
// //     xyz()
// //    }
// //    friend1( function xyz(){
// //     console.log("xyz function inside friend1")
// //    },0)

// //    function orderPlaced(cloth,nextStep){
// //      alert(`you order placed suuccessfully and you ordered ${cloth}`)
// //     setTimeout(()=>{  //asynchronus js
// //         nextStep()
// //     },2000)
// //    }

// //    orderPlaced("tshirt",function orderShipped(){
// //     alert("your order has been shipped!!!")
// // })

// // //
// // abc()
// // function abc(){
// //     console.log("abc")
// // }

// // //
// // // function orderPlaced(){
// // //     console.log("order placed!!!")
// // // }

// // // orderPlaced()

// // xyz()
// // const xyz=()=>{  //arrow function  differnces ://1. syntax  2.hoisting
// // console.log("xyz function")
// // }

// // xyz()

// //   function step1(item,nextStep){
// //      alert(`you have ordered ${item}`)
// //      setTimeout(()=>{
// //         nextStep()
// //      },2000)
// //   }
// //   step1("laptop dell",()=>{
// //      alert("your laptop dell order shipped successfully!!!")
// //   })

// setTimeout(() => { // nested callback functions  //asycn js
//   alert("placed order !!!");

//   setTimeout(() => {
//     alert("order shipped successfully !!!");
//     setTimeout(() => {
//       alert("order reached to nearest hub!!");
//     }, 6000);
//   }, 4000);
// }, 24 * 60 * 60 * 1000);

// // function step1(item,nextStep){
// //    setTimeout(()=>{
// //     alert(`you have ordered ${item}`)
// //    },10000)

// //        nextStep()

// //  }
// //  step1("laptop dell",()=>{
// //     alert("your laptop dell order shipped successfully!!!")
// //  })


// // setTimeout(()=>{

// // },365 *24 *60 * 60 *1000)



// function clikeme(){
//     alert("you have ckiked the btn")
// }


// method which listen to the events done on html elkemnts
// addEventListener("submit",()=>{

// })
let btn=document.getElementById("btn")
let redBtn=document.getElementById("red")
let yellowBtn=document.getElementById("yellow")
let purpleBtn=document.getElementById("purple")
btn.addEventListener("click",()=>{
    alert("you have cliekd the btn")
})


redBtn.addEventListener("click",()=>{
    document.body.style.backgroundColor=redBtn.textContent
})

yellowBtn.addEventListener("click",()=>{
    document.body.style.backgroundColor=yellowBtn.textContent
})

purpleBtn.addEventListener("click",()=>{
   setTimeout(()=>{
    document.body.style.backgroundColor=purpleBtn.textContent
   },2000)
})