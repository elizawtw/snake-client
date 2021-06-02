const net = require('net');
const stdin = process.stdin;
stdin.setEncoding('utf8');
const { IP, PORT } = require("./constants");

const connect = function () {
  //create an object named conn
  const conn = net.createConnection({
    host : IP,// IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  
  conn.on("data", (data) => {
    console.log(data);
  });
  conn.on('connect', () => {
   console.log("Successfully connected to game server");
   conn.write("Name: ELI");
   
   

  })

  return conn;
};

module.exports = connect;