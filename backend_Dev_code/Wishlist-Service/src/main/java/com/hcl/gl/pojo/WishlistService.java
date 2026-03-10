package com.hcl.gl.pojo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import lombok.Setter;

@Service
public class WishlistService {
	

	@Autowired
	WishlistRepo repo;
	
	public void addintowishlist(Wishlist wishlist) {
		repo.save(wishlist);
	}
	
	public List<Wishlist> getAll(){
		return	repo.findAll(); 
	}
	
	public void deletebyid(int id) {
		repo.deleteById(id);
	}

}
