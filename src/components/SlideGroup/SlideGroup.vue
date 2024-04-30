<template>
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <!-- ===================================className=" grid-container"============== -->
        <div class="carousel-item active">
          <!-- grid-container -->
          <div class="cards-wrapper">
            <div class="card" v-for="item in setA" :key="item">
              <!-- <img
                :src="item.src"
                class="card-img-top"
                alt="..."
                style="width: 500px; height: 400px"
              /> -->
              <v-img
                class="d-block w-100"
                :src="item.src"
                :width="300"
                aspect-ratio="1"
                cover
              ></v-img>
              <div class="card-body">
                <h5 class="card-title">Nabba Premium</h5>
                <p class="card-text">
                  Unlimited vegetables, couldn't get enough of the mushrooms.
                  Drinks were also... Not Bad for Sukiyaki
                </p>
                <a href="#" class="btn btn-success">Booking Now</a>
              </div>
            </div>
          </div>
        </div>
        <!-- ================================================= -->
        <div class="carousel-item">
          <div class="cards-wrapper">
            <div class="card" v-for="item in setB" :key="item">
              <!-- <img
                :src="item.src"
                class="card-img-top"
                alt="..."
                style="width: 500px; height: 400px"
              /> -->
              <v-img
                class="d-block w-100"
                :src="item.src"
                :width="300"
                aspect-ratio="1"
                cover
              ></v-img>
              <div class="card-body">
                <h5 class="card-title">Japanese Dining</h5>
                <p class="card-text">
                  Unlimited vegetables, couldn't get enough of the mushrooms.
                  Drinks were also... Not Bad for Sukiyaki
                </p>
                <a href="#" class="btn btn-success">Booking Now</a>
              </div>
            </div>
            <!-- --- -->
          </div>
        </div>
        <!-- ================================================= -->
        <div class="carousel-item">
          <div class="cards-wrapper">
            <div class="card" v-for="item in setC" :key="item">
              <!-- <v-img
                :src="item.src"
                class="card-img-top"
                alt="..."
                style="width: 500px; height: 400px"
                cover
              /> -->
              <v-img
                class="d-block w-100"
                :src="item.src"
                :width="300"
                aspect-ratio="1"
                cover
              ></v-img>
              <div class="card-body">
                <h5 class="card-title">Thai Dining</h5>
                <p class="card-text">
                  Unlimited vegetables, couldn't get enough of the mushrooms.
                  Drinks were also... Not Bad for Sukiyaki
                </p>
                <a href="#" class="btn btn-success">Booking Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data: function () {
    return {
      setA: [],
      setB: [],
      setC: [],
      items: [
        {
          id: 1,
          src: "https://drive.google.com/thumbnail?sz=w1000&id=1b1PguThKaRjz_uKztpvjfAkICTkidVu2",
        },
        {
          id: 2,
          src: "https://drive.google.com/thumbnail?sz=w1000&id=1mj2XIc2HgTlmov5lppZtYkKG8_TCeCHq",
        },
        {
          id: 3,
          src: "https://drive.google.com/thumbnail?sz=w1000&id=1ho1yIeCPP5cU_ixc9OuX5eVVviUJJTO5",
        },
        {
          id: 4,
          src: "https://drive.google.com/thumbnail?sz=w1000&id=1uxZbo4s8fsiETpIE_7xwIMdQKfT4PBHg",
        },
        {
          id: 5,
          src: "https://drive.google.com/thumbnail?sz=w1000&id=11a-Gzq42Kkr1ZVNvzpxWWuLgdOkt4rRm",
        },
        {
          id: 6,
          src: "https://drive.google.com/thumbnail?sz=w1000&id=1LZH3NQsGHiX4ydzUvvrPf-tmSgn-MY7h",
        },
        {
          id: 7,
          src: "https://drive.google.com/thumbnail?sz=w1000&id=1yQb21FN2au4ZSFlvuR3xylbv0FQT_qnK",
        },
        {
          id: 8,
          src: "https://drive.google.com/thumbnail?sz=w1000&id=1ndaL5r2vL-tumKrZtxIEnX2u-jh6nvUx",
        },
        {
          id: 9,
          src: "https://drive.google.com/thumbnail?sz=w1000&id=1LBHvdbReafryI5cAnRAKVK_NTqv4FKsw",
        },
      ],
    };
  },
  mounted() {},
  created() {
    this.setItem();
  },
  computed: {},
  methods: {
    setItem() {
      this.items.forEach((e, i) => {
        console.log("e ", e.id);
        //this.setA.push(e);
        if (e.id < 4) {
          this.setA.push(e);
        }
      });

      this.items.forEach((e, i) => {
        if (e.id > 3 && e.id < 7) {
          this.setB.push(e);
        }
      });

      this.items.forEach((e, i) => {
        if (e.id > 6 && e.id < 10) {
          this.setC.push(e);
        }
      });

      console.log("this.setA --> ", this.setA);
      console.log("this.setB --> ", this.setB);
      console.log("this.setC --> ", this.setC);
    },
  },
};
</script>
<style scoped>
.image-fit {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
img {
  width: 300px;
  height: 337px;
  object-fit: fill;
}

.cards-wrapper {
  display: flex;
  justify-content: center;
}
.card img {
  max-width: 100%;
  max-height: 100%;
}
.card {
  margin: 0 0.5em;
  box-shadow: 2px 6px 8px 0 rgba(22, 22, 26, 0.18);
  border: none;
  border-radius: 3;
}
.carousel-inner {
  padding: 1em;
}
.carousel-control-prev,
.carousel-control-next {
  background-color: #e1e1e1;
  width: 5vh;
  height: 5vh;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
}
@media (min-width: 768px) {
  .card img {
    height: 11em;
  }
}

.carousel-inner > .item > img {
  width: 640px;
  height: 360px;
}

/* ---- */
.grid-container {
  display: grid;
  grid-column-gap: 0.8rem;
  grid-row-gap: 0.8rem;
  padding: 3%;
  /* /test */
}
@media (min-width: 600px) {
  .grid-container {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media (min-width: 800px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
.item1 {
  grid-area: a;
  align-self: center;
  justify-self: center;
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
</style>
