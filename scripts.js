$('#loadCities').click(function() {
  var input = $('#input-id').val();
  var html = [];
  var filteredCitiesCount;
  $('#new-content').text('loading...');
  $.getJSON({
    url: "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json",
    data: {
      type: "GET",
      dataType: 'jsonp',
    }
  })
  
  .done(cities => {
    var filteredCities = cities.filter(post => {
      if (post.state === input) {
        var element = `<li>${post.city}, ${post.population}, ${post.state}</li>`;
        html.push(element);
        return post;
      }
    });
    
    filteredCitiesCount = filteredCities.length;
    $('#new-content').html(html.join(''));
    
  })
  
  .fail(() => {
    console.log('error')
  })
  
  .always(() => {
    $('#new-content').append('<div id="total">Total cities in ' + input + ' = '+ filteredCitiesCount + '</div>')
  });
  
});

$(function() {
    $.getScript(
        'https://evthedev.github.io/jquery-ajax-cities/ajax-scripts/ajax-script-1.js',
        function() {
            $("#alertCities").click(function(){
                var alertValue = $('#total').text()
                alertScript(alertValue)
            })
        }
    )
})
