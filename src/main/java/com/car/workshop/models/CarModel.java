package com.car.workshop.models;




import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@SuppressWarnings("serial")
@Entity
public class CarModel implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Long id;
    private String carBrand;
    private String model;
    private Integer modelYear;

    @ManyToOne
    @JoinColumn(name = "owner")
    private CustomerModel owner;


    @OneToMany(mappedBy = "car", cascade = CascadeType.ALL)
    private List<VehicleServiceModel> listOfServices;

    public CarModel() {

    }

    public List<VehicleServiceModel> getListOfServices() {
        return listOfServices;
    }

    public void setListOfServices(List<VehicleServiceModel> listOfServices) {
        this.listOfServices = listOfServices;
    }

    public Long getOwner() {
        return owner.getId();
    }

    public void setOwner(CustomerModel owner) {
        this.owner = owner;
    }

    public void setCarBrand(String carBrand) {
        this.carBrand = carBrand;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public void setModelYear(Integer modelYear) {
        this.modelYear = modelYear;
    }

    public Integer getModelYear() {
        return modelYear;
    }

    public String getModel() {
        return model;
    }

    public String getCarBrand() {
        return carBrand;
    }

    public Long getId() {
        return id;
    }
}
