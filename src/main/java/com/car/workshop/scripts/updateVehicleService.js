$(document).ready(function () {

    var currentVehicleServiceId = sessionStorage.getItem('currentVehicleServiceId');

    var rootURL = 'http://localhost:8091/api';

    getVehicleService(currentVehicleServiceId);

    var currentVehicleService;

    $('#btnEditVehicleService').click(function() {
        updateVehicleService();
        return false;
    });


    function getVehicleService(currentVehicleServiceId) {
        $.ajax({
            type: 'GET',
            contentType: 'application/json',
            url: rootURL + "/vehicleservices/" + currentVehicleServiceId,
            success: function(data, textStatus, jqXHR){
                console.log(data);
                getVehicleServiceForm(data);
            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('getVehicleService error: ' + textStatus);
                console.log("error: " + textStatus);
            }
        });
    }

    function getVehicleServiceForm(currentVehicleService) {
        var oldDate = new Date(currentVehicleService['date'])
        document.getElementById("updateVehicleServiceDate").value = oldDate.toLocaleDateString();
        document.getElementById("updateVehicleServiceDescription").value = currentVehicleService['description'];
    }


    function updateVehicleService() {
        $.ajax({
            type: 'PUT',
            contentType: 'application/json',
            url: rootURL + "/vehicleservices/" + currentVehicleServiceId,
            data: formToJSON(),
            success: function(data, textStatus, jqXHR){
                console.log(data);
            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('update Vehicle Service error: ' + textStatus);
                console.log("error: " + textStatus);
            }
        });
    }

    function formToJSON() {

        var kest = JSON.stringify({
            "date": $('#updateVehicleServiceDate').val(),
            "description": $('#updateVehicleServiceDescription').val(),
        });

        console.log(kest);
        return kest;
    }

});