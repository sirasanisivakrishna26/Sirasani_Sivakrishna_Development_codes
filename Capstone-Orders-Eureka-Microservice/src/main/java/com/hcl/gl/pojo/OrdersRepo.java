package com.hcl.gl.pojo;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.hcl.gl.pojo.Sales;

public interface OrdersRepo extends JpaRepository<Sales, Integer>{
	
	List<Sales> findBydateBetween(LocalDate d1, LocalDate d2); //
	//@Query(value="select sum(totalamount) from sales",nativeQuery = true)
	//Double findTotalAmount();

	//@Query( value = "some sql query ...", nativeQuery = true)

}

//ahdbvsdshdsvhadjba22