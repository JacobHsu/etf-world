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
import { world } from '../data/index'
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
      scope: world,
      geographyConfig: {
        borderColor: '#DEDEDE',
        borderWidth: 2,
        highlightFillColor: '#1C977A',
        popupOnHover: false,
        highlightOnHover: false,
        // dataUrl: '',
        // dataUrl: '//raw.githubusercontent.com/Seungwoo321/vue-datamaps/master/demo/example-vue-cli3/public/data/world.json'
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
      const {ARGT, EWA, EWO, EWK, EWZ, EWC, ECH, MCHI, ICOL, EDEN, EGPT, EFNL, EWQ, EWG, GREK, EWH, INDA, EIDO,
      EIRL, EIS, EWI, EWJ, EWY, EWM, EWW, EWN, ENZL, NGE, ENOR, PAK, EPU, EPHE, EPOL, PGAL, QAT, RSX,
      KSA, EWS, EZA, EWP, EWD, EWL, EWT, THD, TUR, UAE, EWU, VOO, VNM} = res.data.etf
      const etfs = {
        ARG:ARGT.periodChg, AUS:EWA.periodChg, AUT:EWO.periodChg, 
        BEL:EWK.periodChg, BRA:EWZ.periodChg, CAN:EWC.periodChg,
        CHL:ECH.periodChg, CHN:MCHI.periodChg, COL:ICOL.periodChg,
        DNK:EDEN.periodChg, EGY:EGPT.periodChg, FIN:EFNL.periodChg,
        FRA:EWQ.periodChg, DEU:EWG.periodChg, GRC:GREK.periodChg,
        HKG:EWH.periodChg, IND:INDA.periodChg, IDN:EIDO.periodChg,
        IRL:EIRL.periodChg, ISR:EIS.periodChg, ITA:EWI.periodChg,
        JPN:EWJ.periodChg, KOR:EWY.periodChg, MYS:EWM.periodChg,
        MEX:EWW.periodChg, NLD:EWN.periodChg, NZL:ENZL.periodChg,
        NGA:NGE.periodChg, NOR:ENOR.periodChg, PAK:PAK.periodChg,
        PER:EPU.periodChg, PHL:EPHE.periodChg, POL:EPOL.periodChg,
        PRT:PGAL.periodChg, QAT:QAT.periodChg, RUS:RSX.periodChg,
        SAU:KSA.periodChg, SGP:EWS.periodChg, ZAF:EZA.periodChg,
        ESP:EWP.periodChg, SWE:EWD.periodChg, CHE:EWL.periodChg,
        TWN:EWT.periodChg, THA:THD.periodChg, TUR:TUR.periodChg,
        ARE:UAE.periodChg, GBR:EWU.periodChg, USA:VOO.periodChg,
        VNM:VNM.periodChg
      }
      console.log(etfs) 

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
