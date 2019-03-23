const dataURL = 'https://jsonblob.com/api/jsonBlob/1fc861e0-49cd-11e9-9547-83b52565c936';
const months = ['All', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const locations = ['All', 'Chicago']
const distances = ['All', '5K', '10K', '13.1 Miles', '26.2 Miles']

// onclick="window.open(\'{{race.Link}}\');"
Vue.component('month-component', {
  template:  `<a>{{month}}</a>`,
  props: {
    month: Object
  }
})

Vue.component('location-component', {
  template:  `<a>{{location}}</a>`,
  props: {
    location: Object
  }
})

Vue.component('distance-component', {
  template:  `<a>{{distance}}</a>`,
  props: {
    distance: Object
  }
})

Vue.component('race-component', {
  template:  `
    <race>
      <time>
        <span class="day">{{race.Day}}</span>
        <span class="month">{{race.Month}}</span>
      </time>
      <div class="info">
        <div class="title">{{race.Title}}</div>
        <div class='small'>
          <i class="fas fa-map-signs event-list-icon"></i>{{race.Location}}
          <br><i class="far fa-clock event-list-icon"></i>{{race.Start}}
          <br><i class="fas fa-road event-list-icon"></i>{{race.Distance}}
        </div>
      </div>
    </race>
    `,
  props: {
    race: Object
  }
});

new Vue({
  el: '#app',
  data: {
    races: [],
    distance: 'All',
    month: 'All',
    location: 'All',
  },
  methods: {
    update_month: function(month){
				this.month = month;
		},
    update_location: function(location){
				this.location = location;
		},
    update_distance: function(distance){
        this.distance = distance;
    },

  },
  mounted() { // when the Vue app is booted up, this is run automatically.
    var self = this // create a closure to access component in the callback below
    $.getJSON(dataURL, function(data) {
      self.races = data;
    })
    resize()
  }
});

function raceSearch() {
  input = document.getElementById("raceSearch");
  races = document.getElementsByTagName("race");

  if (input == '') {
    for (i = 0; i < races.length; i++) {
      races[i].style.display = "block";
    }
  } else {
    searchTerms = input.value.toUpperCase().split(" ")
    for (i = 0; i < races.length; i++) {
      count = 0
      for (n = 0; n < searchTerms.length; n++) {
        if (races[i].innerHTML.toUpperCase().indexOf(searchTerms[n]) > -1) {
          count += 1
        }
      }
      if (count == searchTerms.length) {
        races[i].style.display = "block";
      } else {
        races[i].style.display = "none";
      }
    }
  }
}
