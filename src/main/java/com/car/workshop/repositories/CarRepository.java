package com.car.workshop.repositories;


import com.car.workshop.models.CarModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<CarModel, Long>{
}
