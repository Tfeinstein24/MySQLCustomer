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
var productID;
var productQuantity;
//Ask what product the user would like to buy
var start = function() {
  inquirer.prompt({
    name: "whatYouWant",
    type: "rawlist",
    message: "Which product ID do you want?",
    choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
  }).then(function(answer) {
    productID = answer.whatYouWant;
    console.log(productID);
    // Second message should ask how many units
    // if (answer.whatYouWant.toUpperCase() === "1", "2", "3", "4", "5", "6", "7", "8", "9", "10") {
      inquirer.prompt({
    name: "howMany",
    type: "input",
    message: "How many do you want?"
  }).then(function(answer) {
    productQuantity = answer.howMany;
  console.log(productQuantity);
  connection.query('SELECT * FROM products WHERE id= ' + productID, function(err, query) {
    if (err) throw err;
    console.log(query[0].stock_quantity);
    var currentStock = query[0].stock_quantity;
    var requestedStock = answer.howMany;
    if (currentStock < requestedStock) {
      console.log("You're out of luck cowboy. Take a rain check.") 
    }
     if (currentStock >= requestedStock) {
console.log("You got it bud, that'll be tree fiddy");
  var updatedStockQuantity = currentStock - requestedStock;
connection.query("UPDATE products SET stock_quantity="+ updatedStockQuantity +" WHERE id=" +productID, function(err, query){
  if (err) throw err;
  console.log(query);
})
    }
    
  })
  })
    //}
   // else {
   //   bidAuction();
   // }
  });
  
};
// This will prompt user
  start();
 // console.log(start);
//