package com.hcl.gl.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;


import com.hcl.gl.pojo.Users;
import com.hcl.gl.repo.UsersRepo;

@Service
public class UsersService {
	
	@Autowired
	UsersRepo repo;
	
	public String insertUsers(Users users) {
		repo.save(users);
		return "Added Sucessfully";
	}
	
	public List<Users> getAllUsers(){
		return repo.findAll();
	}
	
	public List<Users> getUsersByName(String username){
		Users u1=new Users();
		u1.setUsername(username);
		ExampleMatcher exampleMatcher = ExampleMatcher.matching().withMatcher("username", ExampleMatcher.GenericPropertyMatchers.contains()).withIgnorePaths("password", "email","id");
		Example<Users> example = Example.of(u1, exampleMatcher);
		return repo.findAll(example);
		
	}
	
	
	
	public void updateUsers(Users users) {
		repo.save(users);
	}
		
	//This function is used to Delete the data into store
	public void deleteUsersById(int id) {
		repo.deleteById(id);
	}
	
	
	
	//This function is used to sort by Id, Name & Price in store
	public List<Users> sortByNameandemail(Direction direction, String columnname) {
		return repo.findAll(Sort.by(direction, columnname));
	}
	
	//This function is used to Find the product ById the data into store
	public Optional<Users> findUsersById(int id){
		return repo.findById(id);
		
		
	}
	

	//This is for delete all the procts in the store
	public void deleteAllUsers() {
		repo.deleteAll();
	}
	
	

}
