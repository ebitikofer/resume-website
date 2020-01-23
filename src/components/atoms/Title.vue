<template>

  <div class="titleContainer">
    <h2 class="sub-header text-positioning text-spacing">{{ ttl }}</h2>
  </div>

</template>

<script>

  export default {
    name: 'Title',
    props: {
      title: String,
      delay: Number,
      mountAnimation: Object,
      unmountAnimation: Object,
      hoverAnimation: Object,
      unhoverAnimation: Object
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
    },
    beforeDestroy () {
      const targets = this.$el
      this.$anime
        .timeline().add({
          targets,
          translateY: [0, -5],
          opacity: [1, 0.1],
          duration: 0,
          delay: 0
        })
    },
    mouseOver: function () {
      const targets = this.$el
      this.$anime
        .timeline().add({
          targets,
          color: ['white', '#76e6b3'],
          duration: 2000,
          delay: 0
        })
    },
    mouseOut: function () {
      const targets = this.$el
      this.$anime
        .timeline().add({
          targets,
          color: ['#76e6b3', 'white'],
          duration: 2000,
          delay: 0
        })
    }
  }

</script>

<style scoped>
</style>
