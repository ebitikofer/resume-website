<template>

  <div class="title">
    <h2 class="sub-header text-positioning">{{ ttl }}</h2>
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
          translateY: [-5, 0],
          opacity: [0.1, 1],
          duration: 2000,
          delay: this.delay
        })
    }
  }

</script>

<style scoped>
</style>
