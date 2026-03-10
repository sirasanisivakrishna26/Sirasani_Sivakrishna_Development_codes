package com.hcl.gl;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;


@EnableEurekaClient
@SpringBootApplication
public class CapstoneEurekaProductMicroServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CapstoneEurekaProductMicroServiceApplication.class, args);
		System.out.println("Its PRoducts");
		
	}

}