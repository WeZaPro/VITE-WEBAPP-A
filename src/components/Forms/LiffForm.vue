<template>
  <v-container fluid>
    <v-row no-gutters class="bg-surface-variant mt-15">
      <v-col cols="12">
        <v-sheet class="pa-2 ma-2 text-center">
          <div id="header">
            <h3>LIFF FORM</h3>
            <h3>username</h3>
            <p>{{ this.lineDisplayName }}</p>
            <h3>lineUserId</h3>
            <p>{{ profile.userId }}</p>

            <h3>new IpAddress</h3>
            <p>{{ new_IPADDRESS }}</p>
            <!-- <h3>userId</h3>
    <p>{{ this.userId_queryString }}</p> -->
          </div>

          <div id="app">
            <!-- <img :src="profile.pictureUrl" width="150" height="150" /> -->
            <img
              :src="
                profile.pictureUrl
                  ? profile.pictureUrl
                  : 'https://cdn-icons-png.flaticon.com/512/4042/4042356.png'
              "
              width="150"
              height="150"
            />

            <p id="displayName">{{ profile.displayName }}</p>
            <p id="userId">{{ profile.userId }}</p>
            <p id="os">{{ os }}</p>
          </div>
          <div>
            <button
              class="container text-center btn btn-success btn-block mt-5"
              @click="lineLogin"
            >
              <!-- <img src="https://i.stack.imgur.com/e2S63.png" width="20" /> -->
              <img src="../../assets/lineicon.png" width="20" />
              Line Login
            </button>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import liff from "@line/liff";

import axios from "axios";
export default {
  name: "LineUser",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      successful: false,
      loading: false,
      message: "",
      //
      imageProfile: "",
      os: "",
      loggedIn: false,
      profile: {},
      displayName: "",
      userId: "",
      alert: "",
      getParam: "",
      //queryString
      client_id: "",
      userId: "",
      userAgent: "",

      ipAddress: "",
      new_IPADDRESS: "",

      lineUid: "",
      lineDisplayName: "",
      //data
      data: "",
      _IP: "",
    };
  },
  mounted() {
    console.log("MOUNT-->");

    //run liff
    this.liffAdd();
    //this.getAllData()
    this.getIpAddress();
    // this.sendGAapiStartChat()
    //this.saveData(data)
  },
  methods: {
    async lineLogin() {
      console.log("this.profile.userId--> ", this.profile.userId);

      if (this.profile.userId) {
        const lineUser = {
          username: this.lineDisplayName,
          password: this.profile.userId,
        };
        // goto login process
        this.handleLogin(lineUser);
      }
    },
    handleLogin(user) {
      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/profile");
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
    async getIpAddress() {
      this.new_IPADDRESS = await axios
        .get("https://api.ipify.org?format=text")
        .then(function (response) {
          console.log("response IP data -->", response.data);
          //return response.text()
          return response.data;
        });

      console.log("this.new_IPADDRESS---> ", this.new_IPADDRESS);
    },
    async liffAdd() {
      console.log("liff add--->");
      await liff
        .init({ liffId: import.meta.env.VITE_LIFF_FORM_ID })
        .then(() => {
          if (!liff.isLoggedIn()) {
            //console.log('Not Login')
            liff.login();
          } else {
            //console.log('Not Login')
            this.loggedIn = liff.isLoggedIn();
            this.os = liff.getOS();
            //console.log('isLoggedIn--> ', liff.isLoggedIn())
            // console.log('getIDToken--> ', liff.getIDToken())
            // console.log('getContext--> ', liff.getContext())
            // console.log('getOS--> ', liff.getOS())
            // console.log('isInClient--> ', liff.isInClient())
            //console.log("getAdvertisingId--> ", liff.getAdvertisingId());
            //console.log("getAId--> ", liff.getAId());
            // console.log('getVersion--> ', liff.getVersion())
            //console.log("getEnvironment--> ", liff.getEnvironment());

            //this.getProfile();
            this.getFriendship();

            liff.getProfile().then((profile) => {
              console.log("profile--> ", profile);
              this.profile = profile;
              this.lineUid = this.profile.userId;
              this.lineDisplayName = this.profile.displayName;
              console.log("this.lineDisplayName-->.> ", this.lineDisplayName);
              console.log("this.profile.userId-->.> ", this.profile.userId);

              // line to register *************
              if (this.profile.userId) {
                this.message = "";
                this.successful = false;
                this.loading = true;

                const lineUser = {
                  username: this.lineDisplayName,
                  email: "Line@gmail.com",
                  password: this.profile.userId,
                };

                this.$store.dispatch("auth/register", lineUser).then(
                  (data) => {
                    console.log("register from line ", data);
                    // this.message = data.message;
                    // this.successful = true;
                    // this.loading = false;
                  },
                  (error) => {
                    this.message =
                      (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                      error.message ||
                      error.toString();
                    this.successful = false;
                    this.loading = false;
                  }
                );
              }
            });
          }
        })
        .catch((err) => {
          this.occoredError = "error:" + err;
        });
    },

    async getProfile() {
      await liff.getProfile().then((profile) => {
        console.log("profile--> ", profile);
        this.profile = profile;
        this.lineUid = this.profile.userId;
        console.log("lineUid-->", this.lineUid);

        this.imageProfile = profile.pictureUrl;
      });
    },
    async getFriendship() {
      await liff.getFriendship().then((data) => {
        console.log("getFriendship--> ", data);
        if (data.friendFlag) {
          console.log("getFriendship--> = true");
          this.alert = data.friendFlag;
          // alert(`data.friendFlag--> ${this.alert}`)
          //alert(`Send Message-->`)
          //this.sendMsg()
        }
      });
    },
    async getAccessToken() {
      console.log("token--> ");
      await liff.getAccessToken().then((token) => {
        console.log("token--> ", token);
      });
    },

    openLineChat() {
      console.log("openLineChat--> ");
      window.open(import.meta.env.VITE_LINE_OA, "_blank");
    },
    async sendMsg() {
      const profile = await liff.getProfile();
      console.log("userId---> " + profile.userId);
      // console.log("liff.getContext().type--> ", liff.getContext().type);
      // if (liff.getContext().type !== "none") {
      //   await liff.sendMessages([
      //     {
      //       type: "sticker",
      //       stickerId: 1,
      //       packageId: 1,
      //     },
      //   ]);
      //   alert("Message sent");
      // }

      if (!liff.isInClient()) {
        window.alert(
          "This button is unavailable as LIFF is currently being opened in an external browser."
        );
      } else {
        await liff
          .sendMessages([
            {
              type: "sticker",
              stickerId: 52002736,
              packageId: 11537,
            },
            // {
            //   type: 'text',
            //   text: `สวัสดีค่ะ คุณ: ${profile.displayName} แจ้งความต้องการเลยค่ะ`,
            // },
            // {
            //   type: "text",
            //   text: "Register",
            // },
            // {
            //   type: "text",
            //   text: profile.displayName,
            // },
          ])
          .then(() => {
            console.log("Send message");
            //window.alert(`Message sent Register ` + profile.userId)
          })
          .catch((error) => {
            window.alert("Error sending message: " + error);
          });
      }
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fcfcfc;
  margin-top: 10px;
}
#header {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444242;
  margin-top: 10px;
}

#btn {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #797777;
  margin-top: 60px;
}
</style>
