const net = require("net");


// establishes a connection with the game server

const connect = function () {

  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    conn.write('Name: SSP'); // code that does something when the connection is first established
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('end', (data) => {
    console.log('disconnected from the server');
  });
  

  return conn;
};

module.exports = {connect};