<template>
  <div class="container-1 sticky-top">
    <v-card>
      <v-layout>
        <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

        <v-app-bar color="primary" prominent>
          <v-spacer></v-spacer>
          <div class="ma-3"></div>
          <!-- --- -->
          <div class="mr-3">
            <img
              class="mr-3"
              src="../assets/home2.png"
              height="40"
              @click.stop="drawer = !drawer"
            />
          </div>
          <div id="container">
            <!-- <div class="mr-3 SelectedTile" active-class="SelectedTile-active">
              <font-awesome-icon icon="home" @click.stop="drawer = !drawer" />
              Home
            </div> -->

            <!-- <div v-if="!currentUser" class="mr-3 SelectedTile">
              <router-link to="/register" class="nav-link">
                <font-awesome-icon icon="user-plus" /> Sign Up
              </router-link>
            </div>

            <div v-if="!currentUser" class="mr-3 SelectedTile">
              <router-link to="/login" class="nav-link">
                <font-awesome-icon icon="sign-in-alt" /> Login
              </router-link>
            </div> -->

            <!-- <div v-if="currentUser" class="mr-3 SelectedTile">
              <router-link to="/profile" class="nav-link">
                <font-awesome-icon icon="user" />
                {{ currentUser.username }}
              </router-link>
            </div> -->

            <!-- <div v-if="showAdminBoard" class="mr-3 SelectedTile">
              <router-link to="/create" class="nav-link">
               <i class="fa-solid fa-plus"></i>
                Add Data</router-link
              >
            </div> -->
            <!-- <div v-if="showAdminBoard" class="mr-3 SelectedTile">
              <router-link to="/setproduct" class="nav-link">
               <i class="fa fa-pencil" aria-hidden="true"></i>
                Set Product</router-link
              >
            </div> -->

            <div class="mr-3 SelectedTile">
              <router-link to="/" class="nav-link">
                <i class="fa fa-home" aria-hidden="true"></i>
                Home</router-link
              >
            </div>

            <div class="mr-3 SelectedTile">
              <router-link to="/products" class="nav-link">
                <i class="fa fa-cube" aria-hidden="true"></i>
                Products</router-link
              >
            </div>

            <!-- <div v-if="showAdminBoard" class="mr-3 SelectedTile">
              <router-link to="/gantt" class="nav-link">
                <i class="fa fa-line-chart" aria-hidden="true"></i>
                Gantt Chart
              </router-link>
            </div> -->

            <!-- <div class="mr-3 SelectedTile">
              <router-link to="/dashboard" class="nav-link">
                <font-awesome-icon icon="sign-in-alt" />
                Dashboard
              </router-link>
            </div> -->

            <!-- -show-- -->

            <div class="ma-3"></div>
            <!-- --- -->
            <div v-if="currentUser" class="ml-auto SelectedTile">
              <a class="nav-link" @click="logOut">
                <font-awesome-icon icon="sign-out-alt" /> LogOut
              </a>
            </div>

            <!-- --- -->
            <div class="ma-3"></div>
            <!-- ==== -->
          </div>
        </v-app-bar>

        <!-- drawer -------------------------------->
        <v-navigation-drawer
          v-if="drawer"
          v-model="drawer"
          class="pb-0"
          floating
          hide-overlay
          stateless
          width="250"
          color="#263238"
        >
          <v-list
            class="SelectedTile"
            active-class="SelectedTile-active"
            :items="items"
          >
            <div
              v-if="currentUser"
              class="navbar-nav ml-5 text-left SelectedTile"
            >
              <router-link to="/profile" class="nav-link">
                <font-awesome-icon icon="user" />
                {{ currentUser.username }}
              </router-link>
            </div>
            <div
              v-if="showAdminBoard"
              class="navbar-nav ml-5 text-left SelectedTile"
            >
              <router-link to="/create" class="nav-link">
                <i class="fa-solid fa-plus"></i>
                Add Data</router-link
              >
            </div>
            <div
              v-if="showAdminBoard"
              class="navbar-nav ml-5 text-left SelectedTile"
            >
              <router-link to="/setproduct" class="nav-link">
                <i class="fa fa-pencil" aria-hidden="true"></i>
                Set Product</router-link
              >
            </div>

            <div class="navbar-nav ml-5 text-left SelectedTile">
              <router-link to="/products" class="nav-link">
                <i class="fa fa-cube" aria-hidden="true"></i>
                Products</router-link
              >
            </div>

            <div
              v-if="showAdminBoard"
              class="navbar-nav ml-5 text-left SelectedTile"
            >
              <router-link to="/gantt" class="nav-link">
                <i class="fa fa-line-chart" aria-hidden="true"></i>
                Gantt Chart
              </router-link>
            </div>

            <div class="navbar-nav ml-5 text-left SelectedTile">
              <router-link to="/dashboard" class="nav-link">
                <font-awesome-icon icon="sign-in-alt" />
                Dashboard
              </router-link>
            </div>

            <div
              v-if="!currentUser"
              class="navbar-nav ml-5 text-left SelectedTile"
            >
              <router-link to="/register" class="nav-link">
                <font-awesome-icon icon="user-plus" /> Sign Up
              </router-link>
            </div>
            <div
              v-if="!currentUser"
              class="navbar-nav ml-5 text-left SelectedTile"
            >
              <router-link to="/login" class="nav-link">
                <font-awesome-icon icon="sign-in-alt" /> Login
              </router-link>
            </div>
            <div
              v-if="currentUser"
              class="navbar-nav ml-5 text-left SelectedTile"
            >
              <a class="nav-link" @click="logOut">
                <font-awesome-icon icon="sign-out-alt" /> LogOut
              </a>
            </div>
          </v-list>
        </v-navigation-drawer>

        <!-- <v-navigation-drawer v-model="drawer" location="bottom" temporary>
          <v-list :items="items"></v-list>
        </v-navigation-drawer> -->

        <!-- <v-main style="height: 500px">
          <v-card-text>
            The navigation drawer will appear from the bottom on smaller size
            screens.
          </v-card-text>
        </v-main> -->
      </v-layout>
    </v-card>
  </div>
</template>
<script>
import EventBus from "../common/EventBus";

export default {
  data: () => ({
    showmenu: true,
    //check size screen
    window: {
      width: 0,
      height: 0,
    },
    drawer: false,
    group: null,
    items: [
      {
        title: "Foo",
        value: "foo",
      },
      {
        title: "Bar",
        value: "bar",
      },
      {
        title: "Fizz",
        value: "fizz",
      },
      {
        title: "Buzz",
        value: "buzz",
      },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
  computed: {
    currentUser() {
      // console.log("store--> ", this.$store.state.auth.user);
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      // console.log("this.currentUser--> ", this.currentUser);
      if (this.currentUser && this.currentUser["roles"]) {
        return this.currentUser["roles"].includes("ROLE_ADMIN");
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser["roles"]) {
        return this.currentUser["roles"].includes("ROLE_MODERATOR");
      }

      return false;
    },
  },
  created() {
    // check scr soze
    window.addEventListener("resize", this.handleResize);
    // check scr soze
    this.handleResize();
  },
  destroyed() {
    // check scr soze
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      // check scr soze
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
      // console.log("this.window.width--> ", this.window.width);
      // console.log("this.window.height--> ", this.window.height);
    },
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/");
    },
  },
  mounted() {
    EventBus.on("logout", () => {
      this.logOut();
    });
  },
  beforeUnmount() {
    EventBus.remove("logout");
  },
};
</script>

<style scoped>
#container {
  height: 40%;
  width: 100%;
  display: flex;
}
#containerL {
  height: 40%;
  width: 100%;
  display: flex;
}
#leftThing {
  width: 10%;
  /* background-color: blue; */
}
#content {
  width: 10%;
  /* background-color: green; */
}
#rightThing {
  width: 90%;
  /* background-color: yellow; */
}
p.ex1 {
  margin-top: 25px;
}

/* ------ */
.ListItemClass {
  color: #f5f5f5;
}

.SelectedTile:hover {
  border-radius: 4px;
  background: rgb(2, 140, 203);
}

.SelectedTile-active {
  border-radius: 4px;
  background: rgba(19, 2, 250, 0.966);
}
</style>
