package com.hcl.gl.pojo;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.gl.pojo.Sales;


@Service
public class OrdersService {
	
	@Autowired
	OrdersRepo repo;
	
	
	public String insert(Sales orders) {
		repo.save(orders);
		return "Orders Placed";
		
	}
	
	public List<Sales> getAll(){
		return repo.findAll();
	}
	
	public String delete() {
		repo.deleteAll();
		return "Order Cancelled";
	}
  
  public List<Sales> getbydates(LocalDate d1, LocalDate d2){
	return repo.findBydateBetween(d1, d2);
	  
  }
//  
//  public double getamount() {
//	  return repo.findTotalAmount();
//	  
//  }
  
}
