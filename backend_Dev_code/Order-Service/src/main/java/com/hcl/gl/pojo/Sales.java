package com.hcl.gl.pojo;
import java.time.LocalDate;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.ManyToAny;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Sales {

	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	private int id;
	private int usersid;
	private double totalamount;
    private LocalDate date;
    
    
	public Sales(int usersid, double totalamount, LocalDate date) {
		super();        //2024-03-17  //03/17/2023
		this.usersid = usersid;
		this.totalamount = totalamount;
		this.date = date;
	}


	public Sales(int usersid, double totalamount) {
		super();
		this.usersid = usersid;
		this.totalamount = totalamount;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public int getUsersid() {
		return usersid;
	}


	public void setUsersid(int usersid) {
		this.usersid = usersid;
	}


	public double getTotalamount() {
		return totalamount;
	}


	public void setTotalamount(double totalamount) {
		this.totalamount = totalamount;
	}


	public LocalDate getDate() {
		return date;
	}


	public void setDate(LocalDate date) {
		this.date = date;
	}


	public Sales(int id, int usersid, double totalamount, LocalDate date) {
		super();
		this.id = id;
		this.usersid = usersid;
		this.totalamount = totalamount;
		this.date = date;
	}


	public Sales() {
		super();
	}
	
}	
