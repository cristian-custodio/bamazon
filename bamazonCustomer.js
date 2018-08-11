inquirer = require("inquirer");
mysql = require("mysql");
const Tablefy = require("tablefy");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});


connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    readProducts();
});


let table = new Tablefy();


function readProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        table.draw(res);
        placeOrder(); 
    });
};


function placeOrder() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        inquirer
            .prompt([
                {
                    name: "product_id",
                    type: "input",
                    message: "What is your product's ID?",
                    validate: function (value) {
                        if (isNaN(value) === false) {
                            return true;
                        }
                        return false;
                    }
                },
                {
                    name: "units",
                    type: "input",
                    message: "How many units of the product would you like to buy?",
                    validate: function (value) {
                        if (isNaN(value) === false) {
                            return true;
                        }
                        return false;
                    }
                }
            ])
            .then(function (answer) {
                var stockAmount = res[(answer.product_id) - 1].stock_quantity;
                if (parseInt(answer.units) <= parseInt(stockAmount)) {
                    console.log("Order successful!");
                    connection.query(
                        "UPDATE products SET ? WHERE ?",
                        [
                            {stock_quantity: stockAmount - answer.units},
                            {item_id: res[(answer.product_id) - 1].item_id}
                        ],
                        function(err, res) {
                            console.log("Quantities have been updated!\n");
                        }
                    );
                    var price_item = res[(answer.product_id) - 1].price
                    console.log("The total cost of your purchase is: $" + (answer.units * price_item));
                    askAgain();
                }
                else {
                    console.log("Insufficient quantity!");
                    askAgain();
                }
            })
        
    })
};


function askAgain() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        inquirer
            .prompt([
                {
                    name: "new_order",
                    type: "confirm",
                    message: "Would you like to place another order?",
                }
            ]).then(function (answer) {
        
                if (answer.new_order) {
                    //Clear the table to prevent duplicate
                    table = new Tablefy();
                    readProducts();
                }
                else {
                    console.log("See you next time!");
                    connection.end();
                }
            })
    })
}