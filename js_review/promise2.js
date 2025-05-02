//https://github.com/cyannara/webwork/blob/master/js_review/README.md

// //  5.
// //동기식 처리 //콜백지옥-> promise
// function wakeUp() {
//   return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       console.log("1. 일어났어요! ⏰");
//       resolve();
//     }, 1000);
//   })
// }

// function washFace() {
//   return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       console.log("2. 세수했어요! 💦");
//       resolve();
//     }, 1000);
//   })
// }

// function shower() {
//   return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       console.log("2. 샤워했어요! 💦");
//       resolve();
//     }, 1000);
//   })
// }

// function eatBreakfast() {
//   return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       console.log("3. 아침 먹었어요! 🍞");
//       resolve();
//     }, 1000);
//   })
// }

// //promise
// wakeUp()
//   .then(washFace)
//   .then(eatBreakfast)
//   .then(()=>console.log("준비완료"))


//  5.
//동기식 처리 //promise -> async, await
function wakeUp() {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      console.log("1. 일어났어요! ⏰");
      resolve();
    }, 1000);
  })
}

function washFace() {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      console.log("2. 세수했어요! 💦");
      resolve();
    }, 1000);
  })
}

function shower() {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      console.log("2. 샤워했어요! 💦");
      resolve();
    }, 1000);
  })
}

function eatBreakfast() {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      console.log("3. 아침 먹었어요! 🍞");
      resolve();
    }, 1000);
  })
}

//async, await

const morningRoutin = async ()=>{     // async function morningRoutin(){
  await wakeUp()
  await washFace()
  await eatBreakfast()
  console.log("await 준비완료")
}
morningRoutin()//함수호출