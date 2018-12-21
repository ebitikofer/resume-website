<template>
  <div class="route">
    <router-link :to="rt">{{ nm }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'Route',
  props: {
    name: String,
    route: String,
    delay: Number
  },
  data () {
    return {
      nm: this.name,
      rt: this.route,
      dly: this.delay
    }
  },
  mounted () {
    const targets = this.$el
    this.$anime
      .timeline().add({
        targets,
        translateY: 5,
        opacity: [0.1, 1],
        backgroundColor: '#FFF',
        duration: 2000,
        delay: this.delay
      }).add({
        targets,
        rotate: '1turn',
        translateY: 5,
        duration: 2000,
        delay: this.delay + 500
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
