<template>
  <div>
    <v-card class="card mt-0" max-width="600">
      <!-- <v-card-title> MAP </v-card-title> -->
      <!-- <v-card-actions class="justify-center">
        <v-btn
          class="text-none text-subtitle-1"
          color="#5865f2"
          size="small"
          variant="flat"
          @click="gotoMap(id)"
        >
          เปิดแผนที่
        </v-btn>
      </v-card-actions> -->

      <div class="text-center">
        <v-btn
          append-icon="mdi-account-circle"
          prepend-icon="mdi-check-circle"
          color="#5865f2"
          @click="gotoMap(id)"
        >
          <template v-slot:prepend>
            <v-icon color="success"></v-icon>
          </template>

          เปิดแผนที่

          <template v-slot:append>
            <v-icon color="warning"></v-icon>
          </template>
        </v-btn>
      </div>

      <div
        class="mt-5"
        ref="map"
        style="width: 600px; height: 500px; margin: 0 auto"
      ></div>
    </v-card>

    <!-- แสดงแผนที่ -->
    <!-- <div ref="map" style="width: 600px; height: 500px"></div> -->

    <!-- ฟอร์มสำหรับกรอกข้อมูลเริ่มต้นและปลายทาง -->
    <!-- <form @submit.prevent="getDirections">
        <label for="start">จุดเริ่มต้น:</label>
        <input type="text" id="start" v-model="start" required />
        <label for="end">จุดปลายทาง:</label>
        <input type="text" id="end" v-model="end" required />
        <button type="submit">ค้นหาเส้นทาง</button>
      </form> -->
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import axios from "axios";
export default {
  props: {
    data: Array,
  },
  data() {
    return {
      getPlace_id: "",
      getTargetPlaceName: "",
      itemProduct: [],
      lat: "",
      lng: "",
      start: "",
      end: "",
      directionsService: null,
      directionsDisplay: null,
      itemID: "",
    };
  },
  created() {
    const route = useRoute();

    this.itemID = route.query.data;
    // console.log("this.itemID ---> map page ", this.itemID);

    // 13.87442781996809, 100.74405613413353
  },
  mounted() {
    // console.log("data >>>>> ", this.data);
    // สร้าง Google Map
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();
    const map = new google.maps.Map(this.$refs.map, {
      zoom: 12,
      center: { lat: 13.562704917188565, lng: 100.98740773760905 }, // ตำแหน่งศูนย์กลางแผนที่
    });
    this.directionsDisplay.setMap(map);

    // get current location
    // target location lat = 13.59255804362438, lng=100.85443523509123

    // const get_target_lat = this.data[0];
    // const get_target_lng = this.data[1];
    // this.getCurrentLocation(get_target_lat, get_target_lng);

    this.getGoogleSheetData(this.itemID);
  },
  methods: {
    gotoMap() {
      // console.log("lat : ", this.lat);
      // console.log("lng : ", this.lng);
      // const routeData = this.$router.resolve({
      //   name: "mapview",
      //   query: { lat: this.lat, lng: this.lng },
      // });
      //window.open(routeData.href, "_blank");

      console.log("place name  before--> ", this.getTargetPlaceName);

      // ใส่ + ในช่องว่าง -> getTargetPlaceName
      this.getTargetPlaceName = this.getTargetPlaceName.replace(/ /g, "+");
      //console.log("place name  after--> ", this.getTargetPlaceName);
      console.log("GOTO MAP getPlace_id", this.getPlace_id);
      console.log("GOTO MAP this.lat", this.lat);
      console.log("GOTO MAP this.lng", this.lng);
      // template นี้
      //www.google.com/maps/search/?api=1&query=47.5951518%2C-122.3316393&query_place_id=ChIJKxjxuaNqkFQR3CK6O1HNNqY
      // ใช้ reponse นี้ หา place_id
      //https://maps.googleapis.com/maps/api/geocode/json?latlng=13.565903535265374,101.18060283342444&sensor=false&key=AIzaSyCwo24qG8W8yYloJ6dNMKRvD_-fLZw70G4
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${this.lat}%2C${this.lng}&query_place_id=${this.getPlace_id}`,
        "_blank"
      );
      //
    },
    getDirections(start, end) {
      // กำหนดข้อมูลสำหรับเส้นทาง
      const request = {
        origin: start,
        destination: end,
        travelMode: "DRIVING",
      };
      // ส่งคำขอเพื่อหาเส้นทาง
      this.directionsService.route(request, (result, status) => {
        // console.log("result--> ", result);
        // console.log("status--> ", status);
        if (status === "OK") {
          // แสดงเส้นทางบนแผนที่
          this.directionsDisplay.setDirections(result);
        } else {
          // กรณีไม่พบเส้นทาง
          window.alert("ไม่สามารถค้นหาเส้นทางได้");
        }
      });
    },
    getCurrentLocation(get_target_lat, get_target_lng) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          // convert lat lng to place name
          this.convertToPlace(
            position.coords.latitude,
            position.coords.longitude,
            get_target_lat,
            get_target_lng
          ).then((_address) => {
            // console.log("_address[0]--> ", _address[0]);
            // console.log("_address[1]--> ", _address[1]);
            const _current = _address[0];
            const _destination = _address[1];
            const _urlPlaceName = _address[2];

            this.getDataFromUrlPlaceName(_urlPlaceName);

            this.getDirections(_current, _destination);
          });
        });
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    },
    async getDataFromUrlPlaceName(url) {
      const send_place_id = [];
      await axios
        .get(url)
        .then(function (response) {
          //console.log("placename res--> ", response.data.results[0].place_id);
          const get_place_id = response.data.results[0].place_id;
          //console.log("get_place_id>>>> ", get_place_id);
          // this.getPlace_id.push(get_place_id);
          // console.log("this.getPlace_id>>>> ", this.getPlace_id);
          send_place_id.push({ get_place_id });
        })
        .catch(function (error) {
          console.log(error);
        });

      this.getPlace_id = send_place_id[0].get_place_id;
      console.log("this.getPlace_id  ", this.getPlace_id);

      return send_place_id[0].get_place_id;
    },

    async convertToPlace(latitude, longitude, get_target_lat, get_target_lng) {
      const apiKey = "AIzaSyCwo24qG8W8yYloJ6dNMKRvD_-fLZw70G4";

      //***************** */
      // Convert to place name / current location
      const responseCurrentPlace = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=false&key=${apiKey}`
      );
      const currentPlaceName = await responseCurrentPlace.json();

      //***************** */
      // Convert to place name / target location
      const target_lat = get_target_lat; // รับค่าจาก target
      const target_lng = get_target_lng; // รับค่าจาก target
      const responseTargetPlace = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${target_lat},${target_lng}&sensor=false&key=${apiKey}`
      );
      const targetPlaceName = await responseTargetPlace.json();

      // console.log("responseTargetPlace.json()  ", responseTargetPlace);
      // console.log("responseTargetPlace=>url ", responseTargetPlace.url);

      const sendCurrentPlaceName =
        currentPlaceName.results[0].formatted_address;
      const sendTargetPlaceName = targetPlaceName.results[0].formatted_address;
      this.getTargetPlaceName = targetPlaceName.results[0].formatted_address;

      return [
        sendCurrentPlaceName,
        sendTargetPlaceName,
        responseTargetPlace.url,
      ];
    },

    //
    async getGoogleSheetData(id) {
      //console.log(" this.token ", this.token);
      this.HEADER = {
        headers: { "x-access-token": this.token },
      };
      const url = import.meta.env.VITE_API_MONGO + "/admin/products";
      await axios.get(url, this.HEADER).then((res) => {
        this.products = res.data.data;

        this.products.forEach((element) => {
          if (element.id == id) {
            this.itemProduct.push(element);
          }
        });
        this.lat = this.itemProduct[0].DataD;
        this.lng = this.itemProduct[0].DataE;
        // console.log("this.lat ---> ", this.lat);
        // console.log("this.lng ---> ", this.lng);
        this.getCurrentLocation(this.lat, this.lng);
      });
    },
  },
};
</script>

<style scoped>
/* สไตล์ CSS สำหรับแอปพลิเคชัน Vue.js */
</style>
