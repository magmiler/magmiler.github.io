
// handle click and add class
$(document).ready(function() {
      $.ajax({
        url: "https://magmiler.github.io/races/",
        dataType: "json"
      }).done(function(result) {
        var dataContainer = $("#data-container");

        let title = result['Races'][1]['title'];
        let distance = result['Races'][1]['distance'];
        let date = result['Races'][1]['date'];

        let dstring = "Race: " + title + ", Distance: " + distance + ", Date: " + date;
        dataContainer.text(dstring);
      })
})
