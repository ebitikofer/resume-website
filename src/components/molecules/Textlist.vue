<template>

  <div class="textlistContainer">

    <Title :title="ttl" :delay="dly" />
    <ul>
      <li v-for="(txt, index) in txts" :key="index">
        <Textblock :text="txt" :delay="dly + 100 + (50 * index)" />
      </li>
    </ul>

  </div>

</template>

<script>

  import Title from '../atoms/Title'
  import Textblock from '../atoms/Textblock'

  export default {
    name: 'Textlist',
    components: {
      Title,
      Textblock
    },
    props: {
      title: String,
      texts: Array,
      delay: Number
    },
    data () {
      return {
        ttl: this.title,
        txts: this.texts,
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
