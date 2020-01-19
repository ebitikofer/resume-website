<template>

  <div class="link">
    <a class="accent-link" :href="lnk" target="_blank">{{ nm }}</a>
  </div>

</template>

<script>

  export default {
    name: 'Link',
    props: {
      name: String,
      link: String,
      delay: Number
    },
    data () {
      return {
        nm: this.name,
        lnk: this.link,
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
