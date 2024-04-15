# Cafeteria

## Used Framework, Language and Database
- NextJS
- Tailwind CSS
- Javascript
- CSS
- NodeJS
- TypeScript
- MySQL

## Getting Started
1.  Clone the repository in terminal as below command.
``` bash
git clone https://github.com/panda15963/Cafeteria.git
```
2. Process command to run the project as below.
``` bash
docker-compose up
```
3. Open http://localhost:3000 on your browser

# SQL Table
1. You should create database named "cafeteria" firstly.
2. Create table with following sql code.
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
CREATE TABLE carts (\
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    image VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL UNIQUE,
    price FLOAT(11) NOT NULL,
    amount INT(11) NOT NULL,
    total FLOAT(11) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```
3. Register and login for a new user. Then click the menu button at top right corner.
4. Try to add product into cart by clicking plus button or minus button.
5. Click checkout button if you want to buy something. However, if you click "Place Order", it will be failed because I coded to pop up an alert and move to main page.