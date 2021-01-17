<template>
  <div>
    <table class="pure-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Index</th>
          <th>國家</th>
          <th>ETF</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="etf in etfs" :key="etf.id">
          <td>{{etf.id}}</td>
          <td>{{etf.index}}</td>
          <td>
            <a target="_blank" :href="'https://www.google.com/maps/place/'+etf.name">{{etf.name}}</a>
          </td>
          <td>
            <a
              target="_blank"
              :href="'https://www.moneydj.com/ETF/X/Basic/Basic0007.xdjhtm?etfid='+etf.etf"
            >{{etf.etf}}</a>
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
      options: {},
      borderColor: '#ABDDA4'
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
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
      //const api = 'https://node-etfs-api.herokuapp.com/api/etfs'
      const api = process.env.NODE_ENV === 'production' ? 'https://node-etfs-api.herokuapp.com/api/etfs' : 'http://localhost:8000/api/etfs';
      axios.get(api).then(this.fillData)
    }
  }
};
</script>

<style>
</style>