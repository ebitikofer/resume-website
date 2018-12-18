<template>
  <div class="coding">

    <Navbar :message="msg"
      name1="Introduction" link1="/"
      name2="Qualifictions" link2="/qualifications"
      name3="Demos" link3="/demos"
      name4="About" link4="/about"
    />

    <br/>

    <h2 v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 400, loop: false }">Languages</h2>
    <ul v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 550, loop: false }">
      <li v-anime="{translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 600, loop: false }"><Link name="C++" link="https://isocpp.org/" /></li>
      <li v-anime="{translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 650, loop: false }"><Link name="JavaScript" link="https://www.javascript.com/" /></li>
      <li v-anime="{translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 700, loop: false }"><Link name="Python" link="https://www.python.org/" /></li>
      <li v-anime="{translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 750, loop: false }"><Link name="Java" link="https://www.oracle.com/java/" /></li>
      <li v-anime="{translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 800, loop: false }"><Link name="C#" link="https://docs.microsoft.com/en-us/dotnet/csharp/" /></li>
    </ul>

    <br/>

    <h2 v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 850, loop: false }">Frameworks/Libraries/APIs</h2>
    <ul v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 950, loop: false }">
      <li v-anime="{translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 1000, loop: false }"><Link name="VueJS" link="https://vuejs.org/" /></li>
      <li v-anime="{translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 1050, loop: false }"><Link name="AnimeJS" link="http://animejs.com/" /></li>
      <li v-anime="{translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 1100, loop: false }"><Link name="BabylonJS" link="https://www.babylonjs.com/" /></li>
      <li v-anime="{translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 1150, loop: false }"><Link name="ReactJS" link="https://reactjs.org/" /></li>
      <li v-anime="{translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 1200, loop: false }"><Link name="ReactRouter" link="https://reacttraining.com/react-router/" /></li>
      <li v-anime="{translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 1250, loop: false }"><Link name="Redux" link="https://redux.js.org/" /></li>
      <li v-anime="{translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 1300, loop: false }"><Link name="Django" link="https://www.djangoproject.com/" /></li>
      <li v-anime="{translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 1350, loop: false }"><Link name="OpenGL" link="https://www.khronos.org/opengl/" /></li>
      <li v-anime="{translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 1400, loop: false }"><Link name="WebGL" link="https://www.khronos.org/webgl/" /></li>
    </ul>

  </div>
</template>

<script>
import Navbar from './molecules/Navbar'
import Link from './atoms/Link'

export default {
  name: 'Coding',
  components: {
    Navbar,
    Link
  },
  data () {
    return {
      msg: 'Coding'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
