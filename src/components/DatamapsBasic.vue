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
        <b> {{ popupData.name }}</b>
      </div>
    </vue-datamaps>
    <!-- <vue-datamaps/> -->
  </div>
</template>

<script>
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
