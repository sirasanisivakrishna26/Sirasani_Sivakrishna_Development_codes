package com.hcl.gl.pojo;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;



@RestController
public class OrderController {
	
	@Autowired
	OrdersService ordersService;
	
	
	
	@GetMapping("/insertOrder")
	public String addOrder(int usersid,double totalamount,String date) {
		DateTimeFormatter formatter=DateTimeFormatter.ofPattern("yyyy-M-dd");
		formatter=formatter.withLocale(Locale.ENGLISH);
		LocalDate ld=LocalDate.parse(date, formatter);
		Sales orders=new Sales(usersid, totalamount, ld);
		ordersService.insert(orders);
		return "Orders Inserted";
	}
	
	
	@GetMapping("/getOrders")
	public String getOrder() throws JsonProcessingException {
		List<Sales> orders= ordersService.getAll();
		  Sales s1=new Sales();
		  
		for(Sales temp:orders) { 
			DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
	         String sales=temp.getDate().format(formatter);
	         double totalamount=temp.getTotalamount();
	         int usersid=temp.getUsersid();
	         int id=temp.getId();
	         s1.setTotalamount(totalamount);
	         s1.setUsersid(usersid);
//	         Sales s1=new Sales(usersid, totalamount);
		}
		
		ObjectMapper objectMapper=new ObjectMapper();
		objectMapper.registerModule(new JavaTimeModule());
		
		
//		Double sum = ordersService.getamount();
//		System.out.println("sum is ================"+sum);
 		String message=objectMapper.writeValueAsString(orders);
 		System.out.println("usersis"+s1.getUsersid());
 		
// 		  Sales s2=new Sales();
// 			System.out.println(" S2===usersis"+s2.getUsersid());
 		
 		return message;
		
		
	}
	
   @GetMapping("/")
	public Double getTotalOrdersum() {
		List<Sales> orders= ordersService.getAll();
		Double totalOrdersSum = orders.stream().mapToDouble(sales -> sales.getTotalamount()).sum();
		return totalOrdersSum;
	}


	@GetMapping("/Bills")
	public List<Sales> gettodaybills(String date1,String date2){
		DateTimeFormatter formatter=DateTimeFormatter.ofPattern("yyyy-M-dd");  //2022-04-17  03-17-2023
		
		formatter=formatter.withLocale(Locale.ENGLISH);
		LocalDate ld1=LocalDate.parse(date1, formatter);
		DateTimeFormatter formatter1=DateTimeFormatter.ofPattern("yyyy-M-dd");
		formatter1=formatter.withLocale(Locale.ENGLISH);
		LocalDate ld2=LocalDate.parse(date2,formatter);
		
		return ordersService.getbydates(ld1, ld2);
		
	}

//	@GetMapping("/monthly")
//	public List<Sales> getMonthlyBills(){
//		DateTimeFormatter formatters=DateTimeFormatter.ofPattern("yyyy-M-dd");
//		  String date1="2023-02-02";
//		  String date2="2023-03-02";
//		formatters=formatters.withLocale(Locale.ENGLISH);
//		LocalDate d1=LocalDate.parse(date1,formatters);
//		LocalDate d2=LocalDate.parse(date2,formatters);
//		List<Sales> getallOrders=ordersService.getbydates(d1, d2);
//		return getallOrders;
//	}
	
	
//	public double getamount() {
//		return ordersService.getamount();
//		
//	}
	
}