<template>
  <div class="watch">
    <div id="time" class="time">{{ timeString }}</div>
  </div>
</template>

<script>
export default {
  name: "Time",
  data: function() {
    return {
      timeString: String
    };
  },
  methods: {
    updateClock: function() {
      var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      var time = "";

      if (minutes < 10) {
        time = hours + ":" + "0" + minutes;
      } else {
        time = hours + ":" + minutes;
      }
      if (hours < 10) {
        time = "0" + time;
      }

      this.timeString = time;
      setTimeout(this.updateClock, 1000);
    }
  },
  beforeMount() {
    this.updateClock();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.watch .time {
  font-family: "test";
  font-size: 120px;
  margin-bottom: 20px;
}
</style>
