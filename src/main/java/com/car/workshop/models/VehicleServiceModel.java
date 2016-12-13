package com.car.workshop.models;


import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;


@SuppressWarnings("serial")
@Entity
public class VehicleServiceModel implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Date date;
    private String description;

    @ManyToOne
    @JoinColumn(name = "car")

    private CarModel car;

    public VehicleServiceModel(){

    }


    public Long getCar() {
        return car.getId();
    }

    public void setCar(CarModel car) {
        this.car = car;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public Date  getDate() {
        return date;
    }

    public String getDescription() {
        return description;
    }
}
