<template>
  <div class="home">
    <datamaps-basic/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import DatamapsBasic from '@/components/DatamapsBasic'

export default {
  name: 'home',
  components: {
    DatamapsBasic,
    HelloWorld
  }
}
</script>
 <style>
</style>