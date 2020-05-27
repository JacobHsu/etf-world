import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['chartdata'],
  mounted() {
    this.renderChart(
      {
        labels: ['', '', '', '', '', '', ''],
        datasets: [
          {
            label: '',
            backgroundColor: '#fff',
            data: this.chartdata,
          },
        ],
      },
      {
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
  },
}

