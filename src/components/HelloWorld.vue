<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <div class="pure-u-1 pure-u-lg-1-3 pure-u-xl-1-5" style="min-width: 350px;">
        <etf-table :etfs="items"/>
    </div>

  </div>
</template>

<script>
import tableData from '../data/etf1.json'
import EtfTable from '@/components/EtfTable.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    EtfTable
  },
  data() {
    return {
      items: tableData.table1
    }
  },
  created () {
    //console.log(this.items)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
