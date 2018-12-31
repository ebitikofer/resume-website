<template>
  <div class="navbar">

    <ul id="menu">
      <li v-for="(rt, index) in rts" :key="rt.id">
        <Route :name="rt.name" :route="rt.link" :delay="dly + 50 * index" />
      </li>
    </ul>

    <br/>

    <h1 v-anime="{ translateY: 5, opacity: [.1, 1],  duration: 2000, delay: 300, loop: false }">{{ msg }}</h1>

  </div>
</template>

/* backgroundColor: '#FFF', */

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
@font-face {
  font-family: CaviarDreams;
  src: url(../../assets/CaviarDreams.ttf) format('truetype');
}
@font-face {
  font-family: CaviarDreams;
  font-weight: bold;
  src: url(../../assets/CaviarDreams_Bold.ttf) format('truetype');
}
@font-face {
  font-family: LemonMilk;
  src: url(../../assets/LemonMilk.otf) format('opentype');
}
@font-face {
  font-family: LemonMilk;
  font-weight: bold;
  src: url(../../assets/LemonMilkbold.otf) format('opentype');
}
h1, h2 {
  background-color: transparent;
  font-family: LemonMilk;
  font-weight: bold;
  color: #d2d2d2;
}
#menu {
  position: fixed;
  left: 0;
  top: 50%;
  width: 0em;
  margin-top: -2.5em;
}
ul {
  background-color: transparent;
  list-style-type: none;
  padding: 0;
}
li {
  backdrop-filter: blur(4px);
  background-color: transparent;
  font-family: LemonMilk;
  display: inline-block;
  margin: 0 10px;
}
</style>
