<template>
  <v-card class="card mt-0" max-width="600">
    <v-img height="300px" :src="img" cover></v-img>

    <v-card-title> {{ Date }} </v-card-title>

    <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

    <!-- <v-card-actions class="justify-center">
      <v-btn
        class="text-none text-subtitle-1"
        color="#5865f2"
        size="small"
        variant="flat"
        @click="clickItem(id)"
      >
        ดูรายละเอียด
      </v-btn>
    </v-card-actions> -->
    <div class="text-center">
      <v-btn
        append-icon="mdi-account-circle"
        prepend-icon="mdi-check-circle"
        color="#2196F3"
        @click="clickItem(id)"
      >
        <template v-slot:prepend>
          <v-icon color="#CDDC39"></v-icon>
        </template>

        ดูรายละเอียด

        <template v-slot:append>
          <v-icon color="#EEFF41"></v-icon>
        </template>
      </v-btn>
    </div>

    <v-card-actions>
      <!-- ---- -->
      <!-- <v-switch
        v-model="show"
        :label="`Switch: ${show.toString()}`"
        hide-details
        inset
      ></v-switch> -->
      <v-switch
        v-model="show"
        color="deep-purple"
        :label="`Promotion`"
        hide-details
        inset
      ></v-switch>
      <!-- ---- -->

      <!-- <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-up'"
        @click="show = !show"
      >
      </v-btn> -->

      <v-spacer></v-spacer>
      <v-btn color="orange-lighten-2" text="Explore"></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <div>
          <v-img height="200px" :src="imgB" cover></v-img>
        </div>

        <v-card-text>
          {{ Promo }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
export default {
  name: "CardDesign",
  props: [
    "id",
    "Date",
    "DataA",
    "DataB",
    "DataC",
    "DataD",
    "DataE",
    "img",
    "imgB",
    "DesktopBanner",
    "MobileBanner",
    "Promo",
  ],

  data() {
    return {
      model: true,
      show: false,
    };
  },
  mounted() {
    // console.log("Promo---> ", this.Promo);
  },
  methods: {
    clickItem(id) {
      // console.log("id----> ", id);
      const routeData = this.$router.resolve({
        name: "productitem",
        query: { data: id, token: 1234 },
      });
      window.open(routeData.href, "_blank");
    },
  },
  // data: () => ({
  //   show: false,
  // }),
};
</script>

<style scoped>
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding-bottom: 2px;
  border-radius: 15px;
}
</style>
