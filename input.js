const net = require("net");

let connection;
// setup interface to handle user input from stdin

const setupInput = (conn) => {
  connection  = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);   // Event listener

  return stdin;
};


const handleUserInput = function (data) {
  // your code here
  if (data === '\u0003') {
    console.log('Leaving...')
    process.exit();
  }

  if (data === 'w') {
    connection.write("Move: up");
  }

  if (data === 'a') {
    connection.write("Move: left");
  }

  if (data === 's') {
    connection.write("Move: down");
  }

  if (data === 'd') {
    connection.write("Move: right");
  }

  if (data === '1') {
    connection.write("Say: Away I go!");
  }

  if (data === '2') {
    connection.write("Say: See ya later alligator!");
  }

  if (data === '3') {
    connection.write("Say: Yummy!");
  }


};


module.exports = {setupInput};