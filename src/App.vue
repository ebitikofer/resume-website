<template>

  <div id="app">
    <Navbar v-bind:message="msg" v-bind:routes="nvs" :delay="0" />
    <router-view />
    <Contactbar />
  </div>

</template>

<script>
import Navbar from './components/molecules/Navbar'
import Contactbar from './components/molecules/Contactbar'

  export default {
    name: 'App',
    components: {
      Navbar,
      Contactbar
    },
    data () {
      return {
        // msg: 'Eric\nBitikofer',
        // msg: titleMsg,
        msg: '',
        nvs: [
          { name: 'INTRODUCTION', link: '/' },
          { name: 'CODING', link: '/coding' },
          { name: 'QUALIFICATIONS', link: '/qualifications' },
          { name: 'DEMOS', link: '/demos' },
          { name: 'ABOUT', link: '/about' }
        ]
      }
    },
    watch: {
      $route (to, from) {
        if (this.$route.name === 'Introduction') {
          this.msg = 'Eric\nBitikofer'
        } else {
          this.msg = this.$route.name
        }
        console.log('current route', this.msg)
        this.nvs = [
          { name: 'INTRODUCTION', link: '/' },
          { name: 'CODING', link: '/coding' },
          { name: 'QUALIFICATIONS', link: '/qualifications' },
          { name: 'DEMOS', link: '/demos' },
          { name: 'ABOUT', link: '/about' }
        ]
      }
    }
  }

</script>

<style>

::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}

body, html {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;

}

body {
  padding: 20px;
  background: white url("assets/Infant_Stars_in_Orion.png") no-repeat fixed center;
  background-size: cover;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* overflow: scroll; */
  /* overflow-x: hidden; */
}

div {
  width: inherit;
}

h1, h2 {
  background-color: transparent;
  color: #d2d2d2; /* qualifications */
  font-weight: bold; /* qualifications */
}

p {
  position: relative;
  left: 25%;
  width: 50%;
  background-color: transparent;
  font-family: CaviarDreams;
  color: white;
  /* color: #d2d2d2; off-white*/
  /* color: #42b983; green-highlight*/
}

ul {
  background-color: transparent;
  padding: 0px;
  margin: 0px;
  list-style-type: none;
}

li {
  background-color: transparent;
  display: inline-block;
  margin: 0 10px;
  color: #d2d2d2;
}

#app {
  /* background-color: #2c3e50; */
  height: 100%;
}

.card {
  background-color: rgba(255,255,255, 0.25); /* Black w/opacity/see-through */
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
}

.page-body {
  position: relative;
  left: 25%;
  width: 50%;
  height: 100%;
}

@keyframes textFadeIn {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes textFadeOut {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes textMoveIn {
  0%   { left: -85%; }
  100% { left: 0%; }
}

@keyframes textMoveOut {
  0%   { left: 0%; }
  100% { left: -85%; }
}

@font-face {
  font-family: CaviarDreams;
  src: url(./assets/CaviarDreams.ttf) format('truetype');
}

@font-face {
  font-family: CaviarDreams;
  font-weight: bold;
  src: url(./assets/CaviarDreams_Bold.ttf) format('truetype');
}

@font-face {
  font-family: LemonMilk;
  src: url(./assets/LemonMilk.otf) format('opentype');
}

@font-face {
  font-family: LemonMilk;
  font-weight: bold;
  src: url(./assets/LemonMilkbold.otf) format('opentype');
}

@font-face {
  font-family: GlacialIndifference;
  src: url(./assets/GlacialIndifference.otf) format('opentype');
}

@font-face {
  font-family: GlacialIndifference;
  font-weight: bold;
  src: url(./assets/GlacialIndifference_Bold.otf) format('opentype');
}

</style>
