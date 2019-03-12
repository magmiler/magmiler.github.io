
// handle click and add class
$(document).ready(function() {
  $.ajax({
    url: "https://magmiler.github.io/races/",
    dataType: "json"
  }).done(function(result) {
    var eventList = $("#event-list");
    let dstring = ""
    for (i = 0; i < result['Races'].length; ++i) {
      let title = result['Races'][i]['title'];
      let distance = result['Races'][i]['distance'];
      let date = result['Races'][i]['date'];
      let location = result['Races'][i]['location'];
      dstring = dstring + '<li><time><span class="day">' + date + '</span>'
      dstring = dstring + '<span class="month">' + date + '</span></time>'
      dstring = dstring + '<div class="info"><h2 class="title">' + title + '</h2>'
      dstring = dstring + '<p class="desc"><i class="fas fa-map-signs event-list-icon"></i>' + location
      dstring = dstring + '<i class="far fa-clock event-list-icon"></i>' + date
      dstring = dstring + '<br><i class="fas fa-road event-list-icon"></i>' + distance
      dstring = dstring + '</p></div></li>'
    }
    eventList.html(dstring);
  })
})
