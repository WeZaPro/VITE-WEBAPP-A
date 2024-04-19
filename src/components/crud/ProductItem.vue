<template>
  <v-container fluid>
    <!-- <v-row no-gutters class="bg-surface-variant mt-15">
      <v-col cols="12">
        <v-sheet class="pa-2 ma-2 text-center">
          <h3>ITEM DETAIL id : {{ itemID }}</h3>
        </v-sheet>
      </v-col>
    </v-row> -->

    <v-row no-gutters class="mt-15">
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
                      style="height: 20%"
                    >
                      <h3 class="text-h4 font-weight-light text-white mb-2">
                        {{ shop }}
                      </h3>
                    </div>
                  </v-expand-transition>
                </v-img>

                <v-card-text class="pt-6">
                  <div class="font-weight-light text-grey text-h6 mb-2">
                    {{ shop }}
                  </div>

                  <h3 class="text-h4 font-weight-light text-orange mb-2">
                    {{ title }}
                  </h3>

                  <div class="font-weight-light text-h6 mb-2">
                    {{ detail }}
                  </div>
                </v-card-text>

                <div class="text-center">
                  <v-btn
                    append-icon="mdi-account-circle"
                    prepend-icon="mdi-check-circle"
                    color="#4CAF50"
                    @click="clickContact"
                  >
                    <template v-slot:prepend>
                      <v-icon color="#F44336"></v-icon>
                    </template>

                    ติดต่อ

                    <template v-slot:append>
                      <v-icon color="#EEFF41"></v-icon>
                    </template>
                  </v-btn>
                </div>

                <v-card-actions class="justify-center">
                  <v-switch
                    v-model="show"
                    color="deep-purple"
                    :label="`รายการอาหาร`"
                    hide-details
                    inset
                  ></v-switch>
                  <!-- <v-btn
                    class="text-none text-subtitle-1"
                    color="#5865f2"
                    size="small"
                    variant="flat"
                    @click="showItem(id)"
                  >
                    รายการอาหาร
                  </v-btn> -->
                </v-card-actions>
              </v-card>
            </v-hover>
          </div>
        </v-sheet>
      </v-col>
    </v-row>

    <!-- map -->
    <v-row v-show="!show">
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
  <!-- product group -->
  <div v-show="show">
    <v-row justify="center mb-0 mt-0 ">
      <v-col cols="12">
        <div className="grid-container ">
          <v-card
            v-for="item in productArr"
            v-bind="item"
            :key="item.id"
            class="card mt-0"
            elevation="12"
            rounded="lg"
            max-width="600"
            color="primary"
            append-icon="mdi-check"
            subtitle="รายการอาหารแนะนำ !"
            :title="item.key"
            append-avatar="https://freedesignfile.com/upload/2020/09/Tasty-food-vector-icon.jpg"
            link
          >
            <v-icon color="sussess" icon="mdi-account"></v-icon>
            <v-rating
              :model-value="4.5"
              color="amber"
              density="compact"
              size="small"
              half-increments
              readonly
            ></v-rating>
            <v-img class="zoom" height="300px" :src="item.val" cover></v-img>

            <!-- <v-icon color="sussess" icon="mdi-account"></v-icon>
            <v-rating
              :model-value="4.5"
              color="amber"
              density="compact"
              size="small"
              half-increments
              readonly
            ></v-rating> -->
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
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
      lineAdd: "",
      shop: "",
      title: "",
      detail: "",
      show: false,
      productArr: [],
      titleArr: [],
      result: [],
      productGroup: [],
      titleGroup: [],
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
  },
  methods: {
    clickContact(id) {
      console.log("id ", id);
      window.open(this.lineAdd, "_blank");
    },
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
          //console.log("element LineAdd ", element.LineAdd);
          if (element.id == id) {
            this.lineAdd = element.LineAdd;
            this.shop = element.DataA;
            this.title = element.DataB;
            this.detail = element.DataC;
            this.itemProduct.push(element);

            this.productGroup.push({
              Recommended_1: element.ProductA,
              Recommended_2: element.ProductB,
              Recommended_3: element.ProductC,
              Recommended_4: element.ProductD,
              Recommended_5: element.ProductF,
              Recommended_6: element.ProductG,
            });

            // this.titleGroup.push({
            //   titleA: element.MenuNameTitleA,
            //   titleB: element.MenuNameTitleB,
            //   titleC: element.MenuNameTitleC,
            //   titleD: element.MenuNameTitleD,
            //   titleE: element.MenuNameTitleE,
            //   titleF: element.MenuNameTitleF,
            // });
          }
        });

        this.image = this.itemProduct[0].img;
        // console.log("this.Image ", this.itemProduct[0].img);
        this.arrPosMap = [this.itemProduct[0].DataD, this.itemProduct[0].DataE];
        //convert obj to arr **********************

        // set image obj to Array ********
        let myKeys = Object.entries(this.productGroup[0]);
        let myKeysArr = [];

        myKeys.forEach(([key, val]) => {
          // myKeysArr.push(key);
          myKeysArr.push({ key, val });
        });
        this.productArr = myKeysArr;
        console.log("this.productArr--> ", this.productArr);

        // set title obj to Array ********
        // let myTitleKeys = Object.entries(this.titleGroup[0]);
        // let myKeyTitlesArr = [];

        // myTitleKeys.forEach(([key, val]) => {
        //   myKeyTitlesArr.push({ key, val });
        // });
        // this.titleArr = myKeyTitlesArr;
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

/* ZOOM */
.zoom {
  padding: 50px;
  transition: transform 0.2s; /* Animation */
  max-width: "600";
  margin: 0 auto;
}

.zoom:hover {
  transform: scale(
    2
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>
