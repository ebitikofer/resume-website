<template>
  <div class="about">

    <Navbar :message="msg"
      name1="Introduction" link1="/"
      name2="Coding" link2="/coding"
      name3="Qualifictions" link3="/qualifications"
      name4="Demos" link4="/demos"
    />

    <br/>

    <img src="../assets/me.png" v-anime="{ rotate: '1turn', easing: 'easeInOutQuint', opacity: [0, 1], duration: 2000, delay: 400, loop: false }">

    <h2 v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 450, loop: false }">Bio</h2>
    <p v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 500, loop: false }">I am human?</p>

    <br/>

    <h2 v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 550, loop: false }">Interests</h2>
    <p v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 600, loop: false }">I am human.</p>

  </div>
</template>

<script>
import Navbar from './molecules/Navbar'
import Link from './atoms/Link'

export default {
  name: 'About',
  components: {
    Navbar,
    Link
  },
  data () {
    return {
      msg: 'About'
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
