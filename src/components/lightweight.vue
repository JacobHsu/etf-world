<template>
  <div>
    <div ref="chartRef"></div>
    <p></p>
  </div>
</template>
<script>
// import  _ from 'lodash';
import isos from '../data/iso.json'
import { createChart } from "lightweight-charts";
export default {
  name: 'lightweight',
  props: {
    cdata: Object 
  },
  data() {
    return {
      load: false,
      chartColor: {
        topColor: "rgba(38, 198, 218, 0.56)",
        bottomColor: "rgba(38, 198, 218, 0.04)",
        lineColor: "rgba(38, 198, 218, 1)"
      }
    }
  },
  mounted () {
    this.$refs.chartRef.style.position = 'relative';
    var firstRow = document.createElement('div');
    //firstRow.innerText = this.cdata.name;
    const etfName = this.cdata.name; 
    let iso = !isos[etfName] ? '' : ' <span class="'+`flag-icon flag-icon-${isos[etfName]}`+'" aria-label="Flag"></span>' ;//`<span style="color:gray"><em>(${isos[etfName]})</em></span>`;
    firstRow.innerHTML = etfName + iso;
    firstRow.classList.add('legend');
    this.$refs.chartRef.appendChild(firstRow);

    const down =  this.cdata.periodChg < 0 ? true : false
    if( down ) {
      this.chartColor.topColor = "rgba(216, 56, 38, 0.56)",
      this.chartColor.bottomColor = "rgba(216, 56, 38, 0.04)",
      this.chartColor.lineColor = "rgba(216, 56, 38, 1)"
    }

    const chartData = JSON.parse(JSON.stringify( this.cdata ) ); 
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
      topColor: this.chartColor.topColor,
      bottomColor: this.chartColor.bottomColor,
      lineColor: this.chartColor.lineColor,
      lineWidth: 2,
      crossHairMarkerVisible: false,
    });
    areaSeries.setData(chartData.setData);
    chart.timeScale().fitContent();
  }
}
</script>

<style>
.legend {
	position: absolute;
	left: 12px;
	top: 28px;
	z-index: 3;
	font-size: 12px;
	line-height: 18px;
	font-weight: 300;
  color: white;
  font-size: 22px; 
}
</style>