package com.hcl.gl.pojo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;

@Service
public class CouponsService {
	
	@Autowired
	CouponsRepo repo;
	
	
	public void addCoupon(Coupons coupons) {
		repo.save(coupons);
	}
	
	

	public List<Coupons> getALLDiscountCoupons() {

		return repo.findAll();
	}

	
	public String deleteDiscountCouponById(int id) {
		repo.deleteById(id);
		return "Coupon deleted successfully";
	}

	
	public Coupons getById(int id) {
		Optional<Coupons> coupons = repo.findById(id);
		if( coupons != null ) {
			return coupons.get();
		}
		else {
			return null;
		}
	}
	
//	public Coupons getById(int id) {
//		Optional<Coupons> coupons = repo.findById(id);
//		if( coupons != null ) {
//			return coupons.get();
//		}
//		else {
//			return null;
//		}
//	}



	public List<Coupons> selectByName(String name){
		//select * from Product where productname = "given value"
		Coupons discountCouponName = new Coupons();
		discountCouponName.setDiscountCouponName(name);
		//where
		ExampleMatcher exampleMatcher = ExampleMatcher.matching().withMatcher("discountCouponName", ExampleMatcher.GenericPropertyMatchers.contains()).withIgnorePaths("discountId", "userId", "discountAmount");
		
		//sample and where
		Example<Coupons> example = Example.of(discountCouponName, exampleMatcher);
		
		return repo.findAll(example);
	}

	
	public List<Coupons> selectByName(int usersId){
		//select * from Product where productname = "given value"
		Coupons  usersid = new Coupons();
		usersid.setUsersId(usersId);
		//where
		ExampleMatcher exampleMatcher = ExampleMatcher.matching().withMatcher("usersId", ExampleMatcher.GenericPropertyMatchers.contains()).withIgnorePaths("discountId", "discountCouponName", "discountAmount");
		
		//sample and where
		Example<Coupons> example = Example.of(usersid, exampleMatcher);
		
		return repo.findAll(example);
	}


}
