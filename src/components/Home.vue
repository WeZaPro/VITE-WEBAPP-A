<template>
  <!-- /// -->
  <div id="app">
    <Banner v-if="mobileView" />
    <div class="content" :class="{ open: showNav }">
      <div class="top-bar">
        <MobileBanner v-if="!mobileView" />
      </div>
    </div>
  </div>

  <!-- under bar -->
  <div class="pa-4 text-center secondary rounded-lg">
    <v-card class="pa-1" color="light-blue" elevation="16" max-width="100%">
      <!-- <img class="" src="../../assets/reslogo.png" width="5%" /> -->
      <div class="example">
        <img class="example" src="../assets/reslogo.png" width="5%" />
      </div>
      <div class="exampleA">
        <img class="example" src="../assets/reslogo.png" width="15%" />
      </div>

      <v-card-item>
        <v-card-title>
          WEBSITE ศูนย์รวมร้านอาหารดัง ในจังหวัดชลบุรี
        </v-card-title>

        <v-card-subtitle> รวมแหล่งร้านดัง และของอร่อย มากมาย </v-card-subtitle>
      </v-card-item>

      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </v-card-text>
    </v-card>
  </div>

  <v-container fluid>
    <v-row no-gutters class="bg-surface-variant mt-15">
      <v-col>
        <v-sheet class="pa-2 ma-2"> .v-col-auto </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2"> .v-col-auto </v-sheet>
      </v-col>
    </v-row>

    <v-row no-gutters class="bg-surface-variant mt-5">
      <v-col>
        <v-sheet class="pa-2 ma-2"> .v-col-auto </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2"> .v-col-auto </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2"> .v-col-auto </v-sheet>
      </v-col>
    </v-row>

    <v-row no-gutters class="bg-surface-variant mt-5">
      <v-col cols="2">
        <v-sheet class="pa-2 ma-2"> .v-col-2 </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2"> .v-col-auto </v-sheet>
      </v-col>
    </v-row>
  </v-container>

  <div class="container mt-10">
    <header class="jumbotron">
      <h3>{{ content }}</h3>
    </header>
  </div>
</template>

<script>
// import UserService from "../services/user.service";

import MobileBanner from "../components/Banner/MobileBanner.vue";
import Banner from "../components/Banner/Banner.vue";

export default {
  name: "Home",
  components: {
    MobileBanner,
    Banner,
  },
  data() {
    return {
      mobileView: true,
      content: "",
    };
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
  destroyed() {},
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 800;
    },
  },
  mounted() {
    // UserService.getPublicContent().then(
    //   (response) => {
    //     this.content = response.data;
    //   },
    //   (error) => {
    //     this.content =
    //       (error.response &&
    //         error.response.data &&
    //         error.response.data.message) ||
    //       error.message ||
    //       error.toString();
    //   }
    // );
  },
};
</script>
<style scoped>
.image-fit {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.v-image__image {
  background-size: 100% 100%;
}
#containerL {
  height: 40%;
  width: 100%;
  display: flex;
}
#banner {
  width: 100%;
  margin: 0 auto;
  padding: 0;
  text-align: center;
}
.grid-container-home {
  display: grid;
  grid-template-columns: auto auto auto;
  margin-top: 0 !important;
  /* background-color: #75eb8d00; */
  padding: 0px;
}
.grid-container-home-b {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #75eb8d00;
  padding: 10px;
}
.grid-container-home-e {
  display: grid;
  grid-template-columns: auto auto;
  background-color: #75eb8d00;
  padding: 50px;
}
.grid-item-home {
  background-color: rgba(255, 255, 255, 0.8);
  /* border: 1px solid rgba(0, 0, 0, 0.8); */
  padding: 0px;
  /* font-size: 30px; */
  text-align: center;
}
.grid-container-video {
  display: grid;
  grid-template-columns: auto;
  margin-top: 0 !important;
  background-color: #75eb8d00;
  padding: 0px;
}

.mt-0 {
  margin-top: 0 !important;
}
.mt-1 {
  margin-top: 2% !important;
}
.mt-3 {
  margin-top: 5% !important;
}
.pad {
  width: 300px;
  padding: 1px;
}

.rounded-card {
  margin-top: 10% !important;
  border-radius: 20px;
}

div.ex1 {
  width: 100%;
  padding: 0px 0px;
  margin: auto;
  /* border: 3px solid #73ad21; */
}
.card-table {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 20px;
  padding-bottom: 10px;
}
/* On mouse-over, add a deeper shadow */
.card-table:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding-bottom: 2px;
}
/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
/* Add some padding inside the card container */
.container {
  padding: 6px 16px;
}
.grid-container {
  display: grid;
  grid-column-gap: 0.8rem;
  grid-row-gap: 0.8rem;
  padding: 3%;
  /* /test */
}
@media (min-width: 400px) {
  .grid-container {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media (min-width: 600px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
.item1 {
  grid-area: a;
  align-self: center;
  justify-self: center;
}
/* .grid-container {
    display: grid;
    grid-column-gap: 5rem;
    grid-row-gap: 5rem;
  }
  @media (min-width: 576px) {
    .grid-container {
      grid-template-columns: repeat(1, 1fr);
    }
  } */
@media (min-width: 992px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* space */
.mt-0 {
  margin-top: 0 !important;
}
.mt-1 {
  margin-top: 4% !important;
}

.ml-2 {
  margin-left: 10 !important;
}

.px-2 {
  padding-left: 10 !important;
  padding-right: 10 !important;
}

.p-3 {
  padding: 10 !important;
}

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding-bottom: 2px;
}

.hero {
  background: url("../assets//banner1.png");
  background-size: cover;
  height: 50vh;
  width: 100%;
}

div.example {
  padding: 0px;
}

@media screen and (max-width: 1026px) {
  div.example {
    display: none;
  }
}

div.exampleA {
  padding: 0px;
}

@media screen and (min-width: 1026px) {
  div.exampleA {
    display: none;
  }
}
</style>
