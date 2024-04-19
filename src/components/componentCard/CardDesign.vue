<template>
  <v-card class="card mt-0" max-width="600">
    <v-img height="300px" :src="img" cover></v-img>

    <v-card-title> {{ Date }} </v-card-title>

    <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

    <v-card-actions class="justify-center">
      <!-- <v-btn> Detail </v-btn> -->
      <v-btn
        class="text-none text-subtitle-1"
        color="#5865f2"
        size="small"
        variant="flat"
        @click="clickItem(id)"
      >
        ดูรายละเอียด
      </v-btn>
    </v-card-actions>

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
        :label="`Detail`"
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
          <v-img height="300px" :src="imgB" cover></v-img>
        </div>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he
          could deliver. You won't have time for sleeping, soldier, not with all
          the bed making you'll be doing. Then we'll go with that data file!
          Hey, you add a one and two zeros to that or we walk! You're going to
          do his laundry? I've got to find a way to escape.
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
  ],

  data() {
    return {
      model: true,
      show: false,
    };
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
