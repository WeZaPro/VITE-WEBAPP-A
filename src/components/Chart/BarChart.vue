<template>
  <v-container fluid>
    <v-row no-gutters class="bg-surface-variant mt-15">
      <v-col cols="12">
        <v-sheet class="pa-2 ma-2 text-center">
          <h3>BARCHART</h3>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Barchart",
  //   props: [],
  props: {
    task: Array,
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  mounted() {
    //console.log("Barchart---> ");
    //console.log("task---> ", this.task);
    this.getGoogleSheetChartData();
  },
  methods: {
    async getGoogleSheetChartData() {
      const url = import.meta.env.VITE_API_MONGO + "/admin/charts";
      await axios.get(url).then((res) => {
        console.log("Chart res.data ", res.data.data);
        this.products = res.data.data;
      });
    },
  },
};
</script>
