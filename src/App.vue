<template>
  <div id="app">
    <NavigationMobile />
    <!-- <div class="content" :class="{ open: showNav }"> -->
    <div class="content">
      <div class="top-bar">
        <div id="navigation-icon" v-if="mobileView" @click="showNav = !showNav">
          <i class="fas fa-bars"></i>
        </div>
        <Navigation v-if="!mobileView" />
      </div>
    </div>
  </div>
  <router-view />
  <div>
    <Footer />
  </div>
</template>
<script>
// import EventBus from "./common/EventBus";
import NavigationMobile from "./components/NavbarMobile.vue";
import Navigation from "./components/NavbarDesktop.vue";
import MobileBanner from "./components/Banner/MobileBanner.vue";
import Banner from "./components/Banner/Banner.vue";
import Footer from "./components/Footer/Footer.vue";

export default {
  components: {
    Navigation,
    NavigationMobile,
    MobileBanner,
    Banner,
    Footer,
  },
  data: () => ({
    mobileView: true,
    showNav: false,
  }),

  watch: {},
  computed: {},
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
  destroyed() {},

  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 800;
    },
    //
  },
  mounted() {
    // EventBus.on("logout", () => {
    //   this.logOut();
    // });
  },
  beforeUnmount() {
    // EventBus.remove("logout");
  },
};
</script>

<style scoped>
#container {
  height: 100%;
  width: 100%;
  display: flex;
}
#containerL {
  height: 40%;
  width: 100%;
  display: flex;
}
#leftThing {
  width: 10%;
  /* background-color: blue; */
}
#content {
  width: 10%;
  background-color: blue;
  /* background-color: green; */
}
#top-bar {
  width: 10%;
  background-color: blue;
  /* background-color: green; */
}
#rightThing {
  width: 90%;
  /* background-color: yellow; */
}
p.ex1 {
  margin-top: 25px;
}
</style>
