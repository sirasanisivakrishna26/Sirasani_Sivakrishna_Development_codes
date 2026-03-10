package com.hcl.gl.controller;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hcl.gl.pojo.Products;
import com.hcl.gl.service.EmailService;
import com.hcl.gl.service.ProductService;


@CrossOrigin(originPatterns="http://localhost:3000")
@RestController
public class ProductsController {

	
	@Autowired
	ProductService productService;
	
	@Autowired
	EmailService emailService;
	
	
	
	
	@GetMapping("/inserProducts")
	public String insertProducts(String name,double price,String category,int stocks,String image) {
		Products products=new Products(name, price, category, stocks,image);
		
		productService.insertProduct(products);
		return "Product Added";
	}
	
	//------------send mail to admin when stockes less then 10
//	@GetMapping("/sendeamil")
//	public String sendemail( String email) {
//		emailService.sendEmail(email, "Stockes less then 10", "Increase the stocks");
//		return "Mail send successfully";
//	}
	

	
	@GetMapping("/getAllProducts")
	public String getAllProducts() throws JsonProcessingException{
		List<Products> product=productService.getAllProducts();
		ObjectMapper objectMapper=new ObjectMapper();
		String message=objectMapper.writeValueAsString(product);
		return message;
	}
	

	@GetMapping("/updatationofProduct")//Upadting Product
	public String updateProduct( int id,String name,double price,String category,int stocks,String image) {
		Products products=new Products(id,name, price, category, stocks,image);
		productService.updateProduct(products);
		return "Product Added";
	}
	

	@GetMapping("/deleteproductById")
	public String deleteproduct(int id) {
			productService.deleteProductById(id);
			return "deletion Sucessful"; 			
			
	}		


	
	@GetMapping("/productsortbyprice")//Sorting By Price
	public String productsortbyprice() throws JsonProcessingException {
		
		List<Products> product=productService.sortByNameandPriceandId(Direction.ASC, "price");
		ObjectMapper objectMapper=new ObjectMapper();
		String message=objectMapper.writeValueAsString(product);
		return message;
		
		  
		
	}
		
	
	@GetMapping("/productsortbyname")//Sorting By Name
	public String productsortbyname() throws JsonProcessingException {
		

		List<Products> product= productService.sortByNameandPriceandId(Direction.ASC, "name");
		ObjectMapper objectMapper=new ObjectMapper();
		String message=objectMapper.writeValueAsString(product);
		return message;
		
		
	}
	
	@GetMapping("/productsortbycategory")//Sorting By Name
	public String productsortbycategory() throws JsonProcessingException {
		
		List<Products> product= productService.sortByNameandPriceandId(Direction.ASC, "category");
		ObjectMapper objectMapper=new ObjectMapper();
		String message=objectMapper.writeValueAsString(product);
		return message;
		
		
	}
	
	@CrossOrigin(originPatterns="http://localhost:3000")
	@GetMapping("/searchByName")
	public String searchByName(String name) throws JsonProcessingException{
		List<Products> products=productService.getByName(name);
		ObjectMapper objectMapper=new ObjectMapper();
		String message=objectMapper.writeValueAsString(products);
		
		return message;
				}
	
}
