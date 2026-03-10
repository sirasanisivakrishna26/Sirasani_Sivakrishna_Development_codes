package com.hcl.gl.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.loadbalancer.LoadBalancerClient;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class UsersController {

	
	@Autowired
	private LoadBalancerClient loadBalancerClient;
	
	//function that converts microservice name to url
	private String getBaseUrl(String microServiceName) {
		ServiceInstance instance=loadBalancerClient.choose(microServiceName);
		System.out.println("micro service url:"+instance.getUri().toString());
		return instance.getUri().toString();
	}
	
	@CrossOrigin(originPatterns="http://localhost:3000")
	@GetMapping("/addAllUsersss")
	public String viewAllUsers(String username,String email,String password) {
		String microServiceName="USERS-MICROSERVICE";
		RestTemplate template=new RestTemplate();
		String microServiceUrl=getBaseUrl(microServiceName);
		microServiceUrl=microServiceUrl+"/insertUsers?username="+username+"&email="+email+"&password="+password;
		String returnMessage=template.getForObject(microServiceUrl, String.class);
		return returnMessage;
	}
	
	
	@CrossOrigin(originPatterns="http://localhost:3000")
	@GetMapping("/getAllUsersssss")
	public String addUsers() {
		//object creation
				String microServiceName="USERS-MICROSERVICE";
				RestTemplate template=new RestTemplate();
				String microServiceUrl=getBaseUrl(microServiceName);
				microServiceUrl=microServiceUrl+"/getAllUsers";
				String returnMessage=template.getForObject(microServiceUrl, String.class);
				return returnMessage;
	}
	
	@CrossOrigin(originPatterns="http://localhost:3000")
	@GetMapping("/addtocart")  // " http://localhost:8085/addtocart?name="+name+"&catogery="+catogery+"&price="+price+"&username="+username+"&totalamount="+totalamount
	public String addToCart(String name,String category,double price, int usersid, double totalamount,int quantities) {
		//object creation
				String microServiceName="Cart-MICROSERVICE";
				RestTemplate template=new RestTemplate();
				String microServiceUrl=getBaseUrl(microServiceName);
				microServiceUrl=microServiceUrl+"/addtocart?name="+name+"&category="+category+"&price="+price+"&usersid="+usersid+"&totalamount="+totalamount+"&quantities="+quantities;
				String returnMessage=template.getForObject(microServiceUrl, String.class);
				return returnMessage;
	}
	
	@CrossOrigin(originPatterns="http://localhost:3000")
	@GetMapping("/getCarts")
	public String getcarts() {
		//object creation
				String microServiceName="Cart-MICROSERVICE";
				RestTemplate template=new RestTemplate();
				String microServiceUrl=getBaseUrl(microServiceName);
				microServiceUrl=microServiceUrl+"/getcart";
				String returnMessage=template.getForObject(microServiceUrl, String.class);
				return returnMessage;
	}  //updatecart
	
	
	@CrossOrigin(originPatterns="http://localhost:3000")
	@GetMapping("/updatecart")
	public String updateCart( int id,String name,String category,double price, int usersid, double totalamount,int quantities) {
		String microServiceName="Cart-MICROSERVICE";
		RestTemplate template=new RestTemplate();
		String microServiceUrl=getBaseUrl(microServiceName);
		microServiceUrl=microServiceUrl+"/updatecart?id="+id+"&name="+name+"&category="+category+"&price="+price+"&usersid="+usersid+"&totalamount="+totalamount+"&quantities="+quantities;
		String returnMessage=template.getForObject(microServiceUrl, String.class);
		return returnMessage;
	}
	
	@CrossOrigin(originPatterns="http://localhost:3000")
	@GetMapping("/getwishlist")
	public String getwishlist() {
		//object creation
				String microServiceName="Wishlist-MICROSERVICE";
				RestTemplate template=new RestTemplate();
				String microServiceUrl=getBaseUrl(microServiceName);
				microServiceUrl=microServiceUrl+"/getwishlist";
				String returnMessage=template.getForObject(microServiceUrl, String.class);
				return returnMessage;
	}  //updatecart
	

	@CrossOrigin(originPatterns="http://localhost:3000")
	@GetMapping("/addtowishlist")  // " http://localhost:8085/addtocart?name="+name+"&catogery="+catogery+"&price="+price+"&username="+username+"&totalamount="+totalamount
	public String addtoWishlist(String name, String category, double price, int usersid) {
		//object creation
				String microServiceName="Wishlist-MICROSERVICE";
				RestTemplate template=new RestTemplate();
				String microServiceUrl=getBaseUrl(microServiceName);
				microServiceUrl=microServiceUrl+"/addtowishlist?name="+name+"&category="+category+"&price="+price+"&usersid="+usersid;
				String returnMessage=template.getForObject(microServiceUrl, String.class);
				return returnMessage;
	}
	
	@CrossOrigin(originPatterns="http://localhost:3000")
	@GetMapping("/deleteWishlistsById")
	public String deleteById(int id) {
		String microServiceName="Wishlist-MICROSERVICE";
		RestTemplate template=new RestTemplate();
		String microServiceUrl=getBaseUrl(microServiceName);
		microServiceUrl=microServiceUrl+"/deletewishlistById?id="+id;
		String returnMessage=template.getForObject(microServiceUrl, String.class);
		return returnMessage;
	}
	
	@CrossOrigin(originPatterns="http://localhost:3000")
	@GetMapping("/deleteAllCartdata")
	public String deleteById() {
		String microServiceName="Cart-MICROSERVICE";
		RestTemplate template=new RestTemplate();
		String microServiceUrl=getBaseUrl(microServiceName);
		microServiceUrl=microServiceUrl+"/deleteall";
		String returnMessage=template.getForObject(microServiceUrl, String.class);
		return returnMessage;
	}
	
//	@CrossOrigin(originPatterns="http://localhost:3000")
//	@GetMapping("/addOrders")  // " http://localhost:8085/addtocart?name="+name+"&catogery="+catogery+"&price="+price+"&username="+username+"&totalamount="+totalamount
//	public String addtoWishlist(String name, String category, double price, int usersid) {
//		//object creation
//				String microServiceName="Wishlist-MICROSERVICE";
//				RestTemplate template=new RestTemplate();
//				String microServiceUrl=getBaseUrl(microServiceName);
//				microServiceUrl=microServiceUrl+"/addtowishlist?name="+name+"&category="+category+"&price="+price+"&usersid="+usersid;
//				String returnMessage=template.getForObject(microServiceUrl, String.class);
//				return returnMessage;
//	}
	
	@CrossOrigin(originPatterns="http://localhost:3000")
	@GetMapping("/deletecartById")
	public String deletecartbyId(int id) {
		String microServiceName="Cart-MICROSERVICE";
		RestTemplate template=new RestTemplate();
		String microServiceUrl=getBaseUrl(microServiceName);
		microServiceUrl=microServiceUrl+"/deletebyid?id="+id;
		String returnMessage=template.getForObject(microServiceUrl, String.class);
		return returnMessage;
	}
	
	
}
