<template>
  <v-app class="v-data-footer">
    <!-- <v-footer color="green" height="200" width="auto" dark> -->
    <v-footer
      color="green"
      absolute
      inset
      app
      height="200"
      width="auto"
      class=""
    >
      <v-container class="">
        <v-row justify="center" class="my-4 text-center">
          <v-col cols="12"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit.</v-col
          >
          <v-col cols="12">
            <v-btn v-for="icon in icons" :key="icon" text dark>
              <v-icon>{{ icon }}</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="12" class="align-center"
            >&copy; 2022 Coding Beauty</v-col
          >
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  data: () => {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-instagram", "mdi-youtube"],
    };
  },
};
</script>
<style scoped>
/* ::v-deep .v-data-footer {
  padding: 0 100px;
} */
</style>
