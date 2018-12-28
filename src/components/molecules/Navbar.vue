<template>
  <div class="navbar">

    <ul>
      <li v-for="(rt, index) in rts" :key="rt.id">
        <Route :name="rt.name" :route="rt.link" :delay="dly + 50 * index" />
      </li>
    </ul>

    <br/>

    <h1 v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 300, loop: false }">{{ msg }}</h1>

  </div>
</template>

<script>
import Route from '../atoms/Route'

export default {
  name: 'Navbar',
  props: {
    message: String,
    routes: Array,
    delay: Number
  },
  components: {
    Route
  },
  data () {
    return {
      msg: this.message,
      rts: this.routes,
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

<style scoped>
h1, h2 {
  background-color: transparent;
  font-weight: normal;
}
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
