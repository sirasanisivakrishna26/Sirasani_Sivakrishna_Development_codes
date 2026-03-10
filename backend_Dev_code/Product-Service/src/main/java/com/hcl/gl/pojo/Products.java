package com.hcl.gl.pojo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Products {

	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	private int id;
	private String name;
	private double price;
	private String category;
	private int stocks;
	private String image;
	
	
	public Products(String name, double price, String category, int stocks,String image) {
		super();
		this.name = name;
		this.price = price;
		this.category = category;
		this.stocks = stocks;
		this.image=image;
	}
	
	


	public Products(int id, String name, double price, String category, int stocks, String image) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.category = category;
		this.stocks = stocks;
		this.image = image;
	}




	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public double getPrice() {
		return price;
	}


	public void setPrice(double price) {
		this.price = price;
	}


	public String getCategory() {
		return category;
	}


	public void setCategory(String category) {
		this.category = category;
	}


	public int getStocks() {
		return stocks;
	}


	public void setStocks(int stocks) {
		this.stocks = stocks;
	}


	public String getImage() {
		return image;
	}


	public void setImage(String image) {
		this.image = image;
	}


	public Products() {
		super();
	}
	
	
	
	
}
