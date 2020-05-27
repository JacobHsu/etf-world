<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="Chart">
      <line-example :chartdata="chart1" :width="100" :height="50"/>
      <line-example :chartdata="chart2" :width="100" :height="50"/>
    </div>
  </div>
</template>
<script>
import LineExample from '@/components/LineExample'

export default {
  name: 'About',
  components: {
    LineExample,
  },
  data() {
    return {
      chart1: [ '71.75', '70.41', '70.48', '71.09', '69.88' ],
      chart2: [ '19.94', '19.66', '20.72', '21.53', '21.27' ]
    }
  },
  mounted() {},
}
</script>
<style>
.Chart {
  max-width: 200px;
  padding: 20px;
  /* box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.4); */
  border-radius: 20px;
  margin: 50px 0;
}
</style>
