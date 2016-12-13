package com.car.workshop.controllers;

import com.car.workshop.models.CustomerModel;
import com.car.workshop.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@RestController
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @CrossOrigin
    @RequestMapping(value = "/customers/", method = RequestMethod.POST)
    public void createCustomer(@RequestBody CustomerModel customerModel){
        customerService.saveCustomer(customerModel);
    }
    @CrossOrigin
    @RequestMapping(value = "/customers/{id}", method = RequestMethod.GET)
    public ResponseEntity<CustomerModel> readCustomer(@PathVariable Long id){
        return new ResponseEntity<CustomerModel>(customerService.readCustomer(id), HttpStatus.OK);

    }
    @CrossOrigin
    @RequestMapping(value = "/customers/{id}", method = RequestMethod.PUT)
    public void updateCustomer(@PathVariable Long id, @RequestBody CustomerModel customerModel){
        customerService.updateCustomer(id, customerModel);

    }
    @CrossOrigin
    @RequestMapping(value = "/customers/{id}", method = RequestMethod.DELETE)
    public void deleteCustomer(@PathVariable Long id){
        customerService.deleteCustomer(id);

    }
    @CrossOrigin
    @RequestMapping(value = "/customers/", method = RequestMethod.GET)
    public ResponseEntity<List<CustomerModel>> readAllCustomers(){
        return new ResponseEntity<List<CustomerModel>>(customerService.readAllCustomers(), HttpStatus.OK);
    }

}

