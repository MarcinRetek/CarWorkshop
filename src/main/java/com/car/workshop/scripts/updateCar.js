$(document).ready(function () {

    var currentCarId = sessionStorage.getItem('currentCarId');

    var rootURL = 'http://localhost:8091/api';

    getCar(currentCarId);

    var currentCar;

    $('#btnEditCar').click(function() {
        updateCar();
        return false;
    });


    function getCar(currentCarId) {
        $.ajax({
            type: 'GET',
            contentType: 'application/json',
            url: rootURL + "/cars/" + currentCarId,
            success: function(data, textStatus, jqXHR){
                currentCar = data;
                getCarForm(data);
            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('getCar error: ' + textStatus);
                console.log("error: " + textStatus);
            }
        });
    }

    function getCarForm(currentCar) {
        document.getElementById("updateCarBrand").value = currentCar['carBrand'];
        document.getElementById("updateCarModel").value = currentCar['model'];
        document.getElementById("updateModelYear").value = currentCar['modelYear'];
    }


    function updateCar() {
        $.ajax({
            type: 'PUT',
            contentType: 'application/json',
            url: rootURL + "/cars/" + currentCarId,
            data: formToJSON(),
            success: function(data, textStatus, jqXHR){
                console.log(data);
            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('update Car error: ' + textStatus);
                console.log("error: " + textStatus);
            }
        });
    }

    function formToJSON() {

        var pest = JSON.stringify({
            "carBrand": $('#updateCarBrand').val(),
            "model": $('#updateCarModel').val(),
            "modelYear": $('#updateModelYear').val(),
            "owner": {'id': currentCar['owner']}
        });

        console.log(pest);
        return pest;
    }

});