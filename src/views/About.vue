<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="Chart" >
      <line-example :chart-data="chartData(datacollection.VT)" :options="options" :width="100" :height="50" />
      <line-example :chart-data="chartData(datacollection.VWO)" :options="options" :width="100" :height="50" />
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
      datacollection: {},
      options: {}
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    chartData(etf) {
      return {
        labels: ['', '', '', '', '', '', ''],
        datasets: [
          {
            label: '',
            backgroundColor: '#fff',
            data: etf,
          },
        ],
      }
    },
    fillData (res) {
      this.datacollection = res.data.data
      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              display: false, //this will remove all the x-axis grid lines
            },
          ],
          yAxes: [
            {
              display: false, //this will remove all the y-axis grid lines
            },
          ]
        },
        tooltips: {
          displayColors: false
        }
      }
    },
    getData() {
      const api = process.env.NODE_ENV === 'production' ? 'https://node-etfs-api.herokuapp.com/api/etfs' : 'https://node-etfs-api.herokuapp.com/api/etfs';
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
