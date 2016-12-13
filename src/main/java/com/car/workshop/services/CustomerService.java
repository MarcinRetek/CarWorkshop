package com.car.workshop.services;


import com.car.workshop.models.CustomerModel;
import com.car.workshop.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    public void saveCustomer(CustomerModel customerModel){
        customerRepository.saveAndFlush(customerModel);
    }

    public CustomerModel readCustomer(Long id){
        return (CustomerModel) customerRepository.getOne(id);
    }

    public List<CustomerModel> readAllCustomers(){
        return(List<CustomerModel>) customerRepository.findAll();
}
    public void updateCustomer(Long id, CustomerModel customerModel){
        CustomerModel editCustomer = customerRepository.findOne(id);
        editCustomer.setFirstName(customerModel.getFirstName());
        editCustomer.setLastName(customerModel.getLastName());
        editCustomer.setAge(customerModel.getAge());
        customerRepository.saveAndFlush(editCustomer);
    }

    public void deleteCustomer(Long id){
        customerRepository.delete(id);
    }
}
