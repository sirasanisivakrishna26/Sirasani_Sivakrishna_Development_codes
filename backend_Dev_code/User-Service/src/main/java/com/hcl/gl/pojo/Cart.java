package com.hcl.gl.pojo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Cart {
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	private int id;
	private String name;
	private String category;
	private double price;
//	private String username;
	private double totalamount;
	private int quantities;
	@ManyToOne
	@JsonIgnoreProperties("cart")
	private Users users;
	
	public Cart(String name, String category, double price, double totalamount, int quantities, Users users) {
		super();
		this.name = name;
		this.category = category;
		this.price = price;
		this.totalamount = totalamount;
		this.quantities = quantities;
		this.users = users;
	}
	

	

}
