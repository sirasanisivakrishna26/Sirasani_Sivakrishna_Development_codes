package com.hcl.gl.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;


import com.hcl.gl.pojo.Products;
import com.hcl.gl.repo.ProductRepo;

@Service
public class ProductService {

	@Autowired
	ProductRepo repo;
	
	public String insertProduct(Products product){
		repo.save(product);
		return "Product Added";
		
	}
	
	public List<Products> getAllProducts(){
		return repo.findAll();
	}
	
	
	public List<Products> getByName(String name){
		Products p1=new Products();
		p1.setName(name);
		ExampleMatcher exampleMatcher = ExampleMatcher.matching().withMatcher("name", ExampleMatcher.GenericPropertyMatchers.contains()).withIgnorePaths("id", "price", "category","stocks");
		Example<Products> example = Example.of(p1, exampleMatcher);
		return repo.findAll(example);
	}
	
	
	public void updateProduct(Products product) {
		repo.save(product);
	}
		
	//This function is used to Delete the data into store
	public void deleteProductById(int id) {
		repo.deleteById(id);
	}
	
	
	
	//This function is used to sort by Id, Name & Price in store
	public List<Products> sortByNameandPriceandId(Direction direction, String columnname) {
		return repo.findAll(Sort.by(direction, columnname));
	}
	
	//This function is used to Find the product ById the data into store
	public Optional<Products> findById(int id){
		return repo.findById(id);
		
		
	}
	

	//This is for delete all the procts in the store
	public void deleteAllProducts() {
		repo.deleteAll();
	}
	
	
}
