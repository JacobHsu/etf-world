<template>
  <div>
    <table class="pure-table">
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Country</th>
          <th>國家</th>
          <th>ETF</th>
          <th>LINE</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="etf in etfs" :key="etf.id">
          <td>
            <span :class="`flag-icon flag-icon-${etf.iso}`" aria-label="Flag"></span>
          </td>
          <td>{{etf.id}}</td>
          <td>{{etf.country}}</td>
          <td>
            <a target="_blank" :href="'https://www.google.com/maps/place/'+etf.name">{{etf.name}}</a>
          </td>
          <td>
            <a
              target="_blank"
              :href="'https://www.moneydj.com/ETF/X/Basic/Basic0007.xdjhtm?etfid='+etf.etf"
            >{{etf.etf}}</a>
          </td>
          <td v-show="datacollection">
              <line-example :chart-data="chartData(datacollection, etf.etf)" :options="options" :width="100" :height="34"  />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import LineExample from '@/components/LineExample'
import axios from 'axios'
// datacollection[etf.etf].price, datacollection[etf.etf].todayUpOrDownVal
export default {
  name: "EtfTable",
  components: {
    LineExample,
  },
  props: {
    etfs: Array
  },
  data() {
    return {
      datacollection: {},
      options: {},
      borderColor: '#ABDDA4'
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    chartData(datacollection, etf) {
      const data = !datacollection[etf] ? [] : datacollection[etf].price
      const upOrDown = !datacollection[etf] ? 0 : datacollection[etf].todayUpOrDownVal
      let borderColor = '#ABDDA4'
      borderColor =  upOrDown < 0 ? '#FF6666' : '#ABDDA4'
      return {
        labels: ['', '', '', '', '', '', ''],
        datasets: [
          {
            label: '',
            borderColor:  borderColor,
            backgroundColor: '#FFF',
            data: data,
          },
        ],
      }
    },
    fillData (res) {
      this.datacollection = res.data.etf
      console.log(1, this.datacollection)
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
      const api = process.env.NODE_ENV === 'production' ? 'https://node-etfs-api.herokuapp.com/api/etfs' : 'http://localhost:8000/api/etfs';
      axios.get(api).then(this.fillData)
    }
  }
};
</script>

<style>
</style>