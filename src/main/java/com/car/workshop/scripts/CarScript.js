$(document).ready(function(){

    var rootURL = 'http://localhost:8091/api';
    

    $('#btnSend').click(function() {
        addCar();
        return false;
    });
    
    readAllCustomers();
    
    function addCar() {
        console.log('addCar');
        $.ajax({
            type: 'POST',
            contentType: 'application/json',
            url: rootURL + "/cars/",
            data: formToJSON(),
            success: function(data, textStatus, jqXHR){
                alert('Car created successfully');

            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('addCar error: ' + textStatus);
                console.log("error: " + textStatus);
            }
        });
    }

    function formToJSON() {
        
        var test = JSON.stringify({
            "carBrand": $('#carCarBrand').val(),
            "model": $('#carModel').val(),
            "modelYear": $('#carModelYear').val(),
            "owner":{'id': $('#carOwner').val()}
        });

        console.log(test);
        return test;
    }
    
    function readAllCustomers() {

        console.log('readCustomers');
        $.ajax({
            type: 'GET',
            url: rootURL + "/customers/",
            success: function(data, textStatus, jqXHR){
                alert('Customer found successfully');
                var sel = document.getElementById('carOwner');
                for(var i = 0; i < data.length; i++){
                    var opt = document.createElement('option');
                    opt.innerHTML = data[i]['firstName'] + " " + data[i]['lastName'];
                    opt.value = data[i]['id'];
                    sel.appendChild(opt);
                }

            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('Find customers error: ' + textStatus);
                console.log("error: " + textStatus);
            }
        });
        
    }
    
});