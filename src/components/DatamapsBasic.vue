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
        <b>Name</b>: {{ popupData.name }}<br />
        <b>Yield</b>: {{ popupData.yeild }}<br />
        Exploded on {{ popupData.date }} by the {{ popupData.country }}
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
        fontSize: 14,
        fontFamily: 'Verdana',
        labelColor: '#fff',
        lineWidth: 1,
      },
      geographyConfig: {
        borderColor: '#DEDEDE',
        borderWidth: 1,
        highlightBorderWidth: 2,
        highlightBorderOpacity: 1,
        dataUrl:'world.json',
      },
      data: {
        'USA': { fillKey: 'active' }
      },
      fills: {
        defaultFill: '#ABDDA4',
        USA: 'blue',
        RUS: 'red',
        active: 'rgb(113, 142, 179)'
      },
      bubblesConfig: {
        popupTemplate: true,
        data: bubblesData.data,
      },
      popupData: {
        name: '',
        yeild: '',
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
        yeild: datum.yeild,
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
