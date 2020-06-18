<template>
  <div class="about">
    <h1>ETFs</h1>
    <div class="Chart" v-for="etf in etfs" :key="etf.id">
      <!-- <line-example :chart-data="chartData(datacollection, 'VT')" :options="options" :width="100" :height="50" /> -->
      {{etf}} <line-example :chart-data="chartData(datacollection, etf)" :options="options" :width="200" :height="100" />
    </div>
  </div>
</template>
<script>
import LineExample from '@/components/LineExample'
import axios from 'axios'

export default {
  name: 'About',
  components: {
    LineExample,
  },
  data() {
    return {
      etfs: ['VT','VTI','EWJ','EWU','MCHI','EWL','EWC','EWQ','EWG','EWA','EWT','EWY','EWN','INDA','EWD','EWH'],
      datacollection: {},
      options: {}
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    chartData(datacollection, etf) {
      const data = !datacollection[etf] ? [] : datacollection[etf].periodPrice
      return {
        labels: datacollection.period, //['', '', '', '', '', '', ''],
        datasets: [
          {
            label: '',
            backgroundColor: 'darkseagreen',
            data: data,
          },
        ],
      }
    },
    fillData (res) {
      this.datacollection = res.data.etf
      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
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
          displayColors: false
        }
      }
    },
    getData() {
      const api = process.env.NODE_ENV === 'production' ? 'https://node-etfs-api.herokuapp.com/api/etfs' : 'http://localhost:8000/api/etfs';
      axios.get(api).then(this.fillData)
    }
  }
}
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
