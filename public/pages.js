
// handle click and add class
$(document).ready(function() {
  $.getJSON("https://jsonblob.com/api/jsonBlob/1fc861e0-49cd-11e9-9547-83b52565c936", function(data){
    let dstring = ""
    $.each(data, function (index, race) {
      dstring = dstring + '<li style="cursor: pointer;" onclick="window.open(\'' + race.Link + '\');">'
      dstring = dstring + '<time><span class="day">' + race.Day + '</span>'
      dstring = dstring + '<span class="month"><month>' + race.Month + '<month></span></time>'
      dstring = dstring + '<div class="info"><h2 class="title">' + race.Title + '</h2>'
      dstring = dstring + '<p class="desc"><i class="fas fa-map-signs event-list-icon"></i><location>' + race.Location + '</location>'
      dstring = dstring + '<br><i class="far fa-clock event-list-icon"></i>' + race.Start
      dstring = dstring + '<br><i class="fas fa-road event-list-icon"></i><distance>' + race.Distance + '</distance>'
      dstring = dstring + '</p></div></li>'
    });
    $("#event-list").html(dstring);
  });
})

function updateLocation(location) {
  console.log("location")
  document.getElementById('location-value').innerHTML = location
  if (location == 'All') {
    location = 'Location'
  }
  document.getElementsByTagName('lf')[0].innerHTML = location
  filterRaces()
}

function updateDistance(distance) {
  console.log("distance")
  document.getElementById('distance-value').innerHTML = distance
  if (distance == 'All') {
    distance = 'Distance'
  }
  document.getElementsByTagName('df')[0].innerHTML = distance
  filterRaces()
}

function  updateMonth(month) {
  console.log("month")
  document.getElementById('month-value').innerHTML = month
  if (month == 'All') {
    month = 'Month'
  }
  document.getElementsByTagName('mf')[0].innerHTML = month
  filterRaces()
}

function filterRaces() {
  var location, distance, filter, table, tr, rlocation, rdistance, i;
  location = document.getElementById("location-value").innerHTML ;
  distance = document.getElementById("distance-value").innerHTML ;
  month = document.getElementById("month-value").innerHTML ;
  ul = document.getElementsByTagName("ul")[0];
  li = ul.getElementsByTagName('li');
  if (location == 'All' && distance == 'All' && month == 'All') {
    for (i = 0; i < li.length; i++) {
      li[i].style.display = "";
    }
  } else if (month == 'All') {
    if (distance == 'All') {
      for (i = 0; i < li.length; i++) {
        rlocation = li[i].getElementsByTagName("location")[0];
        if (rlocation) {
          if (rlocation.innerHTML.indexOf("Chicago") > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }
      }
    } else if (location == 'All') {
      for (i = 0; i < li.length; i++) {
        rdistance = li[i].getElementsByTagName("distance")[0];
        if (rdistance) {
          if (rdistance.innerHTML.indexOf(distance) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }
      }
    } else {
      for (i = 0; i < li.length; i++) {
        rdistance = li[i].getElementsByTagName("distance")[0];
        rlocation = li[i].getElementsByTagName("location")[0];
        console.log(rdistance)
        console.log(rlocation)
        if (rdistance) {
          if (rlocation) {
            if (rdistance.innerHTML.indexOf(distance) > -1 && rlocation.innerHTML.indexOf("Chicago") > -1) {
              li[i].style.display = "";
            } else {
              li[i].style.display = "none";
            }
          }
        }
      }
    }
  } else {
    if (location == 'All' && distance == 'All') {
      for (i = 0; i < li.length; i++) {
        rMonth = li[i].getElementsByTagName("month")[0];
        if (rMonth) {
          if (rMonth.innerHTML.indexOf(month) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }
      }
    } else if (location == 'All') {
      console.log("6")
      for (i = 0; i < li.length; i++) {
        rdistance = li[i].getElementsByTagName("distance")[0];
        rMonth = li[i].getElementsByTagName("month")[0];
        if (rdistance) {
          if (rdistance.innerHTML.indexOf(distance) > -1 && rMonth.innerHTML.indexOf(month) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }
      }
    } else if (distance == 'All') {
      console.log("7")
      for (i = 0; i < li.length; i++) {
        rlocation = li[i].getElementsByTagName("location")[0];
        rMonth = li[i].getElementsByTagName("month")[0];
        if (rlocation) {
          if (rlocation.innerHTML.indexOf(location) > -1 && rMonth.innerHTML.indexOf(month) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }
      }
    } else {
      console.log("8")
      for (i = 0; i < li.length; i++) {
        rlocation = li[i].getElementsByTagName("location")[0];
        rMonth = li[i].getElementsByTagName("month")[0];
        rdistance = li[i].getElementsByTagName("distance")[0];
        if (rlocation) {
          if (rdistance.innerHTML.indexOf(distance) > -1 && rlocation.innerHTML.indexOf(location) > -1 && rMonth.innerHTML.indexOf(month) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }
      }
    }
  }
}
