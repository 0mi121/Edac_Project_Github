package com.sunbeam.dtos;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import com.sunbeam.entities.Products;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
public class ProductsDto {
	private int productId;
	private String pname;
	private String brand;
	private double price;
	private String color;
	private String dimension;
	private String description;
	private float rating;
	private String category;
	private MultipartFile image1;
	private MultipartFile image2;
	private MultipartFile image3;
	
	public static ProductsDto fromEntity(Products entity) {
		ProductsDto dto = new ProductsDto();
		BeanUtils.copyProperties(entity, dto);
		return dto;
	}
	
	public static Products toEntity(ProductsDto dto) {
		Products products = new Products();
		BeanUtils.copyProperties(dto, products,"image1","image2","image3");
		return products;
	}
}
