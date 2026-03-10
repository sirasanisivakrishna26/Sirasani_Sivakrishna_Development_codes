package com.hcl.gl.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hcl.gl.pojo.Admin;
import com.hcl.gl.service.AdminService;

@RestController
public class AdminController {
	
	@Autowired
	AdminService adminService;
	
	@CrossOrigin(originPatterns="http://localhost:3000")
	@GetMapping("/getAdmins")
	public String  getAdmins() throws JsonProcessingException{
		
		List<Admin> admins=adminService.getAllAdmins();
		ObjectMapper objectMapper=new ObjectMapper();
		
		String messge=objectMapper.writeValueAsString(admins);
		return messge;
		
	}
	@CrossOrigin(originPatterns="http://localhost:3000")
	@GetMapping("/insertAdmins")
	public String insertAdmin(String username,String email,String password) {
		Admin admin=new Admin();
		admin.setUsername(username);
		admin.setPassword(password);
		admin.setEmial(email);
		adminService.insertAdmin(admin);
		return "Admin Inserted";
		
		
	}
	

}
