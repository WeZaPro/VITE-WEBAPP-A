<template>
  <v-container fluid>
    <v-row no-gutters class="bg-surface-variant mt-15">
      <v-col cols="12">
        <v-sheet class="pa-2 ma-2 text-center">
          <h3>DASHBOARD</h3>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row no-gutters class="mt-1">
      <v-col cols="12">
        <v-sheet class="pa-2 ma-2 text-center">
          <!-- <Barchart :task="this.products" /> -->
          <Barchart />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Barchart from "./BarChart.vue";

export default {
  name: "Profile",
  components: {
    Barchart,
  },
  data() {
    return {
      userTest: "test",
      arr: [{ A: "1" }, { A: "2" }, { A: "3" }],
      products: [],
    };
  },
  computed: {},
  mounted() {
    // this.getGoogleSheetChartData();
  },
  methods: {
    // async getGoogleSheetChartData() {
    //   const url = "http://localhost:8080/api/admin/charts";
    //   await axios.get(url).then((res) => {
    //     //console.log("Chart res.data ", res.data.data);
    //     this.products = res.data.data;
    //   });
    // },
  },
};
</script>

<style scoped>
/* :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
  
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
  
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  } */

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

/* body { */
/* margin: 0;
      display: flex;
      place-items: center;
      min-width: 320px;
      min-height: 100vh; */
/* margin: 0; */
/* display: flex; */
/* place-items: center; */
/* min-width: 320px; */
/* padding: 0;
      width: 100%;
      min-width: 600px;
      min-height: 100vh; */
/* } */

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

/* .card {
    padding: 2em;
  } */

#app {
  max-width: 1280px;

  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}
</style>
