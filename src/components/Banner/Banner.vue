<template>
  <div class="containerL" height="500">
    <!-- <v-row no-gutters>
      <v-img max-height="800" :src="banner" cover></v-img>
    </v-row> -->

    <!-- <v-parallax height="800" :src="banner"></v-parallax> -->

    <v-parallax height="500" :src="banner">
      <div
        class="d-flex flex-column fill-height justify-center align-center text-white"
      >
        <h1 class="text-h4 font-weight-thin mb-4">Diners</h1>
        <h4 class="subheading">Restaurants near me!</h4>
      </div>
    </v-parallax>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Banner",

  components: {},
  data() {
    return {
      banner: "",
    };
  },
  created() {},
  destroyed() {},
  computed: {},
  mounted() {
    this.getGoogleSheetDataBanner();
  },
  methods: {
    async getGoogleSheetDataBanner() {
      console.log("getGoogleSheetDataBanner--> ");
      // this.HEADER = {
      //   headers: { "x-access-token": this.token },
      // };

      const url = import.meta.env.VITE_API_MONGO + "/admin/products";
      await axios.get(url).then((res) => {
        // this.banner = res.data.data[0].MobileBanner;
        this.banner = res.data.data[0].DesktopBanner;
        console.log("this.banner MobileBanner--> ", this.banner);

        // console.log("this.products ", this.products);
      });
    },
  },
};
</script>

<style scoped>
.hero {
  background: url("../../assets/banner1.png");
  background-size: cover;
  height: 50vh;
  width: 100%;
}
</style>
