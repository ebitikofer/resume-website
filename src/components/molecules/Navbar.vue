<template>

  <div class="navbar">

    <ul id="menu">
      <li class="route" v-for="(rt, index) in rts" :key="rt.id">
        <Route :name="rt.name" :route="rt.link" :delay="dly + 50 * index" />
      </li>
    </ul>

    <div class="card page-body">
      <h1 v-anime="{ translateY: [-5, 0], opacity: [.1, 1],  duration: 2000, delay: 300, loop: false }">{{ msg }}</h1>
    </div>

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
        translateY: [-5, 0],
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
	font-family: 'GlacialIndifference';
  font-weight: bold;
  color: white;
  /* color: #d2d2d2; */
  position: relative;
  left: 25%;
  width: 50%;
}

#menu {
  position: fixed;
  left: 0px;
  width: 0em;
  /* margin-top: -2.5em; */
}

ul {
	font-family: 'Raleway', sans-serif;
	text-align: center;
}

li {
	display: inline-block;
	margin-bottom: 20px;
  background-color: transparent;
  backdrop-filter: blur(4px);
	font-family: 'GlacialIndifference';
}

.route {
  /* animation: */
    /* textMoveOut 1s; */
}

.route:hover {
  animation:
    textMoveIn 1s;
}

</style>
