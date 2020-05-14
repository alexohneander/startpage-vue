<template>
  <div class="search-bar">
    <form method="GET" :action="renderedSearchEngine">
      <input :name="renderedSearchQuery" class="search-field" autofocus>
      <button type="submit" class="search-submit" value style="fill: white"></button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    SearchEngine: String
  },
  data: function() {
    return {
      renderedSearchEngine: String,
      renderedSearchQuery: String
    };
  },
  methods: {
    getSearchEngine: function() {
      if (this.SearchEngine === "duckduckgo") {
        this.renderedSearchEngine = "https://duckduckgo.com/";
        this.renderedSearchQuery = "q";
      } else {
        this.renderedSearchEngine = "https://www.google.com/";
        this.renderedSearchQuery = "as_q";
      }
    }
  },
  beforeMount() {
    this.getSearchEngine();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-bar form {
  background-color: #2E3441;
  border-radius: 5px;
  width: 450px;
  margin-bottom: 80px;
}

.search-bar form {
  -webkit-box-shadow: 4px 4px 15px -5px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 4px 4px 15px -5px rgba(0, 0, 0, 0.25);
  box-shadow: 4px 4px 15px -5px rgba(0, 0, 0, 0.25);
}

.search-bar form .search-field,
.search-bar form .search-submit {
  background: none;
  outline: none;
  border: none;
  line-height: 40px;
  position: relative;
}

.search-bar form .search-field {
  width: 89%;
  padding-left: 15px;
  color: white;
  font-size: 30px;
  font-family: "test";
  bottom: -10px;
}

.search-bar form .search-submit {
  width: 10%;
  top: 5px;
}

.search-bar form .search-submit:hover {
  cursor: pointer;
}

.search-bar form .search-submit::before {
  background-image: url("~@/assets/duckduckgo.svg");
  background-position: center center;
  fill: white;
  content: "";
  width: 23px;
  height: 23px;
  position: absolute;
  right: -190px;
  bottom: 18px;
}
</style>
