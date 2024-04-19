<template>
  <v-container fluid>
    <v-row no-gutters class="bg-surface-variant mt-15">
      <v-col cols="12">
        <v-sheet class="pa-2 ma-2 text-center">
          <h3>MAP VIEW</h3>
          <iframe width="800" height="600" :src="link"></iframe>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  name: "MyIframe",
  data() {
    return {
      link: "https://www.google.com/maps/search/?api=1&query=Onlinesabuyme",
      myIframe: null,
      getLat: "",
      getLng: "",
      mapUrl: "",
    };
  },
  created() {
    const route = useRoute();
    this.getLat = route.query.lat;
    this.getLng = route.query.lng;
    this.mapUrl = `https://www.google.com/maps/search/?api=1&query=${this.getLat}%2C${this.getLng}`;
  },
  //https://www.google.com/maps/search/?api=1&query=centurylink+field
  //https://www.google.com/maps/search/?api=1&query=Onlinesabuyme
  //13.562642339290287, 100.98743992407222
  mounted() {},
  methods: {
    onLoad(frame) {
      this.myIframe = frame.contentWindow;
    },
  },
};
</script>
