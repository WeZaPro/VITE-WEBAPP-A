<template>
  <v-container fluid>
    <v-row no-gutters class="bg-surface-variant mt-15">
      <v-col cols="12">
        <v-sheet class="pa-2 ma-2 text-center">
          <h3>ITEM DETAIL id : {{ itemID }}</h3>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="12">
        <v-sheet
          class="pa-4 text-center mx-auto"
          elevation="12"
          max-width="600"
          rounded="lg"
          width="100%"
        >
          <div>
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                class="mx-auto"
                color="grey-lighten-4"
                max-width="600"
                v-bind="props"
              >
                <v-img :aspect-ratio="6 / 6" :src="image" cover>
                  <v-expand-transition>
                    <div
                      v-if="isHovering"
                      class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal text-h2"
                      style="height: 100%"
                    >
                      $14.99
                    </div>
                  </v-expand-transition>
                </v-img>

                <v-card-text class="pt-6">
                  <div class="font-weight-light text-grey text-h6 mb-2">
                    For the perfect meal
                  </div>

                  <h3 class="text-h4 font-weight-light text-orange mb-2">
                    QW cooking utensils
                  </h3>

                  <div class="font-weight-light text-h6 mb-2">
                    Our Vintage kitchen utensils delight any chef.<br />
                    Made of bamboo by hand
                  </div>
                </v-card-text>

                <v-card-actions class="justify-center">
                  <!-- <v-btn> Detail </v-btn> -->
                  <v-btn
                    class="text-none text-subtitle-1"
                    color="#5865f2"
                    size="small"
                    variant="flat"
                    @click="clickItem(id)"
                  >
                    Create Event
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-hover>
          </div>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-sheet
          class="pa-4 text-center mx-auto"
          elevation="12"
          max-width="600"
          rounded="lg"
          width="100%"
        >
          <MAP :data="positionMap" />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useRoute } from "vue-router";
import MAP from "../map/map.vue";
// import UserService from "../services/user.service";
// import UserService from "../../services/user.service";
// import EventBus from "../common/EventBus";
// import EventBus from "../../common/EventBus";
import axios from "axios";
// import TokenService from "../../services/token.service";
export default {
  name: "Profile",
  components: {
    // GoogleMap,
    // Marker,
    MAP,
  },
  data() {
    return {
      positionMap: ["13.562704917188565", "100.98740773760905"],
      arrPosMap: [],
      center: "",
      markerOptions: "",
      userTest: "test",
      qryParam: "",
      products: "",
      itemID: "",
      itemProduct: [],
      image: "",
    };
  },
  computed: {
    // currentUser() {
    //   return this.$store.state.auth.user;
    // },
  },
  created() {
    const route = useRoute();
    // console.log("qry token ", route.query.token);
    this.itemID = route.query.data;

    // 13.87442781996809, 100.74405613413353
  },
  mounted() {
    // console.log("this.currentUser---> ", this.currentUser);
    this.getGoogleSheetData(this.itemID);

    this.map();
    // this.getToken();
    // if (!this.currentUser) {
    //   this.$router.push("/login");
    // }

    // UserService.getAdminBoard().then(
    //   (response) => {
    //     this.content = response.data;
    //     if (this.itemID) {
    //       this.getGoogleSheetData(this.itemID);
    //     }
    //   },
    //   (error) => {
    //     this.content =
    //       (error.response &&
    //         error.response.data &&
    //         error.response.data.message) ||
    //       error.message ||
    //       error.toString();

    //     if (error.response && error.response.status === 403) {
    //       EventBus.dispatch("logout");
    //     }
    //   }
    // );
  },
  methods: {
    map() {
      //13.885093361152009, 100.73856297022726
      this.center = { lat: 40.689247, lng: -74.044502 };
      //this.center = { lat: 100.73856297022726, lng: 13.885093361152009 };
      this.markerOptions = {
        position: this.center,
        label: "L",
        title: "LADY LIBERTY",
      };
    },
    getToken() {
      const getToken = TokenService.getLocalAccessToken();
      this.token = getToken;
    },
    async getGoogleSheetData(id) {
      //console.log(" this.token ", this.token);
      this.HEADER = {
        headers: { "x-access-token": this.token },
      };
      const url = import.meta.env.VITE_API_MONGO + "/admin/products";
      //const url = "http://localhost:9000/api/admin/getGoogleSheetCRUD";
      await axios.get(url, this.HEADER).then((res) => {
        this.products = res.data.data;

        this.products.forEach((element) => {
          if (element.id == id) {
            this.itemProduct.push(element);
          }
        });
        // console.log("this.itemProduct ", this.itemProduct);
        this.image = this.itemProduct[0].img;
        // console.log("this.Image ", this.itemProduct[0].img);
        this.arrPosMap = [this.itemProduct[0].DataD, this.itemProduct[0].DataE];

        // console.log(" this.arrPosMap ", this.arrPosMap);
      });
    },
  },
};
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}

/* /// */
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
</style>
