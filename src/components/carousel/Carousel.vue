<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      cover
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://img.freepik.com/free-photo/fresh-cocktails-with-ice-lemon-lime-fruits-generative-ai_188544-12370.jpg",
        },
        {
          src: "https://img.freepik.com/free-photo/various-ingredients-shabu-hot-pot-with-sauce_1150-35279.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707436800&semt=ais",
        },
        {
          src: "https://img.freepik.com/premium-photo/top-view-people-eating-shabu-shabu-hot-pot-with-fresh-sliced-meat-sea-food-vegetables-with-black-background_67155-4592.jpg",
        },
        {
          src: "https://img.freepik.com/premium-photo/set-shabu-shabu-hot-pot-fresh-sliced-meat-sea-food-vegetables_41158-2117.jpg",
        },
      ],
    };
  },
};
</script>
