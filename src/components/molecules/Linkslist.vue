<template>

  <div class="linkslistContainer">

    <Title :title="ttl" :delay="dly" />
    <ul>
      <li v-for="(lnk, index) in lnks" :key="lnk.id">
        <Link :name="lnk.name" :link="lnk.link" :delay="dly + 50 * index" />
      </li>
    </ul>

  </div>

</template>

<script>

  import Title from '../atoms/Title'
  import Link from '../atoms/Link'

  export default {
    name: 'Linkslist',
    components: {
      Title,
      Link
    },
    props: {
      title: String,
      links: Array,
      delay: Number
    },
    data () {
      return {
        ttl: this.title,
        lnks: this.links,
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
