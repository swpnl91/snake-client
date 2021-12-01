const net = require("net");
const {IP, PORT} = require("./constants");


// establishes a connection with the game server

const connect = function () {

  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connection successful!")
    conn.write('Name: SSP'); // code that does something when the connection is first established
  });

  conn.on('data', (data) => {   // code to let us know what server says
    console.log('Server says: ', data);
  });

  conn.on('end', () => {     // code to display message after getting disconnected
    console.log('Disconnected from the server');
  });
  

  return conn;
};

module.exports = {connect};