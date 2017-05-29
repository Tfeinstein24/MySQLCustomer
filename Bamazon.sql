CREATE DATABASE Bamazon;
USE Bamazon;
productsCREATE TABLE products (
id INTEGER(11) auto_increment NOT NULL,
product_name VARCHAR(255),
department_name VARCHAR(255),
price INTEGER,
stock_quantity INTEGER,
primary key (id)
);