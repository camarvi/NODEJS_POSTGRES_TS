CREATE DATABASE typescriptdatabase;

CREATE TABLE users( 
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users (name,email) 
    VALUES ('emilio', 'emilio@hotmail.com'),
           ('elena' , 'elena2562@gmail.com');