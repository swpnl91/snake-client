const net = require("net");

const {connect} = require("./client");
const {setupInput} = require("./input");

console.log("Connecting ...");
connect();   // Activating the connect function in client.js

setupInput();