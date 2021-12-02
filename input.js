const net = require("net");
const {MOVE, MESG} = require("./constants");  // MOVE/MESG are objects

let connection;
let speed = 100;
let movement;



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

  for (const [ key, value ] of Object.entries(MOVE)) { // Object.entries(obj) returns an array with key/value pair
    if (data === key) {
      clearInterval(movement);    // to stop time
      movement = setInterval(() => {  // to move snake continually
        connection.write(value);
      }, speed);
    }
  }

  for (const [ key, value ] of Object.entries(MESG)) {
    if (data === key) {
      connection.write(value);
    }  
  }

 /* if (data === 'w') {
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
*/

};


module.exports = {setupInput};