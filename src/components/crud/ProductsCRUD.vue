<template>
  <v-container fluid>
    <v-row no-gutters class="bg-surface-variant mt-15">
      <v-col cols="12">
        <v-sheet class="pa-2 ma-2 text-center">
          <h3>CRUD PRODUCT</h3>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
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
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    // console.log("Start", this.userTest);
    // console.log("this.currentUser", this.currentUser);
    this.getToken();
    if (!this.currentUser) {
      this.$router.push("/login");
    }
    // this.getGoogleSheetData();

    UserService.getAdminBoard().then(
      (response) => {
        this.content = response.data;
        this.getGoogleSheetData();
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
    async getGoogleSheetData() {
      console.log(" this.token ", this.token);
      this.HEADER = {
        headers: { "x-access-token": this.token },
      };
      const url = import.meta.env.VITE_API_MONGO + "/admin/getGoogleSheetCRUD";
      //const url = "http://localhost:9000/api/admin/getGoogleSheetCRUD";
      await axios.get(url, this.HEADER).then((res) => {
        console.log(res.data);
      });
    },
  },
};
</script>
