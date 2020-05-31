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
          <td>
              <line-example :chart-data="chartData(datacollection[etf.etf])" :options="options" :width="100" :height="34" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import LineExample from '@/components/LineExample'
import axios from 'axios'

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
            borderColor: '#ABDDA4',
            backgroundColor: '#FFF',
            data: etf,
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
};
</script>

<style>
</style>