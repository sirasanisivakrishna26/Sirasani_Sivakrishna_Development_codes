package com.hcl.gl.pojo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.NonFinal;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Coupons {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long discountId;
	private String discountCouponName;
	private int usersId;
	private double discountAmount;
	
	public Coupons(String discountCouponName, int usersId, double discountAmount) {
		super();
		this.discountCouponName = discountCouponName;
		this.usersId = usersId;
		this.discountAmount = discountAmount;
	}

	public long getDiscountId() {
		return discountId;
	}

	public void setDiscountId(long discountId) {
		this.discountId = discountId;
	}

	public String getDiscountCouponName() {
		return discountCouponName;
	}

	public void setDiscountCouponName(String discountCouponName) {
		this.discountCouponName = discountCouponName;
	}

	public int getUsersId() {
		return usersId;
	}

	public void setUsersId(int usersId) {
		this.usersId = usersId;
	}

	public double getDiscountAmount() {
		return discountAmount;
	}

	public void setDiscountAmount(double discountAmount) {
		this.discountAmount = discountAmount;
	}

	public Coupons() {
		super();
	}

	public Coupons(long discountId, String discountCouponName, int usersId, double discountAmount) {
		super();
		this.discountId = discountId;
		this.discountCouponName = discountCouponName;
		this.usersId = usersId;
		this.discountAmount = discountAmount;
	}
	
	
	
	
}
