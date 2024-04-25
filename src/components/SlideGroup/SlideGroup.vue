<template>
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <!-- ================================================= -->
        <div class="carousel-item active">
          <div class="cards-wrapper">
            <div class="card" v-for="item in setA" :key="item">
              <img
                :src="item.src"
                class="card-img-top"
                alt="..."
                style="width: 640px; height: 360px"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
        <!-- ================================================= -->
        <div class="carousel-item">
          <div class="cards-wrapper">
            <div class="card" v-for="item in setB" :key="item">
              <img
                :src="item.src"
                class="card-img-top"
                alt="..."
                style="width: 640px; height: 360px"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <!-- --- -->
          </div>
        </div>
        <!-- ================================================= -->
        <div class="carousel-item">
          <div class="cards-wrapper">
            <div class="card" v-for="item in setC" :key="item">
              <img
                :src="item.src"
                class="card-img-top"
                alt="..."
                style="width: 640px; height: 360px"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
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
          src: "https://drive.google.com/thumbnail?sz=w1000&id=1nwda4V_HvJ39M15BGkn4XpnkfrwdWB-E",
        },
        {
          id: 2,
          src: "https://drive.google.com/thumbnail?sz=w1000&id=12INNqnMHtNAQ8G-1rG7VH9D8VM80KnSo",
        },
        {
          id: 3,
          src: "https://drive.google.com/thumbnail?sz=w1000&id=1g6XeHoflteEKXcTRO9VfIJPBFhK1cZzV",
        },
        {
          id: 4,
          src: "https://drive.google.com/thumbnail?sz=w1000&id=1eFGqtziU2Rx2TjgHL3oxyMuJuN_cgpC7",
        },
        {
          id: 5,
          src: "https://drive.google.com/thumbnail?sz=w1000&id=1l421lTpwRVUdJQjWTNw0dShGJdNs91nR",
        },
        {
          id: 6,
          src: "https://drive.google.com/thumbnail?sz=w1000&id=1-zOgYXPo74ZYiyPH9cDlayW3-vD4a1Bx",
        },
        {
          id: 7,
          src: "https://drive.google.com/thumbnail?sz=w1000&id=1nwda4V_HvJ39M15BGkn4XpnkfrwdWB-E",
        },
        {
          id: 8,
          src: "https://drive.google.com/thumbnail?sz=w1000&id=12INNqnMHtNAQ8G-1rG7VH9D8VM80KnSo",
        },
        {
          id: 9,
          src: "https://drive.google.com/thumbnail?sz=w1000&id=1l421lTpwRVUdJQjWTNw0dShGJdNs91nR",
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
</style>
