package com.hcl.gl.pojo;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

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
public class Users {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	private int id;
	private String username;
	private String emial;
	private String password;
	@OneToMany(mappedBy="users",fetch=FetchType.EAGER)
	@JsonIgnoreProperties("users")
	private  List<Cart> cart;
	
	public Users(String username, String emial, String password) {
		super();
		this.username = username;
		this.emial = emial;
		this.password = password;
	}

	public  Users(int id, String username, String emial, String password) {
		this.id = id;
		this.username = username;
		this.emial = emial;
		this.password = password;
		
	}

	public Users() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmial() {
		return emial;
	}

	public void setEmial(String emial) {
		this.emial = emial;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<Cart> getCart() {
		return cart;
	}

	public void setCart(List<Cart> cart) {
		this.cart = cart;
	}
	
	
	
	
	
	

	
}
