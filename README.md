# Cafeteria
``` sql
CREATE TABLE users (
        id VARCHAR(36) DEFAULT (UUID()) PRIMARY KEY, 
        email VARCHAR(255) NOT NULL UNIQUE,
        name VARCHAR(255) NOT NULL,
        username VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
    );
```