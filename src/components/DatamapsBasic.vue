<template>
  <div>
    <!-- <h4>Basic:</h4> -->
    <vue-datamaps
      :geographyConfig="geographyConfig"
      :bubblesConfig="bubblesConfig"
      :data="data"
      :fills="fills"
      @custom:popup-bubble="popupTemplate"
      bubbles
      labels
    >
      <!-- labels -->
      <div slot="hoverBubbleInfo" class="hoverinfo" style="text-align:center;">
        <span :class="`flag-icon flag-icon-${popupData.iso}`" aria-label="Flag"></span>
        <b>{{ popupData.name }}</b>
      </div>
    </vue-datamaps>
    <!-- <vue-datamaps/> -->
  </div>
</template>

<script>
import axios from 'axios'
import bubblesData from '../data/bubbles.json'
import { VueDatamaps } from 'vue-datamaps'

export default {
  components: {
    VueDatamaps,
  },
  data() {
    return {
      labelsConfig: {
        // fontSize: 14,
        // fontFamily: 'Verdana',
        // labelColor: '#fff',
        // lineWidth: 1,
      },
      geographyConfig: {
        borderColor: '#DEDEDE',
        borderWidth: 2,
        highlightFillColor: '#1C977A',
        popupOnHover: false,
        highlightOnHover: false,
        dataUrl:'world.json',
      },
      data: {
        'blue': { fillKey: 'active' }
      },
      fills: {
        defaultFill: '#ABDDA4',
        authorHasTraveledTo: "#fa0fa0",
        blue: 'blue',
        red: 'LightCoral',
        RUS: 'red',
        active: 'rgb(113, 142, 179)'
      },
      bubblesConfig: {
        popupTemplate: true,
        data: bubblesData.data,
      },
      popupData: {
        name: '',
        iso: '',
        date: '',
        country: '',
      },
    }
  },
  created() {
  },
  mounted() {
    this.getData()
  },
  updated() {

  },
  methods: {
    popupTemplate({ datum }) {
      this.popupData = {
        name: datum.name,
        iso: datum.iso,
        date: datum.date,
        country: datum.country,
      }
    },
    etfsData(res) {
      const {ARGT, EWA, EWO, EWK, EWZ, EWC, ECH, MCHI, ICOL, EDEN, EGPT, EFNL, EWQ, EWG} = res.data.etf
      const etfs = {
        ARG:ARGT.periodChg, AUS:EWA.periodChg, AUT:EWO.periodChg, 
        BEL:EWK.periodChg, BRA:EWZ.periodChg, CAN:EWC.periodChg,
        CHL:ECH.periodChg, CHN:MCHI.periodChg, COL:ICOL.periodChg,
        DNK:EDEN.periodChg, EGY:EGPT.periodChg, FIN:EFNL.periodChg,
        FRA:EWQ.periodChg,  DEU:EWG.periodChg
      }
      console.log( etfs) 

      for (const [key, value] of Object.entries(etfs)) {
         this.data[key] = value < 0 ? { fillKey: 'red' } : { fillKey: 'defaultFill' }
      }
     
    },
    getData() {
      const api = process.env.NODE_ENV === 'production' ? 'https://node-etfs-api.herokuapp.com/api/etfs' : 'http://localhost:8000/api/etfs';
      axios.get(api).then(this.etfsData)
    }
  },
}
</script>

<style>
.map {
  height: 0;
  width: 100%;
  padding-top: 45%;
  position: relative;
  /* border:1px dotted blue;  */
}
</style>
