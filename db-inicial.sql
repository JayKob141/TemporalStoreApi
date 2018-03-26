create database expressapi;

create table Products(
 Code varchar(20) PRIMARY KEY,
 Name varchar(50) NOT NULL,
 Price money NOT NULL
);

INSERT INTO Products (Code, Name, Price) VALUES
('PANTS', 'Pants', 5.00),
('TSHIRT', 'T-Shirt', 20.00),
('HAT', 'Hat', 7.50);