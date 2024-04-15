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

## Example
- Main
![main1](https://github.com/panda15963/Cafeteria/assets/45156127/c15e8a88-2408-4bc6-863c-cff3eeaf4956)
![main2](https://github.com/panda15963/Cafeteria/assets/45156127/e88fd0db-86fc-4991-96ec-65a00a8d412a)
- Register
![register](https://github.com/panda15963/Cafeteria/assets/45156127/b02a5f86-1348-4154-b428-5ff7bba2c28b)
- Login
![Login](https://github.com/panda15963/Cafeteria/assets/45156127/b1cfa09e-3e23-4505-aad9-4fedf7048072)
- Menu
![items](https://github.com/panda15963/Cafeteria/assets/45156127/d8bc06a2-6050-4173-9504-a09e4d4bdce4)
- Details
![details](https://github.com/panda15963/Cafeteria/assets/45156127/9d348684-1dc1-4d87-accf-065eea9d67fc)