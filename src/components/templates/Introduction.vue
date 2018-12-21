<template>
  <div class="introduction">

    <Navbar :message="msg" :routes="nvs" :delay = "0" /><br/>

    <!-- <h2 v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 400, loop: false }">Intro</h2> -->
    <p v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 500, loop: false }">Gui programming, human interface and interaction, immersion, art, animation and lots of other programming</p><br/>

    <h2 v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 450, loop: false }">Contact</h2>
    <p v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 500, loop: false }">440-667-9751 · e.bitikofer@gmail.com</p>
    <p v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 550, loop: false }"> · linkedin.com/in/ericbitikofer/ · </p>
    <p v-anime="{ translateY: 5, opacity: [.1, 1], backgroundColor: '#FFF', duration: 2000, delay: 550, loop: false }"> · 99 Main Street, Chauncey OH 45719 · </p>

  </div>
</template>

<script>
import Navbar from '../molecules/Navbar'
import Textsection from '../molecules/Textsection'

export default {
  name: 'Introduction',
  components: {
    Navbar,
    Textsection
  },
  data () {
    return {
      msg: 'Eric Bitikofer',
      nvs: [
        { name: 'Coding', link: '/coding' },
        { name: 'Qualifictions', link: '/qualifications' },
        { name: 'Demos', link: '/demos' },
        { name: 'About', link: '/about' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
