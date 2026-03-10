package com.hcl.gl.pojo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;


@RestController
public class Controller {

	
	@Autowired
	CouponsService couponsService;
	
	
	 @GetMapping("/addcoupon")  // 
		@ResponseBody
		 //insert data into cart
		public String addProduct(String disname, int usersId, double discountAmount) {
//			Users users = usersService.getById(usersid);
			Coupons coupons= new Coupons(disname, usersId, discountAmount);
				couponsService.addCoupon(coupons);
			return "Coupon added Successuly";	
		}
	 
	 @GetMapping("/getcoupons")
	 //get data from cart
	 public String getall() throws JsonProcessingException{
			List<Coupons> carts= couponsService.getALLDiscountCoupons();
			ObjectMapper objectMapper=new ObjectMapper();
			String message=objectMapper.writeValueAsString(carts);
			return message;
			
	 }
	 
	 @GetMapping("/getusersbyid")
	 public String getusersId(int usersId) throws JsonProcessingException {
		 List<Coupons> carts= couponsService.selectByName(usersId);
			ObjectMapper objectMapper=new ObjectMapper();
			String message=objectMapper.writeValueAsString(carts);
			return message;
			
		 
	 }
	 
}
