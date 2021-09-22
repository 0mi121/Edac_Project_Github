package com.sunbeam.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.sunbeam.daos.OrdersDao;

@Controller
@RequestMapping("/order")
public class OrdersController {
@Autowired
private OrdersDao order;

@PostMapping("/place")
public void placeOrder(@RequestParam int id,@RequestParam double amount) {
	order.placeOrder(id, amount);
}

}
