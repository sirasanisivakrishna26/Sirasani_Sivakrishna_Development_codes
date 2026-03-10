package com.hcl.gl.controller;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.loadbalancer.LoadBalancerClient;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;




@RestController
public class AdminConsumerController {

	
	@Autowired
	private LoadBalancerClient loadBalancerClient;
	
	//function that converts microservice name to url
	private String getBaseUrl(String microServiceName) {
		ServiceInstance instance=loadBalancerClient.choose(microServiceName);
		System.out.println("micro service url:"+instance.getUri().toString());
		return instance.getUri().toString();
	}
	
	@CrossOrigin(originPatterns="http://localhost:3000")
	@GetMapping("/addAllAdmin")  //https://localhost:8085/addAllAdmin
	public String viewAllCourse(String username,String email,String password) {
		String microServiceName="ADMIN-MICROSERVICE";
		RestTemplate template=new RestTemplate();
		String microServiceUrl=getBaseUrl(microServiceName);
		microServiceUrl=microServiceUrl+"/insertAdmins?username="+username+"&email="+email+"&password="+password;
		String returnMessage=template.getForObject(microServiceUrl, String.class);
		return returnMessage;
	}
	
	
	@CrossOrigin(originPatterns="http://localhost:3000")
	@GetMapping("/getAdmins")
	public String addCourse() {
		//object creation
				String microServiceName="ADMIN-MICROSERVICE";
				RestTemplate template=new RestTemplate();
				String microServiceUrl=getBaseUrl(microServiceName);
				microServiceUrl=microServiceUrl+"/getAdmins";
				String returnMessage=template.getForObject(microServiceUrl, String.class);
				return returnMessage;
	}
	
	@CrossOrigin(originPatterns="http://localhost:3000")
	@GetMapping("/addAllUsers")
	public String viewAllUsers(int id,String username,String email,String password) {
		String microServiceName="USERS-MICROSERVICE";
		RestTemplate template=new RestTemplate();
		String microServiceUrl=getBaseUrl(microServiceName);
		microServiceUrl=microServiceUrl+"/insertUsers?id="+id+"&username="+username+"&email="+email+"&password"+password;
		String returnMessage=template.getForObject(microServiceUrl, String.class);
		return returnMessage;
	}
	
	
	@CrossOrigin(originPatterns="http://localhost:3000")
	@GetMapping("/getAllUsers")
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
	@GetMapping("/updateUsers")
	public String updateUsers(int id,String username,String email,String password) {
		String microServiceName="USERS-MICROSERVICE";
		RestTemplate template=new RestTemplate();
		String microServiceUrl=getBaseUrl(microServiceName);
		microServiceUrl=microServiceUrl+"/updationofUsers?id="+id+"&username="+username+"&email="+email+"&password="+password;
		String returnMessage=template.getForObject(microServiceUrl, String.class);
		return returnMessage;
	}
	@CrossOrigin(originPatterns="http://localhost:3000")
	@GetMapping("/deleteUsersById")
	public String deleteById(int id) {
		String microServiceName="USERS-MICROSERVICE";
		RestTemplate template=new RestTemplate();
		String microServiceUrl=getBaseUrl(microServiceName);
		microServiceUrl=microServiceUrl+"/deleteUsersById?id="+id;
		String returnMessage=template.getForObject(microServiceUrl, String.class);
		return returnMessage;
	}
	
	@CrossOrigin(originPatterns="http://localhost:3000")
	@GetMapping("/addcoupons")
	public String addcoupons(String disname, int usersId, double discountAmount) {
		String microServiceName="Coupons-MICROSERVICE";
		RestTemplate template=new RestTemplate();
		String microServiceUrl=getBaseUrl(microServiceName);
		microServiceUrl=microServiceUrl+"/addcoupon?disname="+disname+"&usersId="+usersId+"&discountAmount="+discountAmount;
		String returnMessage=template.getForObject(microServiceUrl, String.class);
		return returnMessage;
	}
	
	
	@CrossOrigin(originPatterns="http://localhost:3000")
	@GetMapping("/getAllCoupons")
	public String getCoupons() {
		//object creation
				String microServiceName="Coupons-MICROSERVICE";
				RestTemplate template=new RestTemplate();
				String microServiceUrl=getBaseUrl(microServiceName);
				microServiceUrl=microServiceUrl+"/getcoupons";
				String returnMessage=template.getForObject(microServiceUrl, String.class);
				return returnMessage;
	}

	
	@CrossOrigin(originPatterns="http://localhost:3000")
	@GetMapping("/getbyuserid")
	public String getusersId(int usersId) {
		String microServiceName="Coupons-MICROSERVICE";
		RestTemplate template=new RestTemplate();
		String microServiceUrl=getBaseUrl(microServiceName);
		microServiceUrl=microServiceUrl+"/getusersbyid?usersId="+usersId;
		String returnMessage=template.getForObject(microServiceUrl, String.class);
		return returnMessage;
	}
	

	
	
	@CrossOrigin(originPatterns="http://localhost:3000")
	@GetMapping("/addOrders")
	public String addOrders(int usersid, double totalamount, String date) {
		
		DateTimeFormatter formatter=DateTimeFormatter.ofPattern("yyyy-M-dd");
		formatter=formatter.withLocale(Locale.ENGLISH);
		LocalDate ld=LocalDate.parse(date, formatter);
		
		String microServiceName="Sales-MICROSERVICE";
		RestTemplate template=new RestTemplate();
		String microServiceUrl=getBaseUrl(microServiceName);
		microServiceUrl=microServiceUrl+"/insertOrder?usersid="+usersid+"&totalamount="+totalamount+"&date="+ld;
		String returnMessage=template.getForObject(microServiceUrl, String.class);
		return returnMessage;
	}
	
	@CrossOrigin(originPatterns="http://localhost:3000")
	@GetMapping("/getAllOders")   //getAllOders
	public String getOrders() {
		//object creation
				String microServiceName="Sales-MICROSERVICE";
				RestTemplate template=new RestTemplate();
				String microServiceUrl=getBaseUrl(microServiceName);
	      		microServiceUrl=microServiceUrl+"/getOrders";
				String returnMessage=template.getForObject(microServiceUrl, String.class);
				return returnMessage;
	}

	@CrossOrigin(originPatterns="http://localhost:3000")
	@GetMapping("/deleteAllcarts")
	public String deleteallcart() {
		String microServiceName="Cart-MICROSERVICE";
		RestTemplate template=new RestTemplate();
		String microServiceUrl=getBaseUrl(microServiceName);
		microServiceUrl=microServiceUrl+"/deleteall";
		String returnMessage=template.getForObject(microServiceUrl, String.class);
		return returnMessage;
	}
	
	
	@CrossOrigin(originPatterns="http://localhost:3000")
	 @GetMapping("/bills")
     public String getBillByToday(String date1, String date2) {
	
//		//2022-04-17
//		 DateTimeFormatter formatter=DateTimeFormatter.ofPattern("yyyy-M-dd");
//		formatter=formatter.withLocale(Locale.ENGLISH);
//		
//		LocalDate ld1=LocalDate.parse(date1, formatter);
//		DateTimeFormatter formatter1=DateTimeFormatter.ofPattern("yyyy-M-dd");
//			formatter1=formatter.withLocale(Locale.ENGLISH); 
//         	LocalDate ld2=LocalDate.parse(date2,formatter);
		    String microServiceName="Sales-microservice";
			RestTemplate template=new RestTemplate();
			String microServiceUrl=getBaseUrl(microServiceName);
			microServiceUrl=microServiceUrl+"/Bills?date1="+date1+"&date2="+date2;
			String returnMessage=template.getForObject(microServiceUrl, String.class);
			
		
		return returnMessage;
     }    
	
	
	@CrossOrigin(originPatterns="http://localhost:3000")
	
	@GetMapping("/sendmail")
	public String sendmail(String email) {
		//object creation
				String microServiceName="Products-MICROSERVICE";
				RestTemplate template=new RestTemplate();
				String microServiceUrl=getBaseUrl(microServiceName);
	      		microServiceUrl=microServiceUrl+"/sendeamil";
				String returnMessage=template.getForObject(microServiceUrl, String.class);
				return returnMessage;
	}
	
	
	
}
