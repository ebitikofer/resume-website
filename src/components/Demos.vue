<template>
  <div class="demos">

    <Navbar :message="msg"
      name1="Introduction" link1="/"
      name2="Coding" link2="/coding"
      name3="Qualifictions" link3="/qualifications"
      name4="About" link4="/about"
    />

    <br/>

    <h2 v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 400, loop: false }">Demos</h2>
    <ul v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 450, loop: false }">
      <li v-anime="{translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 500, loop: false }"><Link name="the-craftsman" link="https://the-craftsman.firebaseapp.com/" /></li>
      <li v-anime="{translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 500, loop: false }"><Link name="game-test" link="https://game-test-bed.firebaseapp.com/" /></li>
      <li v-anime="{translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 600, loop: false }"><Link name="gadot-test" link="https://gadot-test-bed.firebaseapp.com/" /></li>
      <li v-anime="{translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 650, loop: false }"><Link name="k3b04rd-k!d-ii" link="https://github.com/ebitikofer/opengl_primitive_engine" /></li>
      <br/><br/>
      <li v-anime="{translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 650, loop: false }"><Link name="github" link="https://github.com/ebitikofer" /></li>
    </ul>

  </div>
</template>
<script>
import Navbar from './molecules/Navbar'
import Link from './atoms/Link'

export default {
  name: 'Demos',
  components: {
    Navbar,
    Link
  },
  data () {
    return {
      msg: 'Demos'
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
