<template>
  <!-- /// -->
  <!-- <div id="app">
    <Banner v-if="!mobileView" />
    <div class="content">
      <div class="top-bar">
        <MobileBanner v-if="mobileView" />
      </div>
    </div>
  </div> -->

  <div id="app">
    <MobileProductBanner v-if="mobileView" />
    <div class="content">
      <div class="top-bar">
        <BannerProduct v-if="!mobileView" />
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
        <v-card-title> รับผลิตโลห์รางวัล อะคริลิค </v-card-title>

        <v-card-title> โดยการออกแบบที่สวยงาม ทันสมัย</v-card-title>

        <v-card-subtitle>
          จากช่างมืออาชีพ ที่ชำนาญการและมีประสบการณ์
        </v-card-subtitle>
      </v-card-item>

      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </v-card-text>
    </v-card>
  </div>

  <!-- ------ -->
  <v-container fluid class="">
    <v-row no-gutters>
      <!-- ##### -->
      <v-col cols="">
        <v-sheet class="pa-2 ma-2">
          <v-card class="mx-auto" max-width="100%">
            <v-img
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              cover
            ></v-img>

            <v-card-title> Top western road trips </v-card-title>

            <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange-lighten-2" text="Explore"></v-btn>

              <v-spacer></v-spacer>

              <v-btn
                :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                @click="showA = !showA"
              ></v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="showA">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than
                  he could deliver. You won't have time for sleeping, soldier,
                  not with all the bed making you'll be doing. Then we'll go
                  with that data file! Hey, you add a one and two zeros to that
                  or we walk! You're going to do his laundry? I've got to find a
                  way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-sheet>
      </v-col>
      <!-- ##### -->

      <v-col cols="">
        <v-sheet class="pa-2 ma-2">
          <v-card class="mx-auto" max-width="100%">
            <v-img
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              cover
            ></v-img>

            <v-card-title> Top western road trips </v-card-title>

            <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange-lighten-2" text="Explore"></v-btn>

              <v-spacer></v-spacer>

              <v-btn
                :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                @click="show = !show"
              ></v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than
                  he could deliver. You won't have time for sleeping, soldier,
                  not with all the bed making you'll be doing. Then we'll go
                  with that data file! Hey, you add a one and two zeros to that
                  or we walk! You're going to do his laundry? I've got to find a
                  way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-sheet>
      </v-col>
      <!-- ##### -->
    </v-row>
    <!-- ========================================== -->

    <v-row no-gutters class="grid-container-2Up">
      <!-- ##### -->
      <v-col>
        <v-sheet class="pa-2 ma-2">
          <v-card class="mx-auto" max-width="100%">
            <v-container fluid>
              <v-row dense>
                <v-col
                  v-for="card in cards"
                  :key="card.title"
                  :cols="card.flex"
                >
                  <v-card>
                    <v-img
                      :src="card.src"
                      class="align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="200px"
                      cover
                    >
                      <v-card-title
                        class="text-white"
                        :v-text="card.title"
                      ></v-card-title>
                    </v-img>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn
                        color="medium-emphasis"
                        icon="mdi-heart"
                        size="small"
                      ></v-btn>

                      <v-btn
                        color="medium-emphasis"
                        icon="mdi-bookmark"
                        size="small"
                      ></v-btn>

                      <v-btn
                        color="medium-emphasis"
                        icon="mdi-share-variant"
                        size="small"
                      ></v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-sheet>
      </v-col>
      <!-- ##### -->
      <!-- ##### -->
      <v-col>
        <v-sheet class="pa-2 ma-2">
          <v-card class="mx-auto" max-width="100%">
            <v-container fluid>
              <v-row dense>
                <v-col
                  v-for="card in cards"
                  :key="card.title"
                  :cols="card.flex"
                >
                  <v-card>
                    <v-img
                      :src="card.src"
                      class="align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="200px"
                      cover
                    >
                      <v-card-title
                        class="text-white"
                        :v-text="card.title"
                      ></v-card-title>
                    </v-img>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn
                        color="medium-emphasis"
                        icon="mdi-heart"
                        size="small"
                      ></v-btn>

                      <v-btn
                        color="medium-emphasis"
                        icon="mdi-bookmark"
                        size="small"
                      ></v-btn>

                      <v-btn
                        color="medium-emphasis"
                        icon="mdi-share-variant"
                        size="small"
                      ></v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-sheet>
      </v-col>
      <!-- ##### -->
    </v-row>

    <!-- <v-row no-gutters>
      <v-col cols="2">
        <v-sheet class="pa-2 ma-2"> </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2"> </v-sheet>
      </v-col>
    </v-row> -->
  </v-container>

  <!-- ------ -->

  <!-- test scroll -->
</template>

<script>
// import UserService from "../services/user.service";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);
//
import MobileBanner from "../components/Banner/MobileBanner.vue";
import Banner from "../components/Banner/Banner.vue";

import BannerProduct from "../components/Banner/BannerProduct.vue";
import MobileProductBanner from "../components/Banner/MobileProductBanner.vue";

export default {
  name: "Home",
  components: {
    MobileBanner,
    Banner,
    BannerProduct,
    MobileProductBanner,
  },
  data() {
    return {
      //

      //
      show: false,
      showA: false,
      //
      mobileView: true,
      content: "",
      cards: [
        {
          title: "Pre-fab homes",
          src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
          flex: 12,
        },
        {
          title: "Favorite road trips",
          src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
          flex: 6,
        },
        {
          title: "Best airlines",
          src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
          flex: 6,
        },
      ],
    };
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
    // this.handleView();
    // window.addEventListener("resize", this.handleView);
    // window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    //window.removeEventListener("scroll", this.handleScroll);
  },
  onBeforeMount() {},

  methods: {
    // handleScroll(event) {
    //   console.log("event ======> ", event);
    //   if (window.scrollY > 980 && window.scrollY < 1000) {
    //     //alert("window.scrollY");
    //     console.log("check ====================> ", window.scrollY);
    //   }
    //   console.log(window.scrollY);
    // },
    handleView() {
      this.mobileView = window.innerWidth <= 800;
    },
  },
  mounted() {
    // window.addEventListener("scroll", this.handleScroll);
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
  border-radius: 30px;
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
@media (min-width: 600px) {
  .grid-container {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media (min-width: 800px) {
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
  background: url("../../assets/banner1.png");
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
