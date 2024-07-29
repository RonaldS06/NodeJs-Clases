CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    address VARCHAR(200) NOT NULL
);

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    order_date DATE NOT NULL,
    customer_id INTEGER NOT NULL,
    amount NUMERIC(10, 2) NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- INSERTAR DATOS
INSERT INTO 
	customers (name, email, address) 
VALUES
	('John Doe', 'johndoe@example.com', '123 Main St, Anytown, CA'),
	('Jane Smith', 'janesmith@example.com', '456 Elm St, Anytown, CA'),
	('Michael Johnson', 'michaeljohnson@example.com', '789 Oak St, Anytown, CA'),
	('Emily Brown', 'emilybrown@example.com', '101 Pine St, Anytown, CA'),
	('David Lee', 'davidlee@example.com', '202 Cedar St, Anytown, CA');

INSERT INTO 
	orders (order_date, customer_id, amount) 
VALUES
	('2023-11-15', 1, 199.99),
	('2023-12-05', 2, 99.99),
	('2023-11-28', 3, 299.99),
	('2023-12-10', 1, 149.99),
	('2023-11-20', 4, 49.99);


--Realizar consultas

--Contar cuántos pedidos ha realizado cada cliente
SELECT 
	c.name,
	count(c.name)
FROM
	customers c
INNER JOIN
	orders o
ON
	c.customer_id = o.customer_id
GROUP BY
	c.name
