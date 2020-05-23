<template>
  <div class="world">
    <!-- <h4>Basic:</h4> -->
    <vue-datamaps :geographyConfig="geographyConfig"/>
    <!-- <vue-datamaps/> -->
  </div>
</template>

<script>
import { VueDatamaps } from 'vue-datamaps'
export default {
  components: {
    VueDatamaps
  },
  data () {
    return {
      geographyConfig: {
        borderColor: '#DEDEDE',
        borderWidth: 0.5,
        highlightBorderWidth: 2,
        dataUrl: 'https://raw.githubusercontent.com/Seungwoo321/vue-datamaps/master/demo/example-vue-cli3/public/data/world.json'
      }
    }
  }
}
</script>

<style>
.world {
  position: absolute;
  left: 25%;
  width: 100vh; 
  height: 55vh; 
  /* border:1px dotted blue;  */
}
.datamap {
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
