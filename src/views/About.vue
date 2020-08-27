<template>
  <div class="about">
    <h1>ETFs</h1>
    <div  v-for="etf in vtEtfs" :key="etf.id">
      <lightweight v-if="isRes" :cdata="etfData(datacollection, etf)"/>
    </div>
    <div class="Chart" v-for="etf in etfs" :key="etf.id">
      <!-- <line-example :chart-data="chartData(datacollection, 'VT')" :options="options" :width="100" :height="50" /> -->
      {{etf}}
      <line-example
        :chart-data="chartData(datacollection, etf)"
        :options="options"
        :width="200"
        :height="100"
      />
    </div>
  </div>
</template>
<script>
import LineExample from "@/components/LineExample";
import lightweight from "@/components/lightweight";
import axios from "axios";
// import  _ from 'lodash';
export default {
  name: "About",
  components: {
    LineExample,
    lightweight,
  },
  data() {
    return {
      vtEtfs: ["VT","VTI","EWJ"],
      etfs: [
        "VT",
        "VTI",
        "EWJ",
        "EWU",
        "MCHI",
        "EWL",
        "EWC",
        "EWQ",
        "EWG",
        "EWA",
        "EWT",
        "EWY",
        "EWN",
        "INDA",
        "EWD",
        "EWH",
        "EWI",
        "EWP",
        "EDEN",
        "EWZ",
        "EFNL",
        "RSX",
        "EZA",
        "KSA",
        "EWK",
        "THD",
        "EWM",
        "EWS",
        "EWW",
        "ENOR",
        "EIS",
        "EIDO",
        "EPOL",
        "QAT",
        "TUR",
        "ENZL",
        "PGAL",
        "ECH",
        "EPHE",
        "EWO",
        "EIRL",
      ],
      datacollection: {},
      options: {},
      lightweightData: {},
      isRes: false
    };
  },
  created() {
    this.getData();
  },
  methods: {
    etfData(lightweightData, etf) {
      const data = !lightweightData[etf] ? [] : lightweightData[etf];
      data['name'] = etf
      return data
    },
    chartData(datacollection, etf) {
      const data = !datacollection[etf] ? [] : datacollection[etf].periodPrice;
      const upOrDown = !datacollection[etf] ? 0 : datacollection[etf].periodChg;
      let borderColor = "darkseagreen";
      borderColor = upOrDown < 0 ? "IndianRed" : "darkseagreen";
      // console.log(etf, data);
      return {
        labels: datacollection.period, //['', '', '', '', '', '', ''],
        datasets: [
          {
            label: "",
            backgroundColor: borderColor,
            data: data,
          },
        ],
      };
    },
    fillData(res) {
      this.isRes = res.status === 200 ? true : false
      this.lightweightData = res.data.etf;
      this.datacollection = res.data.etf;
      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          // xAxes: [
          //   {
          //     display: false, //this will remove all the x-axis grid lines
          //   },
          // ],
          // yAxes: [
          //   {
          //     display: false, //this will remove all the y-axis grid lines
          //   },
          // ]
        },
        tooltips: {
          displayColors: false,
        },
      };
    },
    async getData() {
      const api =
        process.env.NODE_ENV === "production"
          ? "https://node-etfs-api.herokuapp.com/api/etfs"
          : "http://localhost:8000/api/etfs";
      await axios.get(api).then(this.fillData);
    },
  },
};
</script>
<style>
.Chart {
  max-width: 200px;
  padding: 20px;
  /* box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.4); */
  border-radius: 20px;
  margin: 50px 0;
}
</style>
