$(document).ready(function () {

    var rootURL = 'http://localhost:8091/api';

    
    getAllCars();
    getAllCustomers();
    getAllServices();

    var listOfCustomers;
    var listOfCars;

    function updateStats(listOfServices) {
        
        $stats = $('#statsDiv');
        var dateNow = new Date();
        var numberOfServices = 0;
        dateNow.getMonth();
        for(i =0; i<listOfServices.length; i++){
            var serviceDate = new Date(listOfServices[i].date);
            if(dateNow.getMonth() == serviceDate.getMonth()){
                numberOfServices++
            }
        }
        $stats.append(numberOfServices);
    }

    function getAllCars() {
        $.ajax({
            type: 'GET',
            contentType: 'application/json',
            url: rootURL + "/cars/",
            success: function(data, textStatus, jqXHR){
                listOfCars = data;
                populateCarTable(data);

            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('addCar error: ' + textStatus);
                console.log("error: " + textStatus);
            }
            
        });
    }

    function populateCarTable(listOfCars) {
        $table = $('#carTable');

        var htmlString = '';

        for(var i = 0; i < listOfCars.length; i++){
            var carOwner;
            for(j =0; j<listOfCustomers.length; j++){
                if(listOfCars[i].owner == listOfCustomers[j].id){
                    carOwner = listOfCustomers[j];
                    break;
                }
            }


            htmlString+='<tr>';
            htmlString+='<td>' + listOfCars[i].carBrand + '</td>';
            htmlString+='<td>' + listOfCars[i].model + '</td>';
            htmlString+='<td>' + listOfCars[i].modelYear + '</td>';
            htmlString+='<td>' + carOwner.firstName + " " + carOwner.lastName + '</td>';
            htmlString+='<td>' + '<a href="#" class="btnDeleteCar" data-value="'+listOfCars[i].id+'">Delete</a></br>' +
                                 '<a href="#" class="btnEditCar" data-value="'+listOfCars[i].id+'">Edit</a></td>';
            htmlString+='</tr>';
        }
        console.log(htmlString);
        $table.append(htmlString);
    }

    $(document).on("click", ".btnEditCar", function () {
        var currentCarId = $(this).data("value");
        console.log(currentCarId)
        sessionStorage.setItem('currentCarId', currentCarId);
        location.href="../webcontent/updateCar.html";

    });

    $(document).on("click", ".btnDeleteCar", function () {
        var currentCarId = $(this).data("value");
        deleteCar(currentCarId);
        
    });

    function deleteCar(currentCarId) {
        $.ajax({
            type: 'DELETE',
            contentType: 'application/json',
            url: rootURL + "/cars/" + currentCarId,
            success: function(data, textStatus, jqXHR){

                alert('Car deleted successfully');
                location.reload();

            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('delete error: ' + textStatus);
                console.log("error: " + textStatus);
            }
        });
    }

    function getAllCustomers() {
        $.ajax({
            type: 'GET',
            contentType: 'application/json',
            url: rootURL + "/customers/",
            success: function(data, textStatus, jqXHR){
                listOfCustomers = data;
                populateCustomerTable();

            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('addCustomer error: ' + textStatus);
                console.log("error: " + textStatus);
            }
        });
    }

    function populateCustomerTable() {
        $table = $('#customerTable');

        var htmlString = '';

        for(var i = 0; i < listOfCustomers.length; i++){
            htmlString+='<tr>';
            htmlString+='<td>' + listOfCustomers[i].firstName + '</td>';
            htmlString+='<td>' + listOfCustomers[i].lastName + '</td>';
            htmlString+='<td>' + listOfCustomers[i].age + '</td>';
            htmlString+='<td>' + '<a href="#" class="btnDeleteCustomer" data-value="'+listOfCustomers[i].id+'">Delete</a><br>' +
                                 '<a href="#" class="btnEditCustomer" data-value="'+listOfCustomers[i].id+'">Edit</a></td>';
            htmlString+='</tr>';
        }

        $table.append(htmlString);
    }

    $(document).on("click", ".btnEditCustomer", function () {
        var currentCustomerId = $(this).data("value");
        console.log(currentCustomerId)
        sessionStorage.setItem('currentCustomerId', currentCustomerId);
        location.href="../webcontent/updateCustomer.html";

    });


    $(document).on("click", ".btnDeleteCustomer", function () {
        var currentCustomerId = $(this).data("value");
        deleteCustomer(currentCustomerId);
        
    });

    function deleteCustomer(currentCustomerId) {
        $.ajax({
            type: 'DELETE',
            contentType: 'application/json',
            url: rootURL + "/customers/" + currentCustomerId,
            success: function(data, textStatus, jqXHR){

                alert('Customer deleted successfully');
                location.reload();

            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('delete error: ' + textStatus);
                console.log("error: " + textStatus);
            }
        });
    }

    function getAllServices() {
        $.ajax({
            type: 'GET',
            contentType: 'application/json',
            url: rootURL + "/vehicleservices/",
            success: function(data, textStatus, jqXHR){
                updateStats(data);
                populateServiceTable(data);

            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('addCustomer error: ' + textStatus);
                console.log("error: " + textStatus);
            }
        });
    }

    function populateServiceTable(listOfServices) {
        $table = $('#serviceTable');

        var htmlString = '';

        for(var i = 0; i < listOfServices.length; i++){
            var carToFix;
            for(j =0; j<listOfCars.length; j++){
                if(listOfServices[i].car == listOfCars[j].id){
                    carToFix = listOfCars[j];

                    break;
                }
            }

            var dateFormat = new Date(listOfServices[i].date)


            htmlString+='<tr>';
            htmlString+='<td>' + dateFormat.toLocaleDateString() + '</td>';
            htmlString+='<td>' + listOfServices[i].description + '</td>';
            htmlString+='<td>' + carToFix.carBrand + " " + carToFix.model + '</td>';
            htmlString+='<td>' + '<a href="#" class="btnDeleteService" data-value="'+listOfServices[i].id+'">Delete</a></br>'+
                                 '<a href="#" class="btnEditService" data-value="'+listOfServices[i].id+'">Edit</a></td>';
            htmlString+='</tr>';
        }

        $table.append(htmlString);
    }

    $(document).on("click", ".btnEditService", function () {
        var currentVehicleServiceId = $(this).data("value");
        console.log(currentVehicleServiceId)
        sessionStorage.setItem('currentVehicleServiceId', currentVehicleServiceId);
        location.href="../webcontent/updateVehicleService.html";

    });

    $(document).on("click", ".btnDeleteService", function () {
        var currentServiceId = $(this).data("value");
        deleteService(currentServiceId);
        console.log(currentServiceId)
    });

    function deleteService(currentServiceId) {
        $.ajax({
            type: 'DELETE',
            contentType: 'application/json',
            url: rootURL + "/vehicleservices/" + currentServiceId,
            success: function(data, textStatus, jqXHR){

                alert('Service deleted successfully');
                location.reload();

            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('delete error: ' + textStatus);
                console.log("error: " + textStatus);
            }
        });
    }
});