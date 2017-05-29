var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require('console.table');

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "orangelamp22",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
});

// Display what products are available
connection.query('SELECT * FROM products',function(err,rows){
  if(err) throw err;

  console.log('Products Available:\n');
  console.log(rows);
});

//Ask what product the user would like to buy
