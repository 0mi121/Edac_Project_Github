create table orders(order_id int primary key auto_increment,userid int,address_id int,ammount DOUBLE (10,2)not null,order_email varchar(30) not null,order_date date not null,order_status varchar(10));
ALTER TABLE orders ADD FOREIGN KEY (userid) REFERENCES users(userid);
ALTER TABLE orders ADD FOREIGN KEY (address_id) REFERENCES address(address_id);