<template>
  <div class="box">
    <div class="box-container" v-for="category in categorys" :key="category.title">
      <div class="heading">{{ category.title }}</div>

      <a v-for="link in category.links" :href="link.url" target="_blank" :key="link.title">
        <div class="link">{{ link.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Links",
  data: function() {
    return {
      tempcategorys: [
        {
          title: "Unterhaltung",
          links: [
            {
              title: "Reddit",
              url: "https://www.reddit.com/"
            },
            {
              title: "Youtube",
              url: "https://www.youtube.com/"
            },
            {
              title: "Netflix",
              url: "https://www.netflix.com/browse"
            },
            {
              title: "Spotify",
              url: "https://open.spotify.com/"
            }
          ]
        },
        {
          title: "Technik",
          links: [
            {
              title: "Github",
              url: "https://github.com/trending?spoken_language_code="
            },
            {
              title: "t3n",
              url: "https://t3n.de/"
            },
            {
              title: "4chang /g/",
              url: "https://boards.4channel.org/g/catalog"
            },
            {
              title: "Stackoverflow",
              url: "https://stackoverflow.com/"
            }
          ]
        },
        {
          title: "Kreativ",
          links: [
            {
              title: "dribbble",
              url: "https://dribbble.com/"
            },
            {
              title: "Behance",
              url: "https://www.behance.net/"
            },
            {
              title: "Freepik",
              url: "https://de.freepik.com/"
            },
            {
              title: "Google Fonts",
              url: "https://fonts.google.com/"
            }
          ]
        },
        {
          title: "Zeugs",
          links: [
            {
              title: "feedly",
              url: "https://feedly.com/"
            },
            {
              title: "Die Zeit",
              url: "https://www.zeit.de/index"
            },
            {
              title: "Twitter",
              url: "https://twitter.com/home"
            },
            {
              title: "pr0gramm",
              url: "https://pr0gramm.com/"
            }
          ]
        }
      ],
      categorys: []
    };
  },
  methods: {
    initLinks: function() {
      if (this.checkIfCookieExists() === false) {
        this.categorys = this.tempcategorys;
        var json_str = JSON.stringify(this.tempcategorys);
        this.createCookie(json_str);
      } else {
        this.categorys = this.getLinksFromCookie("LinkData");
        console.log("Startpage: Links wurden synchronisiert!");
        this.$toast.open("Links wurden synchronisiert!");
      }
    },
    checkIfCookieExists: function() {
      var cookie = this.$cookie.get("LinkData");

      console.log(cookie);

      if (cookie === null || typeof cookie === "undefined") {
        return false;
      }

      return true;
    },
    createCookie: function(data) {
      console.log("Startpage: pushing Links to Cookie.");
      this.$cookie.set("LinkData", data);
    },
    getLinksFromCookie: function(cookie) {
      console.log("Startpage: loading Links from Cookie.");
      var cookieData = this.$cookie.get(cookie);
      var data = JSON.parse(cookieData);
      return data;
    },
    pushLinksToCookie: function() {
      console.log("Startpage: pushing Links to Cookie.");
    }
  },
  beforeMount() {
    this.initLinks();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.notices {
  font-family: "test";
}

.box .box-container:hover,
.box .box-container {
  -webkit-transition: all 150ms ease-in-out;
  -moz-transition: all 150ms ease-in-out;
  -ms-transition: all 150ms ease-in-out;
  -o-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
}

.box .box-container:hover {
  -webkit-box-shadow: 4px 4px 15px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 4px 15px -5px rgba(0, 0, 0, 0.75);
  box-shadow: 4px 4px 15px -5px rgba(0, 0, 0, 0.75);
}

.box .box-container {
  -webkit-box-shadow: 4px 4px 15px -5px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 4px 4px 15px -5px rgba(0, 0, 0, 0.25);
  box-shadow: 4px 4px 15px -5px rgba(0, 0, 0, 0.25);
}

.box {
  width: 950px;
}

.box .box-container {
  background-color: #2E3441;
  width: 200px;
  height: 220px;
  float: left;
  border-radius: 5px;
}

.box .box-container .link {
  font-family: "test";
  font-size: 28px;
  line-height: 16px;
  padding: 20px 0 0 15px;
  text-align: left;
}

.box .box-container:not(:last-child) {
  margin-right: 50px;
}

.box .box-container .heading {
  margin: 25px 0 9px 15px;
  font-family: "test";
  font-size: 33px;
  line-height: 18px;
  text-align: left;
}
</style>
