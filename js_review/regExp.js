// RegExp.js : 정규표현식

let text = "Visit W3Schools test";
const exp = /^Visit/i;
// //i - 있으면 대소문자 구분, 없으면 통합
let n = text.search(exp);
console.log(n);

let bool = exp.test(text)
console.log(bool);

//숫자 3자리만 //a-z: 소문자 A-Z:대,소문자 0-9:숫자
// [a-zA-Z]
// [0-9] : 0~9까지
// [0,9] : 0 과 9만
// \S - 공백을 제외한 모든 문자
// \d - 모든숫자
let numExp = /^[\S][\d]{2}$/
let numText = `a65`
bool = numExp.test(numText)
console.log('숫자표현',bool);
















































