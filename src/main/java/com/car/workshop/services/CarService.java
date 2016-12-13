package com.car.workshop.services;


import com.car.workshop.models.CarModel;
import com.car.workshop.repositories.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService {
    @Autowired
    private CarRepository carRepository;

    public void saveCar(CarModel carModel){
        carRepository.saveAndFlush(carModel);
    }

    public CarModel readCar(Long id){
        return (CarModel) carRepository.getOne(id);
    }

    public List<CarModel> readAllCars(){
        return(List<CarModel>) carRepository.findAll();
    }

    public void updateCar(Long id, CarModel carModel){
        CarModel editCar = carRepository.findOne(id);
        editCar.setCarBrand(carModel.getCarBrand());
        editCar.setModel(carModel.getModel());
        editCar.setModelYear(carModel.getModelYear());
        carRepository.saveAndFlush(editCar);
    }

    public void deleteCar(Long id){
        carRepository.delete(id);
    }
}
