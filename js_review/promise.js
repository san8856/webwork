//https://github.com/cyannara/webwork/blob/master/js_review/README.md

// function wakeUp() {
//   setTimeout(() => {
//     console.log("1. 일어났어요! ⏰");
//   }, 1000);
// }

// function washFace() {
//   setTimeout(() => {
//     console.log("2. 세수했어요! 💦");
//   }, 1000);
// }
// //비동기 처리
// wakeUp();
// washFace();

//  2.
// //비동기 처리 => 동기식 처리
// function wakeUp() {
//   setTimeout(() => {
//     console.log("1. 일어났어요! ⏰");
//     washFace();
//   }, 1000);
// }

// function washFace() {
//   setTimeout(() => {
//     console.log("2. 세수했어요! 💦");
//   }, 1000);
// }
// //동기 처리
// wakeUp();

// //  3.
// //동기식 처리 => 콜백함수
// function wakeUp(callback) {
//   setTimeout(() => {
//     console.log("1. 일어났어요! ⏰");
//     callback();
//   }, 1000);
// }

// function washFace() {
//   setTimeout(() => {
//     console.log("2. 세수했어요! 💦");
//   }, 1000);
// }

// function shower() {
//   setTimeout(() => {
//     console.log("3. 샤워했어요! 💦");
//   }, 1000);
// }
// //동기 처리
// wakeUp(washFace); // () 안에 들어오는 함수를 실행


//  4.
//동기식 처리 //콜백함수 => 콜백지옥
function wakeUp(callback) {
  setTimeout(() => {
    console.log("1. 일어났어요! ⏰");
    callback();
  }, 1000);
}

function washFace(callback) {
  setTimeout(() => {
    console.log("2. 세수했어요! 💦");
    callback();
  }, 1000);
}

function shower(callback) {
  setTimeout(() => {
    console.log("2. 샤워했어요! 💦");
    callback();
  }, 1000);
}

function eatBreakfast(callback) {
  setTimeout(() => {
    console.log("3. 아침 먹었어요! 🍞");
    callback();
  }, 1000);
}

//동기 처리//래퍼 함수 //콜백지옥
wakeUp(()=>{
  shower(()=>{
    eatBreakfast(()=>{
      console.log("준비완료")
    });
  })
}); 
