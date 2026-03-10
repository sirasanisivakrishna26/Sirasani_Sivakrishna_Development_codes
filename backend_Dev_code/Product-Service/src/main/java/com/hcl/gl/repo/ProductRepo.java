package com.hcl.gl.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hcl.gl.pojo.Products;

public interface ProductRepo extends JpaRepository<Products, Integer>{

}
