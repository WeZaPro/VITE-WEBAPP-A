<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-sheet class="pa-2 ma-2 text-center">
            <div
              ref="map"
              style="width: 600px; height: 500px; margin: 0 auto"
            ></div>
          </v-sheet>
          <!-- <div
            ref="map"
            style="width: 600px; height: 500px"
          ></div> -->
        </v-col>
      </v-row>
    </v-container>
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
    getDirections(start, end) {
      // console.log("start--> ", start);
      // console.log("end--> ", end);
      // กำหนดข้อมูลสำหรับเส้นทาง
      const request = {
        // origin: this.start,
        // destination: this.end,
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

            this.getDirections(_address[0], _address[1]);
          });
        });
      } else {
        alert("Geolocation is not supported by this browser.");
      }
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

      const sendCurrentPlaceName =
        currentPlaceName.results[0].formatted_address;
      const sendTargetPlaceName = targetPlaceName.results[0].formatted_address;
      return [sendCurrentPlaceName, sendTargetPlaceName];
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
