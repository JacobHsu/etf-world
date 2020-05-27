<template>
  <div>
    <table class="pure-table">
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Country</th>
          <th>國家</th>
          <th>ETF</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="etf in etfs" :key="etf.id">
          <td>
            <span :class="`flag-icon flag-icon-${etf.iso}`" aria-label="Flag"></span>
          </td>
          <td>{{etf.id}}</td>
          <td>{{etf.country}}</td>
          <td>
            <a target="_blank" :href="'https://www.google.com/maps/place/'+etf.name">{{etf.name}}</a>
          </td>
          <td>
            <a
              target="_blank"
              :href="'https://www.moneydj.com/ETF/X/Basic/Basic0007.xdjhtm?etfid='+etf.etf"
            >{{etf.etf}}</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "EtfTable",
  props: {
    etfs: Array
  }
};
</script>

<style lang="scss" scoped>
</style>