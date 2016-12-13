package com.car.workshop.services;


import com.car.workshop.models.VehicleServiceModel;
import com.car.workshop.repositories.VehicleServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class VehicleServiceService {
    @Autowired
    private VehicleServiceRepository vehicleServiceRepository;

    public void saveVehicleService(VehicleServiceModel vehicleServiceModel){
        vehicleServiceRepository.saveAndFlush(vehicleServiceModel);
    }

    public VehicleServiceModel readVehicleService(Long id){
        return (VehicleServiceModel) vehicleServiceRepository.getOne(id);
    }

    public List<VehicleServiceModel> readAllServices(){
        return(List<VehicleServiceModel>) vehicleServiceRepository.findAll();
    }

    public void updateVehicleService(Long id, VehicleServiceModel vehicleServiceModel){
       VehicleServiceModel editService = vehicleServiceRepository.findOne(id);
        editService.setDate(vehicleServiceModel.getDate());
        editService.setDescription(vehicleServiceModel.getDescription());
        vehicleServiceRepository.saveAndFlush(editService);
    }

    public void deleteVehicleService(Long id){
        vehicleServiceRepository.delete(id);
    }
}
