<template>
  <div class="settings">
    <a class="settings-button" v-on:click="openSettings">
      <i class="fas fa-cog"></i>
    </a>
    <modal class="settings-modal" name="settings-modal">
      <div class="modal-content">
        <select>
          <v-select :options="options"  label="Search Engine" />
        </select>
        <a class="settings-save-button" v-on:click="saveSettings">
          Save
        </a>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  name: "Settings",
  data: function(){
    return {
      options: [
        {title: 'Duckduckgo', value: 'duckduckgo'}, 
        {title: 'Google', value: 'google'}
      ]
    }
  },
  methods: {
    openSettings: function() {
      this.$modal.show("settings-modal");
    },
    loadSettings: function(){
      var searchEngine = this.getLinksFromCookie("SearchData");


      if(searchEngine !== null || typeof searchEngine !== "undefined"){
        console.log();
      }
    },
    saveSettings: function() {
      // Notification
      this.$toast.open({
        message: "Settings Saved!",
        type: "success",
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.settings .settings-button {
  display: block;
  position: absolute;
  top: 35px;
  right: 35px;
}

.settings .settings-button:hover {
  cursor: pointer;
}

.settings-modal .modal-content {
  width: 100%;
  height: 100%;
  background-color: #2e3441;
  padding: 15px;
}

.settings-modal .modal-content .settings-save-button {
  padding: 15px;
  border: 2px solid #6c7789;
  display: inline-block;
  font-family: "test";
  font-size: 25px;
}

.settings-modal .modal-content .settings-save-button:hover {
  border: 2px solid white;
  cursor: pointer;
}
</style>
