const net = require('net');
const stdin = process.stdin;
stdin.setEncoding('utf8');

const connect = function () {
  //create an object named conn
  const conn = net.createConnection({
    host: "135.23.222.131",// IP address here,
    port:50542// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = connect;