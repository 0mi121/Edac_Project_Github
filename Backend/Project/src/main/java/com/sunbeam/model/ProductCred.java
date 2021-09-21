package com.sunbeam.model;

import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductCred {
	@Id
	private int productId;
	private String pname;
	private String brand;
	private double price;
	private String color;
	private String dimension;
	private String description;
	private float rating;
	private String category;
}
