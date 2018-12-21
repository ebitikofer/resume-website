<template>
  <div class="textsection">

    <Title :title="hdr" :delay="this.delay" />
    <Textblock :text="txt" :delay="this.delay + 50" />

  </div>
</template>

<script>
import Title from '../atoms/Title'
import Textblock from '../atoms/Textblock'

export default {
  name: 'Textsection',
  components: {
    Title,
    Textblock
  },
  props: {
    header: String,
    text: String,
    delay: Number
  },
  data () {
    return {
      hdr: this.header,
      txt: this.text,
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

<style scoped>
</style>
