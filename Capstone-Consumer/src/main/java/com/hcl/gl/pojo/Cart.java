package com.hcl.gl.pojo;



import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Cart {
	
	
	private int id;
	private String name;
	private String category;
	private double price;
	private String userName;
	private double totalAmount;
	private int quantities;
	public Cart(String name, String category, double price, String userName, double totalAmount,int quantities) {
		super();
		this.name = name;
		this.category = category;
		this.price = price;
		this.userName = userName;
		this.totalAmount = totalAmount;
		this.quantities=quantities;
	}
	
	
	

}
