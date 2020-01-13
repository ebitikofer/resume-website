<template>

  <div class="navbar">

    <ul id="menu">
      <li class="route" v-for="(rt, index) in rts" :key="rt.id">
        <Route :name="rt.name" :route="rt.link" :delay="dly + 50 * index" />
      </li>
    </ul>

    <br/>

    <div class="holder">

      <h1 v-anime="{ translateY: 5, opacity: [.1, 1],  duration: 2000, delay: 300, loop: false }">{{ msg }}</h1>

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
  font-family: GlacialIndifference;
  src: url(../../assets/GlacialIndifference.otf) format('opentype');
}

@font-face {
  font-family: GlacialIndifference;
  font-weight: bold;
  src: url(../../assets/GlacialIndifference_Bold.otf) format('opentype');
}

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

@keyframes textMoveIn {
  0%   { left: -25%; }
  100% { left: 0%; }
}

@keyframes textMoveOut {
  0%   { left: 0%; }
  100% { left: -25%; }
}

.holder {
  background-color: rgba(255,255,255, 0.25); /* Black w/opacity/see-through */
  position: relative;
  left: 25%;
  width: 50%;
  border-radius: 15px;
  padding: 20px;
}

h1, h2 {
  background-color: transparent;
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
  left: 0;
  top: -5%;
  width: 0em;
  /* margin-top: -2.5em; */
}

ul {
  background-color: transparent;
  list-style-type: none;
  padding: 0;
}

li {
  backdrop-filter: blur(4px);
  background-color: transparent;
	font-family: 'GlacialIndifference';
  font-weight: bold;
  display: inline-block;
  margin: 0 10px;
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
