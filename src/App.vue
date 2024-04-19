<template>
  <!-- <v-card>
    <v-layout>
      <v-app-bar color="primary" prominent>
        <v-spacer></v-spacer>
        <div class="ma-3"></div>

        <div id="container">
          <div class="navbar-nav mr-3">
            <router-link to="/home" class="nav-link">
              <font-awesome-icon icon="home" /> Home
            </router-link>
          </div>

          <div v-if="!currentUser" class="navbar-nav mr-3">
            <router-link to="/login" class="nav-link">
              <font-awesome-icon icon="sign-in-alt" /> Login
            </router-link>
          </div>
          <div v-if="!currentUser" class="navbar-nav mr-3">
            <router-link to="/register" class="nav-link">
              <font-awesome-icon icon="user-plus" /> Sign Up
            </router-link>
          </div>

          <div v-if="currentUser" class="navbar-nav mr-3">
            <router-link to="/profile" class="nav-link">
              <font-awesome-icon icon="user" />
              {{ currentUser.username }}
            </router-link>
          </div>

          <div v-if="showAdminBoard" class="navbar-nav mr-3">
            <router-link to="/create" class="nav-link">
              <i class="fa-solid fa-plus"></i>
              Add Data</router-link
            >
          </div>

          <div v-if="showAdminBoard" class="navbar-nav mr-3">
            <router-link to="/gantt" class="nav-link">
              <i class="fa-solid fa-bars-progress"></i>
              Gantt Chart
            </router-link>
          </div>

          <div class="ma-3"></div>

          <div v-if="currentUser" class="navbar-nav ml-auto">
            <a class="nav-link" @click="logOut">
              <font-awesome-icon icon="sign-out-alt" /> LogOut
            </a>
          </div>

          <div class="ma-3"></div>
        </div>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" location="bottom" temporary>
        <v-list :items="items"></v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card> -->

  <div id="app">
    <NavigationMobile />
    <div class="content" :class="{ open: showNav }">
      <div class="top-bar">
        <div id="navigation-icon" v-if="mobileView" @click="showNav = !showNav">
          <i class="fas fa-bars"></i>
        </div>
        <Navigation v-if="!mobileView" />
      </div>
    </div>
  </div>
  <router-view />
  <!-- <div>
    <router-view />
  </div> -->
</template>
<script>
// import EventBus from "./common/EventBus";
import NavigationMobile from "./components/NavbarMobile.vue";
import Navigation from "./components/NavbarDesktop.vue";
import MobileBanner from "./components/Banner/MobileBanner.vue";
import Banner from "./components/Banner/Banner.vue";

export default {
  components: {
    Navigation,
    NavigationMobile,
    MobileBanner,
    Banner,
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
