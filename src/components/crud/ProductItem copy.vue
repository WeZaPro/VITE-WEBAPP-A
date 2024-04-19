<template>
  <v-container fluid>
    <v-row no-gutters class="bg-surface-variant mt-15">
      <v-col cols="12">
        <v-sheet class="pa-2 ma-2 text-center">
          <h3>ITEM DETAIL id : {{ itemID }}</h3>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row no-gutters class="mt-10">
      <v-col cols="12">
        <v-sheet
          class="pa-4 text-center mx-auto"
          elevation="12"
          max-width="600"
          rounded="lg"
          width="100%"
        >
          <!-- <v-img height="600px" :src="image" cover></v-img> -->
          <!-- <v-img height="100%" :src="image" cover></v-img> -->
          <v-img height="70vh" :src="image" cover></v-img>

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
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useRoute } from "vue-router";
// import UserService from "../services/user.service";
import UserService from "../../services/user.service";
// import EventBus from "../common/EventBus";
import EventBus from "../../common/EventBus";
import axios from "axios";
import TokenService from "../../services/token.service";
export default {
  name: "Profile",
  data() {
    return {
      userTest: "test",
      qryParam: "",
      products: "",
      itemID: "",
      itemProduct: [],
      image: "",
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  created() {
    const route = useRoute();

    this.itemID = route.query.data;
  },
  mounted() {
    // console.log("Start", this.userTest);
    //this.getGoogleSheetData();
    // console.log("this.currentUser", this.currentUser);
    console.log("this.currentUser---> ", this.currentUser);
    this.getToken();
    if (!this.currentUser) {
      this.$router.push("/login");
    }
    // this.getGoogleSheetData();

    UserService.getAdminBoard().then(
      (response) => {
        this.content = response.data;
        if (this.itemID) {
          this.getGoogleSheetData(this.itemID);
        }
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        if (error.response && error.response.status === 403) {
          EventBus.dispatch("logout");
        }
      }
    );
  },
  methods: {
    getToken() {
      const getToken = TokenService.getLocalAccessToken();
      this.token = getToken;
    },
    async getGoogleSheetData(id) {
      //console.log(" this.token ", this.token);
      this.HEADER = {
        headers: { "x-access-token": this.token },
      };
      const url = import.meta.env.VITE_API_URL + "/admin/getGoogleSheetCRUD";
      //const url = "http://localhost:9000/api/admin/getGoogleSheetCRUD";
      await axios.get(url, this.HEADER).then((res) => {
        this.products = res.data.data;

        this.products.forEach((element) => {
          if (element.id == id) {
            this.itemProduct.push(element);
          }
        });
        console.log("this.itemProduct ", this.itemProduct);
        this.image = this.itemProduct[0].img;
        console.log("this.Image ", this.itemProduct[0].img);
      });
    },
  },
};
</script>
