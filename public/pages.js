var dataURL = 'https://jsonblob.com/api/jsonBlob/1fc861e0-49cd-11e9-9547-83b52565c936';
// onclick="window.open(\'{{race.Link}}\');"
Vue.component('race-component', {
  template:  `
    <div class="race">
      <time>
        <span class="day">{{race.Day}}</span>
        <span class="month">{{race.Month}}</span>
      </time>
      <div class="info">
        <h2 class="title">{{race.Title}}</h2>
        <small>
          <i class="fas fa-map-signs event-list-icon"></i>{{race.Location}}
          <br><i class="far fa-clock event-list-icon"></i>{{race.Start}}
          <br><i class="fas fa-road event-list-icon"></i>{{race.Distance}}
        </small>
      </div>
    </div>
    `,
  props: {
    race: Object
  }
});

new Vue({
  el: '#app',
  data: {
    races: [],
    distance: 'all',
    month: 'all',
    location: 'all',
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
    }
  },
  mounted() { // when the Vue app is booted up, this is run automatically.
    var self = this // create a closure to access component in the callback below
    $.getJSON(dataURL, function(data) {
      self.races = data;
    })
  }
});
