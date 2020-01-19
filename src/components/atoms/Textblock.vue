<template>

  <div class="textblock">
    <p class="text body-text text-positioning">{{ txt }}</p>
  </div>

</template>

<script>

  export default {
    name: 'Textblock',
    props: {
      text: String,
      delay: Number
    },
    data () {
      return {
        txt: this.text,
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
