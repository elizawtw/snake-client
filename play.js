const net = require("net");
const { stdin } = require("process");
const connect = require('./client');
// establishes a connection with the game server
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
  
};
const handleUserInput = function (data) {
  // your code here
  if (data === '\u0003') {
    process.exit();
  }
};

stdin.on("data", handleUserInput);



console.log("Connecting ...");
connect();
setupInput();