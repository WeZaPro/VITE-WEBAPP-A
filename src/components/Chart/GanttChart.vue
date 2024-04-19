<template>
  <v-container fluid>
    <v-row no-gutters class="bg-surface-variant mt-15">
      <v-col>
        <v-sheet class="pa-2 ma-2"> .v-col-auto </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2"> .v-col-auto </v-sheet>
      </v-col>
    </v-row>

    <v-row no-gutters class="bg-surface-variant mt-5">
      <v-col>
        <v-sheet class="pa-2 ma-2"> .v-col-auto </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2"> .v-col-auto </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2"> .v-col-auto </v-sheet>
      </v-col>
    </v-row>

    <v-row no-gutters class="bg-surface-variant mt-5">
      <v-col cols="2">
        <v-sheet class="pa-2 ma-2"> .v-col-2 </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2"> .v-col-auto </v-sheet>
      </v-col>
    </v-row>
  </v-container>

  <!-- ---- -->
  <v-container class="mt-10 pt-2 text-center">
    <div class="mb-5 mt-10">
      <h4>GANTT CHART</h4>
    </div>
    <v-row no-gutters>
      <v-col cols="12">
        <!-- <v-sheet class="pa-2"> .v-col-12 </v-sheet> -->
        <!-- hour, day, date, week and month. -->
        <g-gantt-chart
          chart-start="2021-01-01 12:00"
          chart-end="2021-06-30 12:00"
          precision="week"
          width="100%"
          color-scheme="dark"
          bar-start="myBeginDate"
          bar-end="myEndDate"
          @dblclick-bar="onMouseupBar($event.bar, $event.e, $event.datetime)"
          @contextmenu-bar="
            onContextmenuBar($event.bar, $event.e, $event.datetime)
          "
          @drag-bar="onDragBar($event.bar, $event.e)"
          @dragend-bar="onDragendBar($event.bar, $event.e, $event.movedBars)"
        >
          <g-gantt-row label="My row 1" :bars="row1BarList" />
          <g-gantt-row label="My row 2" :bars="row2BarList" />
          <g-gantt-row label="My row 3" :bars="row3BarList" />
        </g-gantt-chart>
      </v-col>
    </v-row>

    <div>
      <button
        class="btn btn-danger mb-5 mt-10"
        @click="getChartData"
        style="width: 30%; height: 100%; color: white"
      >
        Send
      </button>
    </div>
  </v-container>
</template>

<script>
// import { ref } from "vue";

export default {
  name: "GanttChart",
  data() {
    return {
      // showmenu: true,
      // //check size screen
      // window: {
      //   width: 0,
      //   height: 0,
      // },
      rowName: "",
      getStartDate: "",
      getEndDate: "",
      startChart: "",
      endChart: "",
      userTest: "Gantt",
      row1BarList: [],
      row2BarList: [],
      row3BarList: [],
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
    this.getDataChart();
    //
  },
  // created() {
  //   // check scr soze
  //   window.addEventListener("resize", this.handleResize);
  //   // check scr soze
  //   this.handleResize();
  // },
  destroyed() {
    // check scr soze
    window.removeEventListener("resize", this.handleResize);
  },

  methods: {
    ganttChart(start, end, rowName) {
      // console.log("save data start ", start);
      // console.log("save data end ", end);
      // console.log("save data rowName ", rowName);

      let retString = localStorage.getItem("GanttKey");
      //console.log("retString", retString);
      var stringToJsonObject = JSON.parse(retString);

      // console.log("stringToJsonObject length", stringToJsonObject);

      //

      var inputData = [
        {
          id: 2,
          name: "authum-123-898989",
          email: "mail@mail.com",
          age: 30,
        },
      ];

      // var inputData = [
      //   {
      //     id: 1,
      //     name: "tawee-7777",
      //     email: "mail@mail.com",
      //     age: 30,
      //   },
      // ];

      console.log("stringToJsonObject ", stringToJsonObject);

      var resArr = inputData.reduce((ac, x) => {
        if (stringToJsonObject !== null) {
          var priceMatch = stringToJsonObject.find((z) => z.id === x.id);
          if (!priceMatch) return ac; //bail out if no priceMatch found

          var res = Object.assign({}, x, priceMatch);
          ac.push(res);
          return ac;
        } else {
          return [];
        }
      }, []);
      const checkArray = resArr.length;
      console.log("checkArray>>>> ", checkArray);

      //

      //console.log("checkArray>>>> ", checkArray);
      //
      if (checkArray === 0) {
        console.log("save new data === 0 >>>> ");
        this.addGantt(inputData);
      } else if (checkArray > 0) {
        console.log("stringToJsonObject > 0 >>>> ");
        console.log("stringToJsonObject>>>> ", stringToJsonObject);
        this.setUpdateGantt(stringToJsonObject, inputData);
      }
    },
    setInsertRow(localStorage, inputData) {},

    setUpdateGantt(localStorage, inputData) {
      let index = "";
      localStorage.forEach((e, i) => {
        // console.log("e.id >>> ", e.id);
        if (inputData[0].id === e.id) {
          index = localStorage.findIndex((el) => el.id == inputData[0].id);
        }
      });
      console.log("index>>>> ", index);

      this.upDateGantt(index, inputData, localStorage);
    },
    addGantt(inputData) {
      // set new localStorage
      console.log("addGantt inputData >>> ", inputData);
      const getLocal = window.localStorage.getItem(
        "GanttKey",
        JSON.stringify(inputData)
      );
      console.log("getLocal ,", getLocal);
      if (getLocal === null) {
        window.localStorage.setItem("GanttKey", JSON.stringify(inputData));
      } else {
        const oldLocalStorage = localStorage.getItem("GanttKey");
        const getStorage = JSON.parse(oldLocalStorage);

        getStorage.unshift(inputData[0]);
        console.log("getStorage inputData >>> ", getStorage);
        window.localStorage.setItem("GanttKey", JSON.stringify(getStorage));
      }
    },
    upDateGantt(index, inputData, localStorage) {
      // update localStorage
      console.log("upDateGantt inputData >>> ", inputData);
      [localStorage].forEach((e, i) => {
        e[index] = inputData[0];
        window.localStorage.setItem("GanttKey", JSON.stringify(e));
      });
    },

    getChartData(start, end, rowName) {
      console.log("save data start ", start);
      console.log("save data end ", end);
      console.log("save data rowName ", rowName);

      const employees = {
        id: 1,
        name: "Shyam-aA43-999",
        email: "shyam23@gmail.com",
        age: 30,
      };

      //console.log("employees >>>> ", employees[0].id);
      const _index = employees.id;

      var _array = [];
      _array.push(employees);

      let retString = localStorage.getItem("keyABC");
      var stringToJsonObject = JSON.parse(retString);
      //console.log("get Local---> ", stringToJsonObject);

      if (localStorage.getItem("keyABC") === null) {
        // console.log("NO DATA STORAGE ---> ");
        // console.log("save DATA---> ", _array);
        localStorage.setItem("keyABC", JSON.stringify(_array));
      } else {
        const arrStorage = new Array(
          JSON.parse(localStorage.getItem("keyABC"))
        );
        //console.log("arrStorage >>>> ", arrStorage);
        arrStorage.forEach((e, i) => {
          // console.log("e >>>>if e[0].id ", e[0].id);
          console.log("e if ", e);
          console.log("employees.id if ", employees.id);
          console.log("e.id if ", e.id);
          console.log("e[i].id if ", e[i].id);

          console.log("i >>>> ", i);
          if (e[i].id == employees.id) {
            const index = arrStorage[i].findIndex(
              (el) => el.id == employees.id
            );
            console.log("--------A index ", index);
            // console.log("e >>>>if ", e);
            //console.log("----arrStorage before----A", e);
            e[index] = employees;
            //console.log("----arrStorage after----A", e);
            localStorage.setItem("keyABC", JSON.stringify(e));
          } else {
            console.log("--------B");
            //console.log("e >>>>else ", e);
            const oldLocalStorage = localStorage.getItem("keyABC");
            // const updateData = employees;
            const getStorage = JSON.parse(oldLocalStorage);

            // const arrA = [
            //   {
            //     id: 1,
            //     name: "Shyam-ass",
            //     email: "shyam23@gmail.com",
            //     age: 30,
            //   },
            // ];

            // const obj = {
            //   id: 2,
            //   name: "Wees",
            //   email: "shyam23@gmail.com",
            //   age: 40,
            // };
            // arrA.unshift(obj);
            getStorage.unshift(employees);
            //console.log("getStorage>>>>", getStorage);

            //Todo ************ติดปัญหาตรงนี้********************
            // ***** save 2 array ได้แล้ว เหลือ save ซ้ำตัวเดิมแล้วหาย น่าจะไม่เข้าเงื่อนไข if e[0].id === employees.id
            localStorage.setItem("keyABC", JSON.stringify(getStorage));
          }
        });
      }
    },

    onMouseupBar(GanttBarObject, MouseEvent, string) {
      console.log("onMouseupBar->GanttBarObject---> ", GanttBarObject);

      //   console.log("onMouseupBar->MouseEvent---> ", MouseEvent);
      //   console.log("onMouseupBar->string---> ", string);
      //   console.log("e1--->id ", GanttBarObject.ganttBarConfig.id);
      //   console.log("e1--->title ", GanttBarObject.ganttBarConfig.title);
      //   console.log("e1--->detail ", GanttBarObject.ganttBarConfig.detail);
      //   console.log("e1--->img ", GanttBarObject.ganttBarConfig.img);
      //   console.log("e11---> ", GanttBarObject.myBeginDate);
      //   console.log("e111---> ", GanttBarObject.ganttBarConfig.label);
    },
    onDragBar(GanttBarObject, MouseEvent) {
      //   console.log("onDragBar->GanttBarObject---> ", GanttBarObject);
      //   console.log("onDragBar->MouseEvent---> ", MouseEvent);
    },
    onDragendBar(GanttBarObject, MouseEvent, movedBars) {
      //console.log("onDragendBar->GanttBarObject---> ", GanttBarObject);
      // console.log("onDragendBar->movedBars---> ", movedBars);
      // console.log(
      //   "onDragendBar->GanttBarObject---> ",
      //   GanttBarObject.ganttBarConfig.id
      // );
      this.rowName = GanttBarObject.ganttBarConfig.id;
      this.getStartDate = GanttBarObject.myBeginDate;
      this.getEndDate = GanttBarObject.myEndDate;

      //console.log("onDragendBar->MouseEvent---> ", MouseEvent.isTrusted);
      // save data
      if (MouseEvent.isTrusted === true) {
        // this.ganttChart(this.getStartDate, this.getEndDate, this.rowName);
        //this.getChartData(this.getStartDate, this.getEndDate, this.rowName);

        this.ganttChart(this.getStartDate, this.getEndDate, this.rowName);
      }

      //   console.log("onDragendBar->MouseEvent---> ", MouseEvent);
      //   console.log("onDragendBar->movedBars---> ", movedBars);
    },
    getDataChart() {
      // random color
      var colorsA = [
        "#ff1a8c",
        "#29a329",
        "#6b00b3",
        "#ff8c1a",
        "#66ff33",
        "#b33c00",
      ];

      var colorsB = [
        "#ff66ff",
        "#00ff00",
        "#0000ff",
        "#ff3333",
        "#ffff00",
        "#ff6600",
      ];

      var colorsC = [
        "#ff66ff",
        "#00ff00",
        "#0000ff",
        "#ff3333",
        "#ffff00",
        "#ff6600",
      ];
      var random_colorA = colorsA[Math.floor(Math.random() * colorsA.length)];
      var random_colorB = colorsB[Math.floor(Math.random() * colorsB.length)];
      var random_colorC = colorsC[Math.floor(Math.random() * colorsC.length)];

      this.row1BarList = [
        {
          myBeginDate: "2021-01-01 13:00",
          myEndDate: "2021-03-31 19:00",
          ganttBarConfig: {
            // each bar must have a nested ganttBarConfig object ...
            id: "unique-id-1", // ... and a unique "id" property
            label: "ChartA",
            hasHandles: true,
            style: {
              // arbitrary CSS styling for your bar
              background: random_colorA,
              borderRadius: "20px",
              color: "black",
            },
          },
        },
      ];
      this.row2BarList = [
        {
          myBeginDate: "2021-02-01 00:00",
          myEndDate: "2021-05-10 02:00",
          ganttBarConfig: {
            id: "unique-id-2",
            hasHandles: true,
            label: "ChartB",
            style: {
              // arbitrary CSS styling for your bar
              background: random_colorB,
              borderRadius: "20px",
              color: "black",
            },
          },
        },
      ];
      this.row3BarList = [
        {
          myBeginDate: "2021-05-01 00:00",
          myEndDate: "2021-06-10 02:00",
          ganttBarConfig: {
            id: "unique-id-3",
            hasHandles: true,
            label: "ChartC",
            style: {
              // arbitrary CSS styling for your bar
              background: random_colorC,
              borderRadius: "20px",
              color: "black",
            },
          },
        },
      ];
    },
  },
};
</script>
