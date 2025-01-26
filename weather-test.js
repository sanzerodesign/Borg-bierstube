var city = 'Moss'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/weather?city=' + city,
    headers: { 'X-Api-Key': 'LiUeN8d1vl39XkFqqGKRLA==yrFHsPIi8VV2XpP9'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});