package com.car.workshop.repositories;


import com.car.workshop.models.CustomerModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<CustomerModel, Long>{
}
