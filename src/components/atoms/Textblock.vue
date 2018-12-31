<template>
  <div class="textblock">
    <p>{{ txt }}</p>
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
        translateY: 5,
        opacity: [0.1, 1],
        // backgroundColor: '#FFF',
        duration: 2000,
        delay: this.delay
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@font-face {
  font-family: CaviarDreams;
  src: url(/assets/CaviarDreams.ttf) format('truetype');
}

p {
  font-family: CaviarDreams;
  color: #d2d2d2;
  /* color: #42b983; */
}

</style>
