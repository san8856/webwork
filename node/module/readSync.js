const fs = require("fs")
//동기, 블로킹 함수
var text = fs.readFileSync("c:/temp/data.txt","utf-8");
console.log(text);
console.log("the end");