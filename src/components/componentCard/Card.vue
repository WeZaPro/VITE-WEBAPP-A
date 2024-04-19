<template lang="">
  <div class="card">
    <!-- <v-img
      class="px-2"
      src="https://png.pngtree.com/element_our/png/20181214/real-estate-house-logo-design-template-vector-illustration-png_269520.jpg"
      style="width: 100%"
    /> -->
    <!-- <div class="card"> -->
    <div class="card">
      <img class="card" :src="img" :alt="id" style="width: 100%" />
      <div className="container">
        <h3>{{ Date }}</h3>
        <p>{{ DataA }}</p>
        <p>{{ DataB }}</p>
      </div>
    </div>

    <button type="button" class="btn btn-primary">Primary</button>
    <!-- <v-btn
      color="teal-accent-4"
      text="Learn More"
      variant="text"
      @click="reveal = true"
    ></v-btn> -->
    <!-- <div class="card-body">
      <img src="../../assets/vue.svg" :alt="name" style="width: 100%" />
      <router-link :to="{ path: path_to, query: { model: model } }">
    </div> -->
  </div>
</template>
<script>
export default {
  name: "Card",
  // props: ["id", "title", "userId", "body"],
  props: [
    "id",
    "Date",
    "DataA",
    "DataB",
    "DataC",
    "DataD",
    "DataE",
    "img",
    "imB",
  ],
  // dataBox: {

  //   type: [Array, Object],
  // },
  data() {
    return {
      ArrData: [],
      _name: "",
    };
  },
  created() {},
  mounted() {
    console.log("dataBox ", this.dataBox);
  },
};
</script>
<style scoped>
div.ex1 {
  width: 100%;
  padding: 0px 0px;
  margin: auto;
  /* border: 3px solid #73ad21; */
}
.card-table {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 20px;
  padding-bottom: 10px;
}
/* On mouse-over, add a deeper shadow */
.card-table:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding-bottom: 2px;
}
/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
/* Add some padding inside the card container */
.container {
  padding: 6px 16px;
}
.grid-container {
  display: grid;
  grid-column-gap: 0.8rem;
  grid-row-gap: 0.8rem;
  padding: 3%;
}
@media (min-width: 576px) {
  .grid-container {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media (min-width: 992px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
/* .grid-container {
    display: grid;
    grid-column-gap: 5rem;
    grid-row-gap: 5rem;
  }
  @media (min-width: 576px) {
    .grid-container {
      grid-template-columns: repeat(1, 1fr);
    }
  } */
@media (min-width: 992px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* space */
.mt-0 {
  margin-top: 0 !important;
}
.mt-1 {
  margin-top: 4% !important;
}

.ml-2 {
  margin-left: 10 !important;
}

.px-2 {
  padding-left: 10 !important;
  padding-right: 10 !important;
}

.p-3 {
  padding: 10 !important;
}
</style>
