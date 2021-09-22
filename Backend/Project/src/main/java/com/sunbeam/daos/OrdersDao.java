package com.sunbeam.daos;
public interface OrdersDao {
 //Orders placeOrder(int userId);

void placeOrder(int userId, double amount);
}
