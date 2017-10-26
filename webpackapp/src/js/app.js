//alert("Hello World!");
//alert(require("./people.js"));
// 引入样式打包的话不用变量接收
//require("style-loader!css-loader!./style.css");
require("../css/style.css");

let people = require("./people.js");
//console.log(people[0].name);
let $ = require("jquery");



$.each(people,function(key,value){
    $("body").append(`<h1>姓名:${people[key].name}<br>年龄:${people[key].age}</h1>`);
});
