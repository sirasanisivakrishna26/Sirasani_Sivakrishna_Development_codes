package com.hcl.gl.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.gl.pojo.Users;
import com.hcl.gl.service.UsersService;

@RestController
public class UsersController {

	
	@Autowired
	UsersService usersService;
	
	@CrossOrigin(originPatterns="http://localhost:3000")
	@GetMapping("/insertUsers")
	public String insertUsers(String username,String email,String password) {
		Users users=new Users(username,email,password);
		usersService.insertUsers(users);
		return "Users Inserted";
	}
	
	@CrossOrigin(originPatterns="http://localhost:3000")
	@GetMapping("/getAllUsers")
	public List<Users> getAllUsers(){
		return usersService.getAllUsers();
	}
	
	@GetMapping("/updationofUsers")//Upadting Product
	public String updationofUsers(int id, String username,String email,String password) {
			Users u1 = new Users(id, username, email, password); 		
			usersService.updateUsers(u1);; 		
			return "Users updated Successfully.....";
	}
	
	//Deleting
	@GetMapping("/deleteUsersById")
	public String deleteUsersById(int id) {

			usersService.deleteUsersById(id);
			return "deletion Sucessful"; 			
			
	}
		
	
	
	
	
	

	
	
}
