<template>
  <div class="title">
    <h2>{{ ttl }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: String,
    delay: Number
  },
  data () {
    return {
      ttl: this.title,
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
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
