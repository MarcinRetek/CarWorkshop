package com.car.workshop.models;


import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@SuppressWarnings("serial")
@Entity
public class CustomerModel implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Long id;
    private String firstName;
    private String lastName;
    private Integer age;

    @OneToMany(mappedBy = "owner", cascade = CascadeType.ALL)
    private List<CarModel> listOfCars;


    public CustomerModel() {

    }

    public List<CarModel> getListOfCars() {
        return listOfCars;
    }

    public void setListOfCars(List<CarModel> listOfCars) {
        this.listOfCars = listOfCars;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public Integer getAge() {
        return age;
    }
}
