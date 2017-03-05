import "babel-polyfill";
//require("./main.scss");
//require("./scss/ddd.scss");
var component = require(`./component`);
//var component2 = require("./jade/ddd.jade");


//document.body.appendChild(component());
document.body.innerHTML = component();
//document.body.innerHTML = component2();