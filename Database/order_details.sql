create table order_details(order_details_id int primary key auto_increment,order_id int, product_id int,total_amount DOUBLE (10,2)not null,quantity int not null);
ALTER TABLE order_details ADD FOREIGN KEY (order_id) REFERENCES orders(order_id);
ALTER TABLE order_details ADD FOREIGN KEY (product_id) REFERENCES products(product_id);