<template>

  <div class="routeBarContainer">

    <!-- <Card :delay="dly"> -->
    <ul class="routeList">
      <li class="route" v-for="(rt, index) in rts" :key="rt.id">
        <Route :name="rt.name" :route="rt.link" :active="$route.path === rt.link ? true : false" :delay="dly + 50 * index" />
      </li>
    </ul>
    <!-- </Card> -->

    <Card :header="true" :delay="dly">
      <h1 class="header text-positioning" v-anime="{ translateY: [-5, 0], opacity: [.1, 1],  duration: 2000, delay: dly, loop: false }">{{ message }}</h1>
    </Card>

  </div>

</template>

<script>

import Card from '../atoms/Card'
import Route from '../atoms/Route'

export default {
  name: 'Navbar',
  props: {
    message: String,
    routes: Array,
    delay: Number
  },
  components: {
    Card,
    Route
  },
  data () {
    console.log(this.$route.path)
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
  z-index: 5;
}

.routeList {
  background-color: transparent;
  padding-top: 20px;
  height: 20px;
	font-family: 'Raleway', sans-serif;
	text-align: center;
  vertical-align: middle;
  /* margin: 0px 30px; */

  /* width: 0em; */
}

.route {
  font-family: 'GlacialIndifference';
	/* margin-bottom: 20px; */
  /* animation: */
    /* textMoveOut 1s; */
}

.route:hover {
  animation:
    textMoveIn 1s;
}

</style>
