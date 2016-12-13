$(document).ready(function () {

    var currentCustomerId = sessionStorage.getItem('currentCustomerId');

    var rootURL = 'http://localhost:8091/api';

    getCustomer(currentCustomerId);

    $('#btnEditCustomer').click(function() {
        updateCustomer();
        return false;
    });


    function getCustomer(currentCustomerId) {
        $.ajax({
            type: 'GET',
            contentType: 'application/json',
            url: rootURL + "/customers/" + currentCustomerId,
            success: function(data, textStatus, jqXHR){
                console.log(data);
                getCustomerForm(data);
            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('getCustomer error: ' + textStatus);
                console.log("error: " + textStatus);
            }
        });
    }

    function getCustomerForm(currentCustomer) {
        document.getElementById("updateCustomerFirstName").value = currentCustomer['firstName'];
        document.getElementById("updateCustomerLastName").value = currentCustomer['lastName'];
        document.getElementById("updateCustomerAge").value = currentCustomer['age'];
    }


    function updateCustomer() {
        $.ajax({
            type: 'PUT',
            contentType: 'application/json',
            url: rootURL + "/customers/" + currentCustomerId,
            data: formToJSON(),
            success: function(data, textStatus, jqXHR){
                console.log(data);
            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('update Customer error: ' + textStatus);
                console.log("error: " + textStatus);
            }
        });
    }

    function formToJSON() {

        var pest = JSON.stringify({
            "firstName": $('#updateCustomerFirstName').val(),
            "lastName": $('#updateCustomerLastName').val(),
            "age": $('#updateCustomerAge').val()

        });

        console.log(pest);
        return pest;
    }

});