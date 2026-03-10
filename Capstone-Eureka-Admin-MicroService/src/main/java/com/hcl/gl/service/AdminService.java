package com.hcl.gl.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.hcl.gl.pojo.Admin;
import com.hcl.gl.repo.AdminRepo;

@Service
public class AdminService {
	
	@Autowired
	AdminRepo repo;
	
	public String insertAdmin(Admin admin) {
		repo.save(admin);
		return "Added Sucessfully";
	}
	
	public List<Admin> getAllAdmins(){
		return repo.findAll();
	}

}
