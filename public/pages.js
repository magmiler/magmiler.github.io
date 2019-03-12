
// handle click and add class
$(document).ready(function() {
      $.ajax({
        url: "https://magmiler.github.io/races/",
        dataType: "json"
      }).done(function(result) {
        var dataContainer = $("#data-container");
        let dstring = "Races:<br>"
        for (i = 0; i < result['Races'].length; ++i) {
          let title = result['Races'][i]['title'];
          let distance = result['Races'][i]['distance'];
          let date = result['Races'][i]['date'];

          dstring = dstring + title + ": Distance: " + distance + ", Date: " + date + "<br>"
        }
        dataContainer.html(dstring);
      })
})
