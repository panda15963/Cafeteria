# Cafeteria
## User Table
``` sql
CREATE TABLE users (
        id VARCHAR(36) DEFAULT (UUID()) PRIMARY KEY, 
        email VARCHAR(255) NOT NULL UNIQUE,
        name VARCHAR(255) NOT NULL,
        username VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        phonenumber VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL
    );
```
## Cart Table
``` sql
CREATE TABLE carts (
    id VARCHAR(36) NOT NULL,
    image VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL UNIQUE,
    price FLOAT(11) NOT NULL,
    amount INT(11) NOT NULL,
    total FLOAT(11) NOT NULL,
    FOREIGN KEY (id) REFERENCES users(id)
);
```