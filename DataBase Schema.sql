DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id int NOT NULL AUTO_INCREMENT,
    product_name varchar(255),
    department_name varchar(255),
    price varchar(255),
    stock_quantity int, 
    PRIMARY KEY (item_id)
);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)  
VALUES (null, 'phone', 'electronics',1000, 50);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)  
VALUES (null, 'battery', 'electronics',100, 50);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)  
VALUES (null, 'babwipes', 'family',20, 50);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)  
VALUES (null, 'pillows', 'family',200, 50);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)  
VALUES (null, 'bedsheets', 'homedecor',800, 50);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)  
VALUES (null, 'books', 'art',50, 50);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)  
VALUES (null, 'paitings', 'art',100, 50);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)  
VALUES (null, 'todlerfigures', 'actionfigures',350, 50);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)  
VALUES (null, 'tradingcards', 'familygames',99, 50);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)  
VALUES (null, 'monopoly', 'familygames',600, 50);


