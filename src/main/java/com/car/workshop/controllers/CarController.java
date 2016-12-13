package com.car.workshop.controllers;

import com.car.workshop.models.CarModel;
import com.car.workshop.services.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CarController {

    @Autowired
    private CarService carService;

    @CrossOrigin
    @RequestMapping(value = "/cars/", method = RequestMethod.POST)
    public void createCar(@RequestBody CarModel carModel){
        carService.saveCar(carModel);
    }

    @CrossOrigin
    @RequestMapping(value = "/cars/{id}", method = RequestMethod.GET)
    public ResponseEntity<CarModel> readCar(@PathVariable Long id){
        return new ResponseEntity<CarModel>(carService.readCar(id), HttpStatus.OK);

    }
    @CrossOrigin
    @RequestMapping(value = "/cars/{id}", method = RequestMethod.PUT)
    public void updateCar(@PathVariable Long id, @RequestBody CarModel carModel){
        carService.updateCar(id, carModel);
    }

    @CrossOrigin
    @RequestMapping(value = "/cars/{id}", method = RequestMethod.DELETE)
    public void deleteCar(@PathVariable Long id){
        carService.deleteCar(id);

    }
    @CrossOrigin
    @RequestMapping(value = "/cars/", method = RequestMethod.GET)
    public ResponseEntity<List<CarModel>> readAllCars(){
        return new ResponseEntity<List<CarModel>>(carService.readAllCars(), HttpStatus.OK);
    }
}
