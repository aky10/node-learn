//CommonJS, every file is module (by default)
//modules-encapulated code(only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-export-diff-method");
require("./7-mind-grenade");
console.log(data);

sayHi("Sheela");
sayHi(names.john);
sayHi(names.peter);
