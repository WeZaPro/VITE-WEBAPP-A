<template>
  <div id="app">
    <MobileProductBanner v-if="mobileView" />
    <!-- <div class="content" :class="{ open: showNav }"> -->
    <div class="content">
      <div class="top-bar">
        <BannerProduct v-if="!mobileView" />
      </div>
    </div>
  </div>
  <!-- Slide Group Start---------------------->
  <div v-if="!mobileView">
    <v-card class="pa-5" color="light-grey" elevation="16" max-width="100%">
      <div class="mt-0">
        <SlideGroup />
      </div>
    </v-card>
  </div>

  <div v-if="mobileView">
    <v-card class="pa-5" color="light-grey" elevation="16" max-width="100%">
      <div class="mt-0">
        <SlideGroupOneUp />
      </div>
    </v-card>
  </div>

  <!-- Slide Group End---------------------->

  <v-card class="pa-5" color="light-grey" elevation="16" max-width="100%">
    <div class="mt-0">
      <Carousel />
    </div>
  </v-card>

  <div class="pa-3 text-center secondary rounded-lg">
    <v-card
      class="pa-1"
      color="purple-darken-1"
      elevation="16"
      max-width="100%"
    >
      <!-- <img class="" src="../../assets/reslogo.png" width="5%" /> -->
      <div class="example">
        <img class="example" src="../../assets/reslogo.png" width="5%" />
      </div>
      <div class="exampleA">
        <img class="example" src="../../assets/reslogo.png" width="15%" />
      </div>

      <v-card-item>
        <v-card-title> Bangkok Sukiyaki & Shabu Shabu </v-card-title>

        <v-card-title> Top Restaurants in Bangkok</v-card-title>

        <v-card-subtitle>
          In saigon me and my friends really like MK , this place is good choice
          , we... A gotta try meal in Thailand
        </v-card-subtitle>
      </v-card-item>

      <v-card-text>
        The buffet is the hot pot menu. You have 1hr 45 min for supper to chow
        down all... Simple Thai food at low price
      </v-card-text>
    </v-card>
  </div>

  <!-- under bar ------end-------------------->
  <!-- ------ -->
  <div class="mt-0">
    <v-row justify="center mb-2">
      <v-col cols="12">
        <div className=" grid-container">
          <CardDesignB
            class="card"
            v-for="item in products"
            v-bind="item"
            :key="item.id"
          />
        </div>
      </v-col>
    </v-row>
  </div>

  <!-- ----- -->
</template>

<script>
//init scroll
import debounce from "lodash/debounce";
//
import axios from "axios";
import TokenService from "../../services/token.service";
import Card from "../componentCard/Card.vue";
//import CardDesign from "../componentCard/CardDesignHold.vue";
import CardDesignB from "../componentCard/CardDesign.vue";
// import imgBanner from "../../assets/banner1.png";

import BannerProduct from "../../components/Banner/BannerProduct.vue";
import MobileProductBanner from "../../components/Banner/MobileProductBanner.vue";

//
import Carousel from "../../components/carousel/Carousel.vue";
import SlideGroup from "../../components/SlideGroup/SlideGroup.vue";
import SlideGroupOneUp from "../../components/SlideGroup/SlideGroupOneUp.vue";

export default {
  name: "Products",
  // props: {
  //   people: {
  //     type: Array,
  //     default: () => [],
  //   },
  // },
  components: {
    Card,
    //CardDesign,
    MobileProductBanner,
    BannerProduct,
    CardDesignB,
    Carousel,
    SlideGroup,
    SlideGroupOneUp,
  },
  data() {
    return {
      mobileView: true,
      userTest: "test",
      //h: "300",
      //bannerImg: imgBanner,
      mainTodo: ["x", "y", "z"],
      items: [
        { id: 1, name: "wee", age: 50 },
        { id: 2, name: "au", age: 51 },
        { id: 3, name: "da", age: 52 },
        { id: 4, name: "aa", age: 52 },
      ],
      products: [],
      mocks: [],
    };
  },
  created() {
    this.getGoogleSheetData();
    this.testApi();
    this.handleView();
    window.addEventListener("resize", this.handleView);

    //
    // window.addEventListener("scroll", this.handleScroll);
  },

  unmounted() {
    // window.removeEventListener("scroll", this.handleScroll);
  },

  destroyed() {},
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    // this.getToken();
    // if (!this.currentUser) {
    //   this.$router.push("/login");
    // }
    // this.getGoogleSheetData();

    // scroll event
    this.handleDebouncedScroll = debounce(this.handleScroll, 100);
    window.addEventListener("scroll", this.handleDebouncedScroll);
  },
  beforeDestroy() {
    // I switched the example from `destroyed` to `beforeDestroy`
    // to exercise your mind a bit. This lifecycle method works too.
    window.removeEventListener("scroll", this.handleDebouncedScroll);
  },
  methods: {
    handleScroll(event) {
      // Any code to be executed when the window is scrolled
      this.isUserScrolling = window.scrollY > 0;
      console.log("calling handleScroll");
      const _second = window.scrollY / 1000;
    },
    handleView() {
      this.mobileView = window.innerWidth <= 800;
    },
    testApi() {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          //console.log("mock --> ", json);
          this.mocks = json;
        });
    },
    getToken() {
      const getToken = TokenService.getLocalAccessToken();
      this.token = getToken;
    },
    async getGoogleSheetData() {
      // this.HEADER = {
      //   headers: { "x-access-token": this.token },
      // };

      const url = import.meta.env.VITE_API_MONGO + "/admin/products";
      await axios.get(url).then((res) => {
        this.products = res.data.data;
        console.log("this.products >>>>>>> ", res.data);
      });
    },
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

@media (min-width: 768px) {
  .card img {
    height: 11em;
  }
}
</style>
