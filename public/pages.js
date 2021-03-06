const dataURL = 'https://jsonblob.com/api/jsonBlob/d3019bd6-c9db-11ea-b835-5b32b0ddcb4d';
const months = ['All', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const locations = ['All', 'Chicago', 'Virtual']
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
    distance: 'Distance',
    month: 'Month',
    location: 'Location',
    show_month: false,
    show_location: false,
    show_distance: false,
  },
  methods: {
    update_month: function(month){
				this.month = month;
        if (month === 'All') {
          this.month = 'Month';
        } else {
          this.month = month
        }
		},
    update_location: function(location){
        if (location === 'All') {
          this.location = 'Location';
        } else {
          this.location = location
        }
		},
    update_distance: function(distance){
        if (distance === 'All') {
          this.distance = 'Distance';
        } else {
          this.distance = distance
        }
    },
    toggle_month: function() {
      if (this.show_month === true) {
        this.show_month = false
      } else {
        this.show_month = true
        this.show_distance = false
        this.show_location = false
      }
    },
    toggle_location: function() {
      if (this.show_location === true) {
        this.show_location = false
      } else {
        this.show_location = true
        this.show_month = false
        this.show_distance = false
      }
    },
    toggle_distance: function() {
      if (this.show_distance === true) {
        this.show_distance = false
      } else {
        this.show_distance = true
        this.show_month = false
        this.show_location = false
      }
    },
    race_search: function() {
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
  },
  mounted() { // when the Vue app is booted up, this is run automatically.
    var self = this // create a closure to access component in the callback below
    $.getJSON(dataURL, function(data) {
      self.races = data;
    })
  }
});
