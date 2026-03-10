package com.hcl.gl.pojo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;


@RestController
public class WishlistController {
	
	@Autowired
	WishlistService wishlistservice;
	
	 @GetMapping("/addtowishlist")  // 
		@ResponseBody
		 //insert data into cart
		public String addToWishlist(String name, String category, double price, int usersid) {
				Wishlist wishlist=new Wishlist(name, category, price, usersid);
				wishlistservice.addintowishlist(wishlist);
			return "Product added Successuly";	
		}
	 
	 @GetMapping("/getwishlist")
	 //get data from cart
	 public String getall() throws JsonProcessingException{
			List<Wishlist> wishlist= wishlistservice.getAll();
			ObjectMapper objectMapper=new ObjectMapper();
			String message=objectMapper.writeValueAsString(wishlist);
			return message;
			
	 }
	 
	 
	 @CrossOrigin(originPatterns="http://localhost:3000")
		@GetMapping("/deletewishlistById")
		public String deletewish(int id) {
		 wishlistservice.deletebyid(id);
				return "deletion Sucessful"; 			
				
		}	
	 

}
