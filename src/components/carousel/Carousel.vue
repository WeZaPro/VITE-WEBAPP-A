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
          src: "https://inwfile.com/s-cf/8dkdru.jpg",
        },
        {
          src: "https://www.octopus.co.th/cdn/shop/products/962252-385045.jpg?v=1631293298",
        },
        {
          src: "https://33production.com/wp-content/uploads/2019/05/00.jpg",
        },
        {
          src: "https://www.โล่รางวัล.com/wp-content/uploads/2021/09/Banner-web23-%E0%B9%82%E0%B8%A5%E0%B9%88%E0%B8%AD%E0%B8%B0%E0%B8%84%E0%B8%A3%E0%B8%B4%E0%B8%A5%E0%B8%B4%E0%B8%84%E0%B8%AA%E0%B8%B3%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%88.jpg.webp",
        },
      ],
    };
  },
};
</script>
