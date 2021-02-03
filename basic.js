const os = require("os");
const chance = require("chance");

const mychange = new chance();

console.log("Hi");

console.log("It looks like you're running a " + os.platform() + " machine");

console.log("Your new fake name is " + mychange.name);
