const net = require('net');

let connection;
const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  connection = conn;
  return stdin;
};

const handleUserInput = function (data) {
  // your code here
  if (data === '\u0003') {
    process.exit();
  }
  else if (data == 'w') {
    connection.write("Move: up");
  } else if (data === 'a') {
    connection.write('Move: left');
  } else if (data === 's') {
    connection.write('Move: down');
  } else if ( data === 'd') {
    connection.write('Move: right');
  }
};

module.exports = {setupInput, handleUserInput};