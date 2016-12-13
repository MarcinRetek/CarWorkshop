package com.car.workshop.controllers;

import com.car.workshop.models.VehicleServiceModel;
import com.car.workshop.services.VehicleServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class VehicleServiceController {
    @Autowired
    private VehicleServiceService vehicleServiceService;

    @CrossOrigin
    @RequestMapping(value = "/vehicleservices/", method = RequestMethod.POST)
    public void createVehicleService(@RequestBody VehicleServiceModel vehicleServiceModel){
        vehicleServiceService.saveVehicleService(vehicleServiceModel);
    }
    @CrossOrigin
    @RequestMapping(value = "/vehicleservices/{id}", method = RequestMethod.GET)
    public ResponseEntity<VehicleServiceModel> readVehicleService(@PathVariable Long id){
        return new ResponseEntity<VehicleServiceModel>(vehicleServiceService.readVehicleService(id), HttpStatus.OK);

    }
    @CrossOrigin
    @RequestMapping(value = "/vehicleservices/{id}", method = RequestMethod.PUT)
    public void updateVehicleService(@PathVariable Long id, @RequestBody VehicleServiceModel vehicleServiceModel){
        vehicleServiceService.updateVehicleService(id, vehicleServiceModel);
    }
    @CrossOrigin
    @RequestMapping(value = "/vehicleservices/{id}", method = RequestMethod.DELETE)
    public void deleteVehicleService(@PathVariable Long id){
        vehicleServiceService.deleteVehicleService(id);

    }
    @CrossOrigin
    @RequestMapping(value = "/vehicleservices/", method = RequestMethod.GET)
    public ResponseEntity<List<VehicleServiceModel>> readAllServices(){
        return new ResponseEntity<List<VehicleServiceModel>>(vehicleServiceService.readAllServices(), HttpStatus.OK);
    }
}
