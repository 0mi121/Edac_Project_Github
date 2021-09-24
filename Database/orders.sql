create table orders(orderid int primary key auto_increment,userid int,addressid int,amount DOUBLE (10,2)not null,odate DATETIME not null);
ALTER TABLE orders ADD FOREIGN KEY (userid) REFERENCES users(userid);
--ALTER TABLE orders ADD FOREIGN KEY (addressid) REFERENCES address(addressid);