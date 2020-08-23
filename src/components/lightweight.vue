<template>
  <div>
    <div ref="chartRef"></div>
  </div>
</template>
<script>
import  _ from 'lodash';
import { createChart } from "lightweight-charts";
export default {
  name: 'lightweight',
  props: {
    cdata: Object 
  },
  data() {
    return {
    }
  },
  mounted () {
    const setDataArr1 = [
      { time: "2019-4-11", value: 80.01 },
      { time: "2019-04-12", value: 96.63 },
      { time: "2019-04-13", value: 76.64 },
 
    ]
    // var arr = _.values(this.data);
    //let resdata=JSON.parse(JSON.stringify(this.data));
    console.log('log', setDataArr1, this.cdata, this.cdata.VT);
    const chart = createChart(this.$refs.chartRef, {
      width: 400,
      height: 300,
      layout: {
        textColor: "#d1d4dc",
        backgroundColor: "#000000",
      },
      rightPriceScale: {
        scaleMargins: {
          top: 0.3,
          bottom: 0.25,
        },
      },
      crosshair: {
        vertLine: {
          width: 5,
          color: "rgba(224, 227, 235, 0.1)",
          style: 0,
        },
        horzLine: {
          visible: false,
          labelVisible: false,
        },
      },
      grid: {
        vertLines: {
          color: "rgba(42, 46, 57, 0)",
        },
        horzLines: {
          color: "rgba(42, 46, 57, 0)",
        },
      },
    });
    const areaSeries = chart.addAreaSeries({
      topColor: "rgba(38, 198, 218, 0.56)",
      bottomColor: "rgba(38, 198, 218, 0.04)",
      lineColor: "rgba(38, 198, 218, 1)",
      lineWidth: 2,
      crossHairMarkerVisible: false,
    });
    areaSeries.setData(setDataArr1);
    chart.timeScale().fitContent();
  }
}
</script>