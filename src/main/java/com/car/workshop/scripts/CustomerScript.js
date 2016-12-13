$(document).ready(function(){

    var rootURL = 'http://localhost:8091/api';
    

    $('#btnSubmit').click(function() {
        addCustomer();
        return false;
    });

    

    function addCustomer() {
        console.log('addCustomer');
        $.ajax({
            type: 'POST',
            contentType: 'application/json',
            url: rootURL + "/customers/",
            data: formToJSON(),
            success: function(data, textStatus, jqXHR){
                alert('Customer created successfully');
                
            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('addCustomer error: ' + textStatus);
                console.log("error: " + textStatus);
            }
        });
    }

    function formToJSON() {
        
        var test = JSON.stringify({
            "firstName": $('#customerFirstName').val(),
            "lastName": $('#customerLastName').val(),
            "age": $('#customerAge').val()
            
        });

        console.log(test);
        return test;
    }

   
});