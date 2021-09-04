Create database project;
use project;

Create table role(roleid int primary key auto_increment,name varchar(30));
insert into role values(0,'admin');
insert into role values(0,'user');

Create table users(userid int primary key auto_increment,email varchar(50),password varchar(100),first_name varchar(20),last_name varchar(20),phone varchar(12),roleid int);
ALTER TABLE users ADD FOREIGN KEY (roleid) REFERENCES role(roleid);
ALTER TABLE users ADD UNIQUE (email);
ALTER TABLE users ADD reset_token CHAR(36);
ALTER TABLE users
DROP COLUMN reset_token;
insert into users values(0,'omkar@gmail.com','omkar123','Omkar','Annam','9767978477',1);
insert into users values(0,'abhijeet@gmail.com','abhi123','Abhijeet','Raut','9876543210',1);
insert into users values(0,'akshay@gmail.com','akshay123','Akshay','Nandre','9632587410',2);
insert into users values(0,'navjyot@gmail.com','navjyot123','Navjyot','Jadhav','9512368740',2);
insert into users values(0,'shubham@gmail.com','shubham123','Shubham','Borle','9874125630',2);

create table user_role(userid int,roleid int);
ALTER TABLE user_role ADD FOREIGN KEY (roleid) REFERENCES role(roleid);
ALTER TABLE user_role ADD FOREIGN KEY (userid) REFERENCES users(userid);
