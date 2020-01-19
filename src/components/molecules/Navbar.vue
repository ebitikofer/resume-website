<template>

  <div class="navbar">

    <ul id="menu">
      <li class="route" v-for="(rt, index) in rts" :key="rt.id">
        <Route :name="rt.name" :route="rt.link" :delay="dly + 50 * index" />
      </li>
    </ul>

    <div class="card page-body">
      <h1 class="header text-positioning" v-anime="{ translateY: [-5, 0], opacity: [.1, 1],  duration: 2000, delay: 300, loop: false }">{{ message }}</h1>
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

.navbar {
  padding-top: 20px
}

#menu {
	font-family: 'Raleway', sans-serif;
	text-align: center;

  position: fixed;
  left: 20px;
  top: 20px;
  /* top: 0px; */
  width: 0em;
}

.route {
	font-family: 'GlacialIndifference';
	margin-bottom: 20px;
  /* animation: */
    /* textMoveOut 1s; */
}

.route:hover {
  animation:
    textMoveIn 1s;
}

</style>
