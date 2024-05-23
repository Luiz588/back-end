CREATE DATABASE login;

use login;

CREATE TABLE user (
  idUser int primary key,
  username varchar(20) NOT NULL,
  passworld varchar(8) NOT NULL);
  
  INSERT INTO USER values (1, 'mayomai', '123');
  
  select * from user;
  
