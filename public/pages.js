
// handle click and add class
$(document).ready(function() {
  $.getJSON("https://magmiler.github.io/races/", function(data){
    let dstring = ""
    $.each(data, function (index, race) {
      dstring = dstring + '<li><time><span class="day">' + race.Day + '</span>'
      dstring = dstring + '<span class="month">' + race.Month + '</span></time>'
      dstring = dstring + '<div class="info"><h2 class="title">' + race.Title + '</h2>'
      dstring = dstring + '<p class="desc"><i class="fas fa-map-signs event-list-icon"></i>' + race.Location
      dstring = dstring + '<br><i class="far fa-clock event-list-icon"></i>' + race.Start
      dstring = dstring + '<br><i class="fas fa-road event-list-icon"></i>' + race.Distance
      dstring = dstring + '</p></div></li>'
    });
    $("#event-list").html(dstring);
  });
})
