<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  background: white url("assets/Infant_Stars_in_Orion.jpg") no-repeat fixed center;
  background-size: cover;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-color: #2c3e50; */
  margin-top: 10px;
  height: 100%;
}
@font-face {
  font-family: CaviarDreams;
  src: url(/assets/CaviarDreams.ttf) format('truetype');
}
@font-face {
  font-family: CaviarDreams;
  font-weight: bold;
  src: url(/assets/CaviarDreams_Bold.ttf) format('truetype');
}
@font-face {
  font-family: LemonMilk;
  src: url(/assets/LemonMilk.otf) format('opentype');
}
@font-face {
  font-family: LemonMilk;
  font-weight: bold;
  src: url(/assets/LemonMilkbold.otf) format('opentype');
}
</style>
