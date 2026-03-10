package com.hcl.gl.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.loadbalancer.LoadBalancerClient;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@CrossOrigin(originPatterns = "http://localhost:3000")
@RestController
public class ProductController {

	@Autowired
	private LoadBalancerClient loadBalancerClient;

	// function that converts microservice name to url
	private String getBaseUrl(String microServiceName) {
		ServiceInstance instance = loadBalancerClient.choose(microServiceName);
		System.out.println("micro service url:" + instance.getUri().toString());
		return instance.getUri().toString();
	}

//	@CrossOrigin(originPatterns="http://localhost:3000")
	@GetMapping("/addProducts")
	public String addProducts(String name, double price, String category, int stocks, String image) {
		String microServiceName = "PRODUCT-MICROSERVICE";
		RestTemplate template = new RestTemplate();
		String microServiceUrl = getBaseUrl(microServiceName);
		microServiceUrl = microServiceUrl + "/inserProducts?name=" + name + "&price=" + price + "&category=" + category
				+ "&stocks=" + stocks + "&image=" + image;
		String returnMessage = template.getForObject(microServiceUrl, String.class);
		return returnMessage;
	}

	@CrossOrigin(originPatterns = "http://localhost:3000")
	@GetMapping("/getAllProducts")
	public String getProducts() {
		String microServiceName = "PRODUCT-MICROSERVICE";
		RestTemplate template = new RestTemplate();
		String microServiceUrl = getBaseUrl(microServiceName);
		microServiceUrl = microServiceUrl + "/getAllProducts";
		String returnMessage = template.getForObject(microServiceUrl, String.class);
		return returnMessage;
	}

	@CrossOrigin(originPatterns = "http://localhost:3000")
	@GetMapping("/updateProducts")
	public String updateProducts(int id, String name, double price, String category, int stocks, String image) {
		String microServiceName = "PRODUCT-MICROSERVICE";
		RestTemplate template = new RestTemplate();
		String microServiceUrl = getBaseUrl(microServiceName);
		microServiceUrl = microServiceUrl + "/updatationofProduct?id=" + id + "&name=" + name + "&price=" + price
				+ "&category=" + category + "&stocks=" + stocks + "&image=" + image;
		String returnMessage = template.getForObject(microServiceUrl, String.class);
		return returnMessage;
	}

	@CrossOrigin(originPatterns = "http://localhost:3000")
	@GetMapping("/deleteProductsById")
	public String deleteById(int id) {
		String microServiceName = "PRODUCT-MICROSERVICE";
		RestTemplate template = new RestTemplate();
		String microServiceUrl = getBaseUrl(microServiceName);
		microServiceUrl = microServiceUrl + "/deleteproductById?id=" + id;
		String returnMessage = template.getForObject(microServiceUrl, String.class);
		return returnMessage;
	}

	@CrossOrigin(originPatterns = "http://localhost:3000")
	@GetMapping("/sortProductsByPrice")
	public String sortByPrice() {
		String microServiceName = "PRODUCT-MICROSERVICE";
		RestTemplate template = new RestTemplate();
		String microServiceUrl = getBaseUrl(microServiceName);
		microServiceUrl = microServiceUrl + "/productsortbyprice";
		String returnMessage = template.getForObject(microServiceUrl, String.class);
		return returnMessage;
	}

	@CrossOrigin(originPatterns = "http://localhost:3000")
	@GetMapping("/sortProductsByName")
	public String sortByName() {

		String microServiceName = "PRODUCT-MICROSERVICE";
		RestTemplate template = new RestTemplate();
		String microServiceUrl = getBaseUrl(microServiceName);
		microServiceUrl = microServiceUrl + "/productsortbyname";
		String returnMessage = template.getForObject(microServiceUrl, String.class);
		return returnMessage;
	}

	@CrossOrigin(originPatterns = "http://localhost:3000")
	@GetMapping("/sortProductsByCategory")
	public String sortByCategory() {
		String microServiceName = "PRODUCT-MICROSERVICE";
		RestTemplate template = new RestTemplate();
		String microServiceUrl = getBaseUrl(microServiceName);
		microServiceUrl = microServiceUrl + "/productsortbycategory";
		String returnMessage = template.getForObject(microServiceUrl, String.class);
		return returnMessage;
	}

	// searchByName

	@CrossOrigin(originPatterns = "http://localhost:3000")
	@GetMapping("/searchbyname")
	public String seachbyname(String name) {
		String microServiceName = "PRODUCT-MICROSERVICE";
		RestTemplate template = new RestTemplate();
		String microServiceUrl = getBaseUrl(microServiceName);
		microServiceUrl = microServiceUrl + "/searchByName?name=" + name;
		String returnMessage = template.getForObject(microServiceUrl, String.class);
		return returnMessage;
	}

}
