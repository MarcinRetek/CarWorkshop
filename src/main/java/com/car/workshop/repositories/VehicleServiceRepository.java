package com.car.workshop.repositories;


import com.car.workshop.models.VehicleServiceModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleServiceRepository extends JpaRepository<VehicleServiceModel, Long>{
}
