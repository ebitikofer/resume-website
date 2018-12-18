<template>
  <div class="introduction">

    <Navbar :message="msg"
      name1="Coding" link1="/coding"
      name2="Qualifictions" link2="/qualifications"
      name3="Demos" link3="/demos"
      name4="About" link4="/about"
    />

    <br/>

    <h2 v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 400, loop: false }">Intro</h2>

    <br/>

    <h2 v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 450, loop: false }">Contact</h2>
    <p v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 500, loop: false }">99 Main Street, Chauncey OH 45719 · 440-667-9751</p>
    <p v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 550, loop: false }">e.bitikofer@gmail.com · linkedin.com/in/ericbitikofer/</p>

  </div>
</template>

<script>
import Navbar from './molecules/Navbar'
import Link from './atoms/Link'

export default {
  name: 'Introduction',
  components: {
    Navbar,
    Link
  },
  data () {
    return {
      msg: 'Eric Bitikofer'
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
