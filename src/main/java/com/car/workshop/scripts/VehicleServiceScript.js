$(document).ready(function(){

    var rootURL = 'http://localhost:8091/api';

    var currentCustomer;

    $('#btnSave').click(function() {
        addVehicleService();
        return false;
    });

    readAllCars();

    function addVehicleService() {
        console.log('addVehicleService');
        $.ajax({
            type: 'POST',
            contentType: 'application/json',
            url: rootURL + "/vehicleservices/",
            data: formToJSON(),
            success: function(data, textStatus, jqXHR){
                alert('Vehicle Service created successfully');

            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('addVehicleService error: ' + textStatus);
                console.log("error: " + textStatus);
            }
        });
    }

    function formToJSON() {

        var test = JSON.stringify({
            "date": $('#vehicleServiceDate').val(),
            "description": $('#vehicleServiceDescription').val(),
            "car":{'id': $('#carOwner').val()}
        });

        console.log(test);
        return test;
    }

    function readAllCars() {

        console.log('readCars');
        $.ajax({
            type: 'GET',
            url: rootURL + "/cars/",
            success: function(data, textStatus, jqXHR){
                alert('Cars found successfully');
                var sel = document.getElementById('carOwner');
                for(var i = 0; i < data.length; i++){
                    var opt = document.createElement('option');
                    opt.innerHTML = data[i]['carBrand'] + " " + data[i]['model'];
                    opt.value = data[i]['id'];
                    sel.appendChild(opt);
                }

            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('Find cars error: ' + textStatus);
                console.log("error: " + textStatus);
            }
        });

    }
});