CREATE database burgers_db
USE database burgers_db
CREATE TABLE burgers 
(
id AUTO_INCREMENT NOT NULL ,
burger_name VARCHAR(40),
devoured BOOLEAN,
date TIMESTAMP,
PRIMARY KEY(id)
);