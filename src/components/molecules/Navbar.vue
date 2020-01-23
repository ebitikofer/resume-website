<template>

  <div class="navbar">

    <!-- <Card :delay="dly"> -->
    <div class="spacing">
      <ul id="menu">
        <li class="route" v-for="(rt, index) in rts" :key="rt.id">
          <Route :name="rt.name" :route="rt.link" :active="$route.path === rt.link ? true : false" :delay="dly + 50 * index" />
        </li>
      </ul>
    </div>
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

.spacing {
  background-color: transparent;
  padding: 20px 0px;
}

@media screen and (max-width: 991px) {
  .spacing {
    padding: 45px 0px;
  }
}

#menu {
	font-family: 'Raleway', sans-serif;
	text-align: center;

  position: fixed;
  left: 20px;
  top: 20px;
  /* top: 0px; */
  /* width: 0em; */

  /* z-index: 5; */
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
