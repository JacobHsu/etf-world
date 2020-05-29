import { Line, mixins  } from 'vue-chartjs'
const { reactiveProp } = mixins
export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['options'],
  mounted() {
    this.renderChart(
      this.chartData, {
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
    )
  }
}

