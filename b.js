var x = Buffer.from("hello");
var y = Buffer.from("amruta");
var z = Buffer.concat([x, y]);
console.log(z);