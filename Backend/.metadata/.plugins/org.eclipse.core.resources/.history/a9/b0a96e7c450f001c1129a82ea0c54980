package com.sunbeam.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sunbeam.entities.Products;
import java.lang.String;

@Repository
public interface ProductsDao extends JpaRepository<Products, Integer>, CrudRepository<Products, Integer>{
	Products findByProductId(int id);
	List<Products> findAll();
	List<Products> findByCategory(String category);
	List<Products> findByBrand(String brand);
	List<Products> findByOrderByPriceAsc();
	List<Products> findByOrderByPriceDesc();
	List<Products> findByPnameContainingIgnoreCase(String name);
	void deleteByProductId(Integer id);
	int deleteProductsByPname(String name);
	@Query("select distinct p.category from Products p")
	List<String> findDistinctCategory();
	@Query("select distinct p.brand from Products p")
	List<String> findDistinctBrand();
}
