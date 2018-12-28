<template>
  <div class="linkslist">

    <Title :title="ttl" :delay="dly" />
    <ul>
      <li v-for="(lnk, index) in lnks" :key="lnk.id">
        <Link :name="lnk.name" :link="lnk.link" :delay="dly + 50 * index" />
      </li>
    </ul>

  </div>
</template>

<script>
import Link from '../atoms/Link'
import Title from '../atoms/Title'

export default {
  name: 'Linkslist',
  components: {
    Link,
    Title
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
ul {
  background-color: transparent;
  list-style-type: none;
  padding: 0;
}
li {
  background-color: transparent;
  display: inline-block;
  margin: 0 10px;
}
</style>
