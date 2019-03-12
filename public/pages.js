// find elements
var dataContainer = $("#data-container");

// handle click and add class
$(document).ready(function() {

  $.ajax({
    url: "https://magmiler.github.io/races/",
    dataType: "json"
  }).done(function(result) {
    let id = Math.floor(Math.random() * 3);
    let title = result['Races'][id]['title'];
    let distance = result['Races'][id]['distance'];
    let date = result['Races'][id]['date'];

    let dstring = "Race: " + title + ", Distance: " + distance + ", Date: " + date;
    dataContainer.text(dstring);
  });
});
