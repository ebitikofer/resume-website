<template>
  <div class="routelink">
    <router-link :to="lnk">{{ nm }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'Routelink',
  props: ['name', 'link'],
  data () {
    return {
      nm: this.name,
      lnk: this.link
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
