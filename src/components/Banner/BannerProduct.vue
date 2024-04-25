<!-- <template>
  <v-container fluid class="hero"> </v-container>
</template> -->
<template>
  <div class="containerL" height="500">
    <!-- ------ -->

    <v-parallax :src="banner" height="500">
      <div
        class="d-flex flex-column fill-height justify-center align-center text-white"
      >
        <h1 class="text-h4 font-weight-thin mb-4">Banner Product</h1>
        <h4 class="subheading">Shop near me!</h4>

        <p class="p1"><i class="fa fa-gift"></i> ลงทะเบียนรับส่วนลด</p>
        <div v-if="showDiv === true">
          <v-btn
            class="mt-0"
            color="grey"
            width="35vh"
            @click="openForm($event)"
            block
            ><i class="fa fa-edit"></i> ลงทะเบียน</v-btn
          >
        </div>

        <div v-if="showDiv === false">
          <v-btn
            class="mt-0"
            color="pink"
            width="35vh"
            @click="openForm($event)"
            block
            ><i class="fa fa-edit"></i> ลงทะเบียน</v-btn
          >
        </div>
        <div v-show="showDiv" class="form-width mt-3">
          <!-- <v-sheet class="mx-auto" width="300"> -->
          <v-form @submit.prevent="getFormValues">
            <v-text-field
              class="my-input"
              type="text"
              solo
              filled
              rounded
              v-model="username"
              label="ชื่อ-นามสกุล"
            ></v-text-field>

            <v-text-field
              class="my-input"
              type="number"
              solo
              filled
              rounded
              v-model.number="phone"
              @keypress="onlyNumber($event)"
              label="เบอร์โทรศัพท์"
            ></v-text-field>

            <v-btn class="mt-0" color="pink" width="30vh" type="submit" block
              ><i class="fa fa-check" aria-hidden="true"></i> ส่งข้อมูล</v-btn
            >
          </v-form>
          <!-- </v-sheet> -->
        </div>
      </div>

      <div></div>
    </v-parallax>
  </div>
</template>
<script>
import axios from "axios";
import { useCookies } from "vue3-cookies";
export default {
  name: "App",
  components: {},

  components: {},
  data() {
    return {
      //setCookies: "",
      //getCookies: "",
      banner: "",
      username: "",
      phone: "",
      showDiv: false,
      // rules: [
      //   (value) => {
      //     if (value) return true;

      //     return "You must enter a first name.";
      //   },
      // ],
    };
  },
  created() {},
  destroyed() {},
  computed: {},
  mounted() {
    this.getGoogleSheetDataBanner();
  },
  methods: {
    onlyNumber($event) {
      //console.log($event.keyCode); //keyCodes value
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault();
      }
    },
    setCookiesData(name, phone) {
      const { cookies } = useCookies();
      cookies.set("acylic_cookies_name", name);
      cookies.set("acylic_cookies_phone", phone);
      return true;
      //document.cookie = "key1 = value1;key2 = value2;expires = date";
    },
    getFormValues() {
      const CLIENT_ID = import.meta.env.VITE_LIFF_CLIENT_ID_FORM;
      const REDIRECT_URL = import.meta.env.VITE_LIFF_REDIRECT_FORM;
      const VERTIFY = `hello`;
      const url = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&state=${VERTIFY}&scope=profile%20openid%20email&initial_amr_display=lineqr`;

      if (this.username === "" || this.phone === "") {
        alert("กรถณาใส่ข้อมูลให้ครบ");
      } else {
        // save data to cookies
        let set_cookies = this.setCookiesData(this.username, this.phone);
        console.log("set_cookies---> ", set_cookies);
        if (set_cookies === true) {
          //window.open(url, "_blank");
        }
      }

      // goto line login
      //

      // const url = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&state=${VERTIFY}&scope=profile%20openid%20email&initial_amr_display=lineqr`;

      //window.open(url, "_blank");
    },
    openForm(e) {
      console.log("e---> ", e);
      this.showDiv = !this.showDiv;
    },
    async getGoogleSheetDataBanner() {
      console.log("getGoogleSheetDataBanner--> ");
      // this.HEADER = {
      //   headers: { "x-access-token": this.token },
      // };

      const url = import.meta.env.VITE_API_MONGO + "/admin/products";
      await axios.get(url).then((res) => {
        this.banner = res.data.data[0].DesktopBanner;
        console.log("this.banner DesktopBanner--> ", this.banner);

        // console.log("this.products ", this.products);
      });
    },
  },
};
</script>

<!-- src="https://graphicsfamily.com/wp-content/uploads/2020/11/Professional-Web-Banner-AD-in-Photoshop-scaled.jpg" -->

<style scoped>
.hero {
  background: url("../../assets/home.png");
  background-size: cover;
  height: 50vh;
  width: 100%;
}

/* form */
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 10px;
}
.mt-required label.v-label::after {
  content: "*";
  color: red;
}

/* overlay */
/* .tinted-image {
  width: 100%;
  height: 60vh;

  background: linear-gradient(
      rgba(17, 0, 255, 0.619),
      rgba(315, 212, 707, 0.45)
    ),
    url(https://drive.google.com/thumbnail?sz=w1000&id=1I79uOcDGIRHn584DpmcxQ_UgRr92g4hH);
  background-repeat: no-repeat;
  background-size: cover;
} */

.my-input.v-input .v-input__slot {
  /* border-radius: 100px; */
  /* background: transparent !important; */

  border-color: transparent !important;
  width: 400px;
}

.text-field-transparent .v-input__slot {
  /* background: transparent !important; */

  border-color: transparent !important;
}

.v-text-field .v-input__control .v-input__slot {
  min-height: auto !important;
  display: flex !important;
  align-items: center !important;
  color: "white";
}

.form-width {
  width: 300px;
}

.p1 {
  font-family: "Times New Roman", Times, serif;
  font-size: 20px;
}
</style>
